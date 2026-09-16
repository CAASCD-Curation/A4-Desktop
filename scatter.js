/* ============================================================
   scatter.js — 全部案例散点漂游页（视频复刻版 v2）
   整齐网格排布 + 正弦波浪漂游 + 全局呼吸缩放
   点击照片弹内容小浮窗
   ============================================================ */
(function () {
  "use strict";

  var archive = window.STAGE_ARCHIVE || {};
  var entries = [];

  Object.keys(archive).forEach(function (stageKey) {
    (archive[stageKey] || []).forEach(function (e) {
      if (e && e.img) {
        e._stage = stageKey;
        entries.push(e);
      }
    });
  });

  var field = document.getElementById("field");
  var countEl = document.getElementById("s-count");

  /* 角标：图片条数 / 总条目数 */
  var total = 0;
  Object.keys(archive).forEach(function (k) { total += (archive[k] || []).length; });
  if (countEl) {
    countEl.textContent = entries.length + " IMAGES / " + total + " ENTRIES";
  }

  if (!entries.length) {
    field.innerHTML = '<div style="position:fixed;left:50%;top:60%;transform:translateX(-50%);font-size:.8rem;letter-spacing:.2em;">暂无带图条目</div>';
    return;
  }

  /* ---------- 固定种子随机：每次打开排版一致 ---------- */
  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  var rnd = mulberry32(20260917);

  /* ---------- 生成照片块 ---------- */
  var tiles = entries.map(function (e) {
    var tile = document.createElement("div");
    tile.className = "tile";
    tile.dataset.id = e.id;

    var img = document.createElement("img");
    img.src = e.img;
    img.alt = e.title || e.id;
    img.loading = "lazy";
    img.draggable = false;
    tile.appendChild(img);

    var state = { el: tile, img: img, e: e, hover: false, w: 0, h: 0, bx: 0, by: 0, phase: 0, amp: 8 };
    tile.addEventListener("pointerenter", function () { state.hover = true; });
    tile.addEventListener("pointerleave", function () { state.hover = false; });
    tile.addEventListener("click", function (ev) {
      ev.stopPropagation();
      openPop(e);
    });

    field.appendChild(tile);
    return state;
  });

  /* ---------- 有大有小的疏朗散布（参考图同款） ----------
     尺寸分三档：大 12% / 中 26% / 小 62%
     位置：种子随机 + 最小间距拒绝采样 → 分布均匀疏朗、不堆砌 */
  var PAD_X = 0.055, PAD_TOP = 0.105, PAD_BOT = 0.105;

  function layout() {
    var W = window.innerWidth, H = window.innerHeight;
    var areaX = W * PAD_X, areaY = H * PAD_TOP;
    var areaW = W * (1 - 2 * PAD_X), areaH = H * (1 - PAD_TOP - PAD_BOT);

    var n = tiles.length;
    var u = Math.sqrt(areaW * areaH / n);   // 平均间距基准单位

    // 尺寸档位：0=大 1=中 2=小
    var tiers = tiles.map(function (_, i) {
      var r = rnd();
      return r < 0.12 ? 0 : (r < 0.38 ? 1 : 2);
    });

    var placed = []; // {x,y,w,h}

    function fits(x, y, w, h) {
      for (var i = 0; i < placed.length; i++) {
        var p = placed[i];
        var gap = 6; // 照片间最小空隙
        if (x < p.x + p.w + gap && x + w + gap > p.x &&
            y < p.y + p.h + gap && y + h + gap > p.y) return false;
      }
      return true;
    }

    // 先放大、再放中、最后小（大家先占好位置）
    var seq = tiles.map(function (_, i) { return i; })
      .sort(function (a, b) { return tiers[a] - tiers[b]; });

    for (var k = 0; k < n; k++) {
      var idx = seq[k];
      var t = tiles[idx];

      var w, h;
      if (tiers[idx] === 0)      { w = u * (1.15 + rnd() * 0.30); }
      else if (tiers[idx] === 1) { w = u * (0.78 + rnd() * 0.22); }
      else                       { w = u * (0.42 + rnd() * 0.26); }
      h = w * (0.72 + rnd() * 0.4);
      // 不超出安全区
      var maxW = areaW * 0.30, maxH = areaH * 0.34;
      if (w > maxW) { w = maxW; }
      if (h > maxH) { h = maxH; w = h / (0.72 + rnd() * 0.4); }
      t.w = w; t.h = h;
      t.el.style.width = w + "px";
      t.el.style.height = h + "px";

      // 拒绝采样找位置：优先无重叠，找不到就接受最空的一个
      var bx = areaX + rnd() * (areaW - w), by = areaY + rnd() * (areaH - h);
      for (var att = 0; att < 320; att++) {
        var cx = areaX + rnd() * (areaW - w);
        var cy = areaY + rnd() * (areaH - h);
        if (fits(cx, cy, w, h)) { bx = cx; by = cy; break; }
      }
      t.bx = bx; t.by = by;
      placed.push({ x: bx, y: by, w: w, h: h });

      // 波浪相位与摆幅（按位置错开，布面起伏）
      t.phase = (bx / areaW) * 3.4 + (by / areaH) * 4.6;
      t.amp = u * 0.065;
      t.rot0 = (rnd() - 0.5) * 3;
    }
  }
  layout();

  function place(t, x, y, r) {
    t.el.style.transform = "translate(" + x + "px," + y + "px) rotate(" + r + "deg)";
  }

  /* ---------- 动画：正弦波浪 + 全局呼吸缩放（视频同款） ---------- */
  var BREATH_PERIOD = 12000;       // 12 秒一次缩放呼吸
  function step(now) {
    var time = now / 1000;
    var paused = popOpen;

    // 全局呼吸：1.0 ↔ 1.10，缓慢缩放
    var s = 1.05 + 0.05 * Math.sin(time * 2 * Math.PI / BREATH_PERIOD);
    field.style.transform = "scale(" + s + ")";

    for (var i = 0; i < tiles.length; i++) {
      var t = tiles[i];
      if (t.hover || paused) continue; // 悬停/浮窗打开时暂停

      var x = t.bx + Math.sin(time * 0.70 + t.phase) * t.amp;
      var y = t.by + Math.cos(time * 0.52 + t.phase * 1.3) * t.amp * 0.75;
      var r = t.rot0 + Math.sin(time * 0.40 + t.phase) * 1.8;
      place(t, x, y, r);
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  window.addEventListener("resize", function () {
    layout();
    tiles.forEach(function (t) { place(t, t.bx, t.by, t.rot0); });
  });

  /* ---------- 内容小浮窗 ---------- */
  var pop = document.getElementById("s-pop");
  var mask = document.getElementById("s-pop-mask");
  var popImg = document.getElementById("s-pop-img");
  var popNo = document.getElementById("s-pop-no");
  var popTitle = document.getElementById("s-pop-title");
  var popYear = document.getElementById("s-pop-year");
  var popNote = document.getElementById("s-pop-note");
  var popTags = document.getElementById("s-pop-tags");
  var popClose = document.getElementById("s-pop-close");
  var popOpen = false;

  function openPop(e) {
    popImg.src = e.img;
    popImg.alt = e.title || e.id;
    popNo.textContent = e.id || "";
    popTitle.textContent = e.title || "";
    popYear.textContent = e.year || "";
    popNote.textContent = e.note || "";
    popTags.innerHTML = "";
    (e.tags || "").split(/[／\/、,，]/).forEach(function (tag) {
      tag = tag.trim();
      if (!tag) return;
      var s = document.createElement("span");
      s.textContent = tag;
      popTags.appendChild(s);
    });
    pop.hidden = false;
    mask.hidden = false;
    popOpen = true;
  }

  function closePop() {
    pop.hidden = true;
    mask.hidden = true;
    popOpen = false;
  }

  popClose.addEventListener("click", closePop);
  mask.addEventListener("click", closePop);
  window.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && popOpen) closePop();
  });

  /* ---------- 深链接：#id=A014 直接打开对应条目 ---------- */
  function openFromHash() {
    var m = location.hash.match(/id=([A-Za-z0-9_-]+)/);
    if (!m) return;
    var target = null;
    for (var i = 0; i < tiles.length; i++) {
      if (tiles[i].e.id === m[1]) { target = tiles[i].e; break; }
    }
    if (target) openPop(target);
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
