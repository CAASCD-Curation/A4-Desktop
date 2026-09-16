# -*- coding: utf-8 -*-
"""诊断：检测六张原图的内容包围盒，对比之前的裁剪框"""
from pathlib import Path
from PIL import Image
import numpy as np

SRC = Path(r"D:\微信\xwechat_files\wxid_dh2szyfbavyt22_9814\temp\RWTemp\2026-09\9e20f478899dc29eb19741386f9343c8")

def bbox(mask):
    ys, xs = np.where(mask)
    return (int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())) if len(xs) else None

MODES = {
    "01d0fafbfdddcdb381d0b246dcc8b579.jpg": "dark",
    "1507857d09eabee98f0a3ad879f068af.jpg": "dark",
    "ef8d48a87e4032e4b9fe27f79162ca9a.jpg": "light",
    "aacd4c9778a678c97aba361e34d9b171.jpg": "blue",
    "1a6a064799ccfa8c8c09df5b29914b52.png": "hour",
    "8872eca4b604e698df8397ebb0d1b0c4.jpg": "teal",
}

for f, mode in MODES.items():
    a = np.asarray(Image.open(SRC / f).convert("RGB")).astype(int)
    h, w, _ = a.shape
    lum = a.mean(2)
    if mode == "dark":
        m = lum > 40
    elif mode == "light":
        m = np.abs(a - a[2, 2]).max(2) > 28
    elif mode == "blue":
        m = np.abs(a - a[2, 2]).max(2) > 32
    elif mode == "hour":
        m = lum < 100
        m[:, :200] = False
        m[:, 2150:] = False
    else:
        m = np.abs(a - a[2, 2]).max(2) > 60
        m[225:, :] = False
    print(f[:12], mode, "size", (w, h), "content bbox", bbox(m))
