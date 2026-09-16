# -*- coding: utf-8 -*-
"""六例图抠图 v3：
1) 按背景模式粗分割 -> 连通域过滤(去噪点) -> 精确包围盒+边距裁剪
2) 四角播种洪泛去背景（小容差保护边缘），保留区域膨胀1px补回抗锯齿边缘
3) 保留像素一律不透明，杜绝'残缺'感
"""
from pathlib import Path
from collections import deque

from PIL import Image
import numpy as np
from scipy import ndimage

SRC = Path(r"D:\微信\xwechat_files\wxid_dh2szyfbavyt22_9814\temp\RWTemp\2026-09\9e20f478899dc29eb19741386f9343c8")
OUT = Path(r"D:\KimiData\kimi\tasks\2026-09-16\07-13-54-8ea59e88\retro-desktop\icons")
OUT.mkdir(parents=True, exist_ok=True)

def rough_mask(a, mode):
    lum = a.mean(2)
    if mode == "dark":      # 黑底：亮的就是内容
        return lum > 40
    if mode == "light":     # 浅灰渐变底
        return np.abs(a - a[2, 2]).max(2) > 28
    if mode == "blue":      # 浅蓝底
        return np.abs(a - a[2, 2]).max(2) > 32
    if mode == "hour":      # 白页面+黑沙漏：取页面内暗像素
        m = lum < 100
        m[:, :200] = False
        m[:, 2150:] = False
        return m
    if mode == "teal":      # 青底（先裁掉底部 QQ 文字区）
        m = np.abs(a - a[2, 2]).max(2) > 60
        m[225:, :] = False
        return m

def content_bbox(mask, min_area=80):
    lab, n = ndimage.label(mask)
    keep = np.zeros_like(mask)
    for i in range(1, n + 1):
        if (lab == i).sum() >= min_area:
            keep |= lab == i
    ys, xs = np.where(keep)
    if not len(xs):
        return None, keep
    return (xs.min(), ys.min(), xs.max(), ys.max()), keep

def flood_key(im, tol):
    a = np.asarray(im.convert("RGB")).astype(np.int16)
    h, w, _ = a.shape
    bg = np.zeros((h, w), dtype=bool)
    q = deque()
    for y, x in ((0, 0), (0, w - 1), (h - 1, 0), (h - 1, w - 1)):
        if not bg[y, x]:
            bg[y, x] = True; q.append((y, x))
    while q:
        y, x = q.popleft()
        c = a[y, x]
        for ny, nx in ((y-1,x),(y+1,x),(y,x-1),(y,x+1)):
            if 0 <= ny < h and 0 <= nx < w and not bg[ny, nx]:
                if np.abs(a[ny, nx] - c).max() < tol:
                    bg[ny, nx] = True; q.append((ny, nx))
    keep = ~bg
    keep = ndimage.binary_dilation(keep, iterations=1)  # 补回被容差吃掉的边缘
    keep &= ~bg  # 不越界到已确认背景
    alpha = np.where(keep, 255, 0).astype(np.uint8)
    return Image.fromarray(np.dstack([a.astype(np.uint8), alpha]), "RGBA")

JOBS = [
    ("01d0fafbfdddcdb381d0b246dcc8b579.jpg", "gather.png",     "dark"),
    ("aacd4c9778a678c97aba361e34d9b171.jpg", "labor.png",      "blue"),
    ("ef8d48a87e4032e4b9fe27f79162ca9a.jpg", "watch.png",      "light"),
    ("1a6a064799ccfa8c8c09df5b29914b52.png", "wait.png",       "hour"),
    ("1507857d09eabee98f0a3ad879f068af.jpg", "transgress.png", "dark"),
    ("8872eca4b604e698df8397ebb0d1b0c4.jpg", "absent.png",     "teal"),
]

MARGIN = 8
for name, out_name, mode in JOBS:
    im = Image.open(SRC / name)
    a = np.asarray(im.convert("RGB")).astype(int)
    bb, _ = content_bbox(rough_mask(a, mode))
    assert bb, name
    x0, y0, x1, y1 = bb
    x0 = max(0, x0 - MARGIN); y0 = max(0, y0 - MARGIN)
    x1 = min(im.size[0] - 1, x1 + MARGIN); y1 = min(im.size[1] - 1, y1 + MARGIN)
    im2 = im.crop((x0, y0, x1 + 1, y1 + 1))
    out = flood_key(im2, tol=8)
    out.save(OUT / out_name)
    print(out_name, "crop", (x0, y0, x1, y1), "->", out.size)
print("ALL DONE")
