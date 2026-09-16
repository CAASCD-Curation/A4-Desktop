# -*- coding: utf-8 -*-
"""六例图抠图 v3（输出到临时目录），随后统一为 320x320 透明画布居中"""
from pathlib import Path
from collections import deque

from PIL import Image
import numpy as np
from scipy import ndimage

SRC = Path(r"D:\微信\xwechat_files\wxid_dh2szyfbavyt22_9814\temp\RWTemp\2026-09\9e20f478899dc29eb19741386f9343c8")
ICONS = Path(r"D:\KimiData\kimi\tasks\2026-09-16\07-13-54-8ea59e88\retro-desktop\icons")
TMP = Path(r"D:\KimiData\kimi\tasks\2026-09-16\07-13-54-8ea59e88\retro-desktop\tools\_cut")
TMP.mkdir(exist_ok=True)

def rough_mask(a, mode):
    lum = a.mean(2)
    if mode == "dark":
        return lum > 40
    if mode == "light":
        return np.abs(a - a[2, 2]).max(2) > 28
    if mode == "blue":
        return np.abs(a - a[2, 2]).max(2) > 32
    if mode == "hour":
        m = lum < 100
        m[:, :200] = False
        m[:, 2150:] = False
        return m
    if mode == "teal":
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
    return (xs.min(), ys.min(), xs.max(), ys.max())

def flood_key(im, tol=8):
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
    keep = ndimage.binary_dilation(keep, iterations=1)
    keep &= ~bg
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
SIZE, INNER = 320, 276
for name, out_name, mode in JOBS:
    im = Image.open(SRC / name)
    a = np.asarray(im.convert("RGB")).astype(int)
    x0, y0, x1, y1 = content_bbox(rough_mask(a, mode))
    x0 = max(0, x0 - MARGIN); y0 = max(0, y0 - MARGIN)
    x1 = min(im.size[0] - 1, x1 + MARGIN); y1 = min(im.size[1] - 1, y1 + MARGIN)
    cut = flood_key(im.crop((x0, y0, x1 + 1, y1 + 1)))
    cut.save(TMP / out_name)
    # 只保留最大连通块（去文件夹左上角碎片）
    arr = np.array(cut)
    lab, n = ndimage.label(arr[:, :, 3] > 0)
    sizes = ndimage.sum(arr[:, :, 3] > 0, lab, range(1, n + 1))
    arr[:, :, 3] = np.where(lab == (np.argmax(sizes) + 1), arr[:, :, 3], 0).astype(np.uint8)
    cut = Image.fromarray(arr)
    bb = cut.getchannel("A").getbbox()
    if bb:
        cut = cut.crop(bb)
    scale = min(INNER / cut.size[0], INNER / cut.size[1])
    cut = cut.resize((max(1, round(cut.size[0] * scale)), max(1, round(cut.size[1] * scale))), Image.LANCZOS)
    tile = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    tile.alpha_composite(cut, ((SIZE - cut.size[0]) // 2, (SIZE - cut.size[1]) // 2))
    tile.save(ICONS / out_name)
    print(out_name, "->", tile.size, "icon", cut.size)
print("ALL DONE")
