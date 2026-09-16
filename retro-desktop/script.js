/* ============================================================
   RETRO-OS 98 · 桌面逻辑（第五轮 · 六分类主题窗口）
   - 桌面：红色背景 + 左侧一列六个分类图标
   - 📁 聚集 → 文件资源管理器（大量缩略图 + 全选 + 状态栏）
   - ⌨️ 劳作 → 文本编辑器（满屏文字 + 闪烁光标 + 另存为）
   - 👁️ 观看 → 媒体播放器（播放/暂停 + 进度条）
   - ⌛ 等待 → 下载管理器（卡在 87%）
   - 🔓 越界 → 无限错误弹窗
   - 👻 缺席 → 聊天窗口（对方离线）
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- 数据（来自 data.js / 桌面动作分类.xlsx） ---------------- */

  const CATS = window.TABLE_CATS || [];
  const ITEMS = window.TABLE_ITEMS || [];

  /* ---------------- 六个应用定义 ---------------- */

  const APPS = [
    { id: "gather",     emoji: "📁", label: "聚集", hint: "文件资源管理器", w: 660, h: 452, build: () => buildExplorer("聚集") },
    { id: "labor",      emoji: "⌨️", label: "劳作", hint: "文本编辑器",     w: 580, h: 440, build: buildEditor },
    { id: "watch",      emoji: "👁️", label: "观看", hint: "媒体播放器",     w: 480, h: 400, build: buildPlayer },
    { id: "wait",       emoji: "⌛", label: "等待", hint: "下载管理器",     w: 560, h: 420, build: buildDownload },
    { id: "transgress", emoji: "🔓", label: "越界", hint: "错误弹窗",       w: 400, h: 220, build: buildErrorHost },
    { id: "absent",     emoji: "👻", label: "缺席", hint: "聊天窗口",       w: 620, h: 500, build: buildChat },
    { id: "mine",       emoji: "💣", label: "扫雷", hint: "扫雷",           w: 300, h: 400, build: buildMinesweeper },
  ];

  /* ============================================================
     0. 音效：Web Audio 实时合成，无需外部音频文件
     ============================================================ */

  let audioCtx = null;
  function ac() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }
  function tone(freq, dur, type, vol, when, slideTo) {
    try {
      const ctx = ac();
      const t = ctx.currentTime + (when || 0);
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type || "square";
      o.frequency.setValueAtTime(freq, t);
      if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
      g.gain.setValueAtTime(vol || 0.1, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g).connect(ctx.destination);
      o.start(t);
      o.stop(t + dur + 0.02);
    } catch (e) { /* 浏览器不支持时静默 */ }
  }
  function noiseBurst(dur, vol) {
    try {
      const ctx = ac();
      const len = Math.floor(ctx.sampleRate * dur);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
      const s = ctx.createBufferSource();
      s.buffer = buf;
      const g = ctx.createGain();
      g.gain.value = vol;
      s.connect(g).connect(ctx.destination);
      s.start();
    } catch (e) { /* 忽略 */ }
  }
  const SFX = {
    click()  { tone(1200, 0.04, "square", 0.07); },
    open()   { tone(440, 0.08, "square", 0.09); tone(660, 0.1, "square", 0.09, 0.07); },
    close()  { tone(520, 0.06, "square", 0.08); tone(330, 0.09, "square", 0.08, 0.05); },
    error()  { tone(180, 0.22, "sawtooth", 0.11); },
    repair() { tone(523, 0.09, "triangle", 0.12); tone(659, 0.09, "triangle", 0.12, 0.08); tone(784, 0.14, "triangle", 0.12, 0.16); },
    send()   { tone(880, 0.08, "sine", 0.12, 0, 1320); },
    reveal() { tone(1500, 0.025, "square", 0.05); },
    flag()   { tone(700, 0.05, "square", 0.09); tone(940, 0.06, "square", 0.09, 0.04); },
    boom()   { noiseBurst(0.3, 0.32); tone(90, 0.3, "sawtooth", 0.18); },
    win()    { [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.12, "triangle", 0.12, i * 0.1)); },
  };

  function appMeta(id) {
    return APPS.find((a) => a.id === id);
  }

  function catItems(cat) {
    return ITEMS.filter((it) => it.cat === cat);
  }

  /* ---------------- 像素小图标（复用） ---------------- */

  const PIX = {
    // 例图复刻：平面细线文件夹（聚集 · 文件资源管理器）
    folder:
      '<svg viewBox="0 0 32 32">' +
      '<path d="M4 6 h10.5 l2.5 3.5 H28 v3 H4 Z" fill="#ffffff" stroke="#000000" stroke-width="1.2"/>' +
      '<path d="M4 11.5 h24 v13.5 H4 Z" fill="#ffffff" stroke="#000000" stroke-width="1.2"/>' +
      '<line x1="4" y1="15" x2="28" y2="15" stroke="#000000" stroke-width="1"/></svg>',
    // 例图复刻：平面细线文件页（缩略图回退）
    file:
      '<svg viewBox="0 0 32 32"><path d="M8 3.5 h11.5 l4.5 4.5 v20 H8 Z" fill="#ffffff" stroke="#000000" stroke-width="1.2"/>' +
      '<path d="M19.5 3.5 v4.5 h4.5" fill="none" stroke="#000000" stroke-width="1.2"/>' +
      '<line x1="11" y1="15" x2="22" y2="15" stroke="#000000" stroke-width="1.1"/>' +
      '<line x1="11" y1="19" x2="22" y2="19" stroke="#000000" stroke-width="1.1"/>' +
      '<line x1="11" y1="23" x2="18" y2="23" stroke="#000000" stroke-width="1.1"/></svg>',
    // 例图复刻：平面细线文档（劳作）
    word:
      '<svg viewBox="0 0 32 32">' +
      '<path d="M8 3.5 h11.5 l4.5 4.5 v20 H8 Z" fill="#ffffff" stroke="#000000" stroke-width="1.2"/>' +
      '<path d="M19.5 3.5 v4.5 h4.5" fill="none" stroke="#000000" stroke-width="1.2"/>' +
      '<line x1="11" y1="13" x2="22" y2="13" stroke="#000000" stroke-width="1.1"/>' +
      '<line x1="11" y1="17" x2="22" y2="17" stroke="#000000" stroke-width="1.1"/>' +
      '<line x1="11" y1="21" x2="22" y2="21" stroke="#000000" stroke-width="1.1"/>' +
      '<line x1="11" y1="25" x2="17" y2="25" stroke="#000000" stroke-width="1.1"/>' +
      '<path d="M11 5.6 l1.8 1.8 2.8-3" fill="none" stroke="#000000" stroke-width="1.3"/></svg>',
    // 例图复刻：平面细线屏幕 + 播放（观看 · 媒体播放器）
    media:
      '<svg viewBox="0 0 32 32">' +
      '<rect x="4" y="5" width="24" height="18" rx="2.5" fill="#ffffff" stroke="#000000" stroke-width="1.2"/>' +
      '<path d="M13.5 10.5 l7 3.5 -7 3.5 Z" fill="#000000"/>' +
      '<line x1="12" y1="28" x2="20" y2="28" stroke="#000000" stroke-width="1.2"/>' +
      '<line x1="16" y1="23.5" x2="16" y2="28" stroke="#000000" stroke-width="1.2"/></svg>',
    // 例图复刻：平面细线沙漏（等待 · 下载管理器）
    hourglass:
      '<svg viewBox="0 0 32 32">' +
      '<rect x="7" y="3" width="18" height="3" fill="#000000"/>' +
      '<rect x="7" y="26" width="18" height="3" fill="#000000"/>' +
      '<path d="M10 6 h12 v1.4 l-4.2 6.8 v1.6 l4.2 6.8 v1.4 H10 v-1.4 l4.2-6.8 v-1.6 L10 7.4 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3"/>' +
      '<path d="M13 8.4 h6 l-3 4.6 Z" fill="#000000"/>' +
      '<rect x="15.4" y="14" width="1.2" height="4.2" fill="#000000"/>' +
      '<path d="M12.6 23.6 h6.8 l-1.6-2.8 h-3.6 Z" fill="#000000"/></svg>',
    // 例图复刻：平面细线老式电脑（越界 · 设置）
    gear:
      '<svg viewBox="0 0 32 32">' +
      '<rect x="5" y="3" width="21" height="17" fill="#ffffff" stroke="#000000" stroke-width="1.2"/>' +
      '<rect x="7.5" y="5.5" width="16" height="11" fill="#ffffff" stroke="#000000" stroke-width="1"/>' +
      '<g stroke="#000000" stroke-width="0.9"><line x1="9.5" y1="13" x2="14" y2="8.5"/>' +
      '<line x1="12" y1="14" x2="17.5" y2="8.5"/><line x1="15" y1="14.5" x2="21" y2="8.5"/></g>' +
      '<circle cx="20.5" cy="12" r="1.5" fill="#000000"/>' +
      '<rect x="13" y="20" width="5" height="2.2" fill="#ffffff" stroke="#000000" stroke-width="1"/>' +
      '<rect x="7" y="22.2" width="17" height="3.4" fill="#ffffff" stroke="#000000" stroke-width="1.1"/>' +
      '<line x1="9.2" y1="23.9" x2="14.5" y2="23.9" stroke="#000000" stroke-width="1.1"/>' +
      '<rect x="19.5" y="23.2" width="2.6" height="1.4" fill="#000000"/>' +
      '<path d="M3 28 h19 v2.6 H3 Z" fill="#ffffff" stroke="#000000" stroke-width="1.1"/>' +
      '<g fill="#000000"><rect x="4.8" y="29" width="1.8" height="1.2"/><rect x="7.6" y="29" width="1.8" height="1.2"/>' +
      '<rect x="10.4" y="29" width="1.8" height="1.2"/><rect x="13.2" y="29" width="1.8" height="1.2"/>' +
      '<rect x="16" y="29" width="1.8" height="1.2"/></g>' +
      '<circle cx="26.5" cy="29.2" r="2.4" fill="#ffffff" stroke="#000000" stroke-width="1.1"/>' +
      '<line x1="26.5" y1="27" x2="26.5" y2="31.4" stroke="#000000" stroke-width="0.9"/></svg>',
    // 例图复刻：平面细线企鹅（缺席）
    qq:
      '<svg viewBox="0 0 32 32">' +
      '<path d="M8 15 a8 9 0 0 1 16 0 v7.4 l1.8 3.2 -2.8 1.2 -1.7-1.4 v1.3 h-11.6 v-1.3 l-1.7 1.4 -2.8-1.2 1.8-3.2 Z" fill="#ffffff" stroke="#000000" stroke-width="1.3"/>' +
      '<path d="M8.2 16.4 l-2.2 4.2 2.2 1.4 Z" fill="#ffffff" stroke="#000000" stroke-width="1"/>' +
      '<path d="M23.8 16.4 l2.2 4.2 -2.2 1.4 Z" fill="#ffffff" stroke="#000000" stroke-width="1"/>' +
      '<ellipse cx="16" cy="21" rx="5" ry="5.4" fill="#ffffff" stroke="#000000" stroke-width="1"/>' +
      '<ellipse cx="12.7" cy="11.2" rx="2.7" ry="3.3" fill="#ffffff" stroke="#000000" stroke-width="1"/>' +
      '<ellipse cx="19.3" cy="11.2" rx="2.7" ry="3.3" fill="#ffffff" stroke="#000000" stroke-width="1"/>' +
      '<circle cx="13.4" cy="11.8" r="1.3" fill="#000000"/><circle cx="18.6" cy="11.8" r="1.3" fill="#000000"/>' +
      '<path d="M13.6 14.4 h4.8 l-2.4 2.6 Z" fill="#000000"/>' +
      '<path d="M9.5 16.2 q6.5 3.4 13 0 v3 q-6.5 3.4 -13 0 Z" fill="#000000"/>' +
      '<path d="M10.2 18.5 l-2.2 4.4 2.9 0.7 1.4-3.9 Z" fill="#000000"/>' +
      '<path d="M10.6 27 h4.2 l-0.9 2.2 h-4.4 Z" fill="#000000"/>' +
      '<path d="M17.2 27 h4.2 l1.2 2.2 h-4.4 Z" fill="#000000"/></svg>',
    // 例图复刻：平面细线警告三角
    warn:
      '<svg viewBox="0 0 32 32"><path d="M16 4 L29 27 H3 Z" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>' +
      '<rect x="14.8" y="12" width="2.4" height="8" fill="#000000"/><rect x="14.8" y="22" width="2.4" height="2.4" fill="#000000"/></svg>',
  };

  const APP_ICONS = {
    gather: PIX.folder, labor: PIX.word, watch: PIX.media,
    wait: PIX.hourglass, transgress: PIX.gear, absent: PIX.qq,
  };

  /* 桌面大图标的原始例图（一比一复原，透明背景 PNG） */
  const APP_ICON_IMG = {
    gather: "icons/gather.png", labor: "icons/labor.png", watch: "icons/watch.png",
    wait: "icons/wait.png", transgress: "icons/transgress.png", absent: "icons/absent.png",
    mine: "icons/mine.png",
  };

  /* ---------------- DOM 引用 ---------------- */

  const desktopEl    = document.getElementById("desktop");
  const iconLayerEl  = document.getElementById("icon-layer");
  const windowLayerEl = document.getElementById("window-layer");
  const taskButtonsEl = document.getElementById("task-buttons");
  const clockEl      = document.getElementById("tray-clock");
  const startBtnEl   = document.getElementById("start-button");
  const startMenuEl  = document.getElementById("start-menu");

  /* ---------------- 全局状态 ---------------- */

  let zCounter = 10;
  const windows = new Map();    // appId -> { el, taskBtnEl }
  const DRAG_CLICK_TOLERANCE = 5;
  const CLOSE_ANIM_MS = 160;

  function clampToDesktop(x, y, elW, elH) {
    const rect = desktopEl.getBoundingClientRect();
    return {
      x: Math.min(Math.max(x, 0), Math.max(rect.width - elW, 0)),
      y: Math.min(Math.max(y, 0), Math.max(rect.height - elH, 0)),
    };
  }

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ============================================================
     1. 桌面图标：六个分类，左侧一列
     ============================================================ */

  function layoutCategoryIcons() {
    // 竖排单列：等距分布，图标与名称间距由 CSS .cat-icon gap 控制
    const COLS = 1, COL_W = 118, ROW_H = 118, ORIGIN_X = 20, ORIGIN_Y = 16;
    APPS.forEach((app, i) => {
      const el = document.createElement("div");
      el.className = "desktop-icon cat-icon";
      el.dataset.appId = app.id;
      el.style.left = ORIGIN_X + (i % COLS) * COL_W + "px";
      el.style.top = ORIGIN_Y + Math.floor(i / COLS) * ROW_H + "px";
      el.innerHTML =
        '<div class="icon-box"><img class="cat-img" src="' + APP_ICON_IMG[app.id] + '" alt="" draggable="false"></div>' +
        '<div class="icon-label">' + app.label + "</div>";
      iconLayerEl.appendChild(el);
      attachIconDrag(el);
      attachIconTooltip(el, app);
      el.addEventListener("click", (e) => {
        e.preventDefault();
        if (dragMoved) return;
        SFX.click();
        openApp(app.id);
      });
    });
  }

  let dragMoved = false;

  function attachIconDrag(iconEl) {
    let startX = 0, startY = 0, origX = 0, origY = 0;
    let dragging = false;

    iconEl.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      selectIcon(iconEl);
      hideTooltip();
      startX = e.clientX;
      startY = e.clientY;
      origX = parseFloat(iconEl.style.left) || 0;
      origY = parseFloat(iconEl.style.top) || 0;
      dragging = true;
      dragMoved = false;

      const onMove = (ev) => {
        if (!dragging) return;
        const dx = ev.clientX - startX;
        const dy = ev.clientY - startY;
        if (!dragMoved && Math.hypot(dx, dy) > DRAG_CLICK_TOLERANCE) {
          dragMoved = true;
          iconEl.classList.add("dragging");
        }
        if (dragMoved) {
          iconEl.style.left = origX + dx + "px";
          iconEl.style.top = origY + dy + "px";
        }
      };

      const onUp = () => {
        dragging = false;
        iconEl.classList.remove("dragging");
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        setTimeout(() => { dragMoved = false; }, 0);
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
  }

  function selectIcon(iconEl) {
    document.querySelectorAll(".desktop-icon.selected").forEach((el) => el.classList.remove("selected"));
    iconEl.classList.add("selected");
  }

  desktopEl.addEventListener("mousedown", (e) => {
    if (e.target === desktopEl || e.target === iconLayerEl || e.target === windowLayerEl) {
      document.querySelectorAll(".desktop-icon.selected").forEach((el) => el.classList.remove("selected"));
    }
  });

  /* ---------------- 图标悬停提示 ---------------- */

  let tooltipEl = null;

  function ensureTooltip() {
    if (!tooltipEl) {
      tooltipEl = document.createElement("div");
      tooltipEl.className = "icon-tooltip";
      tooltipEl.style.display = "none";
      document.body.appendChild(tooltipEl);
    }
    return tooltipEl;
  }

  function attachIconTooltip(iconEl, app) {
    iconEl.addEventListener("mouseenter", () => {
      const tip = ensureTooltip();
      tip.innerHTML = '<span class="tip-title">' + app.emoji + " " + app.label + "</span>\n" + app.hint;
      tip.style.display = "block";
      const rect = iconEl.getBoundingClientRect();
      const tipRect = tip.getBoundingClientRect();
      let x = rect.right + 10;
      let y = rect.top - 4;
      if (x + tipRect.width > window.innerWidth - 8) x = rect.left - tipRect.width - 10;
      if (y + tipRect.height > window.innerHeight - 40) y = window.innerHeight - tipRect.height - 40;
      tip.style.left = x + "px";
      tip.style.top = y + "px";
    });
    iconEl.addEventListener("mouseleave", hideTooltip);
  }

  function hideTooltip() {
    if (tooltipEl) tooltipEl.style.display = "none";
  }

  /* ============================================================
     2. 窗口框架
     ============================================================ */

  let windowSpawnOffset = 0;

  function buildWindowShell(titleIconHtml, titleText, bodyHtml, bodyClass) {
    const winEl = document.createElement("div");
    winEl.className = "window anim-open";
    winEl.innerHTML =
      '<div class="window-titlebar">' +
        '<span class="title-icon">' + titleIconHtml + "</span>" +
        '<span class="title-text">' + escapeHtml(titleText) + "</span>" +
        '<button class="titlebar-btn btn-minimize" type="button" title="最小化">_</button>' +
        '<button class="titlebar-btn btn-close" type="button" title="关闭">✕</button>' +
      "</div>" +
      '<div class="window-body' + (bodyClass ? " " + bodyClass : "") + '">' + bodyHtml + "</div>";
    winEl.addEventListener("animationend", () => winEl.classList.remove("anim-open"));
    return winEl;
  }

  function placeWindow(winEl, w, h) {
    const dw = desktopEl.clientWidth, dh = desktopEl.clientHeight;
    const off = windowSpawnOffset % 5;
    windowSpawnOffset++;
    const pos = clampToDesktop((dw - w) / 2 + off * 24, (dh - h) / 2 + off * 24, w, h);
    winEl.style.width = w + "px";
    winEl.style.height = h + "px";
    winEl.style.left = Math.max(pos.x, 8) + "px";
    winEl.style.top = Math.max(pos.y, 8) + "px";
  }

  function openApp(id) {
    let app = appMeta(id);
    if (!app) return;
    if (windows.has(id)) {
      restoreWindow(id);
      return;
    }
    // 越界修复完成后：标识变成文件夹，点开进入「越界」分类的文件夹
    if (id === "transgress" && transgressRepaired) {
      app = { ...app, hint: "文件资源管理器", w: 660, h: 452, build: () => buildExplorer("越界") };
    }
    const built = app.build();
    SFX.open();
    const winEl = buildWindowShell(app.emoji, app.label, built.html, built.bodyClass);
    winEl.dataset.winId = id;
    placeWindow(winEl, app.w, app.h);
    windowLayerEl.appendChild(winEl);

    const taskBtn = document.createElement("button");
    taskBtn.className = "task-button active";
    taskBtn.type = "button";
    taskBtn.innerHTML = "<span>" + app.emoji + "</span><span>" + app.label + "</span>";
    taskButtonsEl.appendChild(taskBtn);

    windows.set(id, { el: winEl, taskBtnEl: taskBtn });

    winEl.addEventListener("mousedown", () => focusWindow(id));
    taskBtn.addEventListener("click", () => toggleWindowFromTaskbar(id));
    winEl.querySelector(".btn-minimize").addEventListener("click", (e) => {
      e.stopPropagation();
      minimizeWindow(id);
    });
    winEl.querySelector(".btn-close").addEventListener("click", (e) => {
      e.stopPropagation();
      closeWindow(id);
      if (built.onClose) built.onClose();
    });
    attachWindowDrag(winEl, id);
    attachResize(winEl, { minW: 320, minH: 240 });
    focusWindow(id);

    if (built.init) built.init(winEl);
  }

  function focusWindow(key) {
    const rec = windows.get(key);
    if (!rec || rec.el.classList.contains("anim-close")) return;
    rec.el.style.zIndex = ++zCounter;
    windows.forEach((r, k) => {
      r.el.classList.toggle("inactive", k !== key);
      r.taskBtnEl.classList.toggle("active", k === key && !r.el.classList.contains("minimized"));
    });
  }

  function minimizeWindow(key) {
    const rec = windows.get(key);
    if (!rec) return;
    SFX.click();
    rec.el.classList.add("minimized");
    rec.taskBtnEl.classList.remove("active");
    promoteTopVisibleWindow();
  }

  function restoreWindow(key) {
    const rec = windows.get(key);
    if (!rec) return;
    const wasMinimized = rec.el.classList.contains("minimized");
    rec.el.classList.remove("minimized");
    if (wasMinimized) {
      rec.el.classList.remove("anim-open");
      void rec.el.offsetWidth;
      rec.el.classList.add("anim-open");
    }
    focusWindow(key);
  }

  function closeWindow(key) {
    const rec = windows.get(key);
    if (!rec) return;
    SFX.close();
    if (rec.el.classList.contains("anim-close")) return;
    rec.el.classList.add("anim-close");
    windows.delete(key);
    setTimeout(() => {
      rec.el.remove();
      rec.taskBtnEl.remove();
      promoteTopVisibleWindow();
    }, CLOSE_ANIM_MS);
  }

  function toggleWindowFromTaskbar(key) {
    if (!windows.has(key)) return;
    const rec = windows.get(key);
    if (rec.el.classList.contains("minimized")) {
      restoreWindow(key);
    } else if (parseInt(rec.el.style.zIndex, 10) === zCounter && !rec.el.classList.contains("inactive")) {
      minimizeWindow(key);
    } else {
      focusWindow(key);
    }
  }

  function promoteTopVisibleWindow() {
    let top = null;
    windows.forEach((r, k) => {
      if (!r.el.classList.contains("minimized") && !r.el.classList.contains("anim-close")) {
        if (!top || parseInt(r.el.style.zIndex, 10) > parseInt(top.el.style.zIndex, 10)) {
          top = { key: k, el: r.el };
        }
      }
    });
    if (top) focusWindow(top.key);
    else {
      windows.forEach((r) => {
        r.el.classList.add("inactive");
        r.taskBtnEl.classList.remove("active");
      });
    }
  }

  function attachWindowDrag(winEl, key) {
    const titlebar = winEl.querySelector(".window-titlebar");
    titlebar.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      if (e.target.closest(".titlebar-btn")) return;
      e.preventDefault();
      focusWindow(key);
      const startX = e.clientX, startY = e.clientY;
      const origX = parseFloat(winEl.style.left) || 0;
      const origY = parseFloat(winEl.style.top) || 0;
      const onMove = (ev) => {
        const pos = clampToDesktop(
          origX + ev.clientX - startX, origY + ev.clientY - startY,
          winEl.offsetWidth, winEl.offsetHeight
        );
        winEl.style.left = pos.x + "px";
        winEl.style.top = pos.y + "px";
        winEl.classList.add("dragging");
      };
      const onUp = () => {
        winEl.classList.remove("dragging");
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
    titlebar.addEventListener("dblclick", (e) => {
      if (e.target.closest(".titlebar-btn")) return;
      minimizeWindow(key);
    });
  }

  /* ---------------- 窗口 resizing：右边 / 底边 / 右下角拖拽 ---------------- */

  const RZ_DIRS = [
    { cls: "rz-e",  cursor: "ew-resize",   dx: 1, dy: 0 },
    { cls: "rz-s",  cursor: "ns-resize",   dx: 0, dy: 1 },
    { cls: "rz-se", cursor: "nwse-resize", dx: 1, dy: 1 },
  ];

  function attachResize(el, opts) {
    opts = opts || {};
    const minW = opts.minW || 240;
    const minH = opts.minH || 160;
    RZ_DIRS.forEach((d) => {
      const grip = document.createElement("div");
      grip.className = "rz-handle " + d.cls;
      grip.style.cursor = d.cursor;
      grip.title = "拖拽调整大小";
      el.appendChild(grip);
      grip.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        e.preventDefault();
        e.stopPropagation();
        const startX = e.clientX, startY = e.clientY;
        const startW = el.offsetWidth, startH = el.offsetHeight;
        const onMove = (ev) => {
          if (d.dx) {
            const maxW = desktopEl.clientWidth - el.offsetLeft;
            el.style.width = Math.max(minW, Math.min(startW + ev.clientX - startX, maxW)) + "px";
          }
          if (d.dy) {
            const maxH = desktopEl.clientHeight - el.offsetTop;
            el.style.height = Math.max(minH, Math.min(startH + ev.clientY - startY, maxH)) + "px";
          }
        };
        const onUp = () => {
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup", onUp);
        };
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
      });
    });
  }

  /* ============================================================
     3. 📁 聚集 · 文件资源管理器（只含「聚集」条目，可点开看图和文字）
     ============================================================ */

  // 按原类别配的像素插图（详情大图用）
  const ART_ICONS = {
    "形式灵感":
      '<svg viewBox="0 0 64 64">' +
      '<line x1="10" y1="56" x2="54" y2="56" stroke="#000000" stroke-width="2"/>' +
      '<rect x="8" y="24" width="48" height="6" fill="#ffffff" stroke="#000000" stroke-width="2.2"/>' +
      '<line x1="13" y1="30" x2="11" y2="54" stroke="#000000" stroke-width="2.2"/>' +
      '<line x1="51" y1="30" x2="53" y2="54" stroke="#000000" stroke-width="2.2"/>' +
      '<line x1="20" y1="30" x2="19" y2="54" stroke="#000000" stroke-width="1.4"/>' +
      '<line x1="44" y1="30" x2="45" y2="54" stroke="#000000" stroke-width="1.4"/>' +
      '<ellipse cx="24" cy="20" rx="8" ry="3.2" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>' +
      '<circle cx="24" cy="18.5" r="2.2" fill="#000000"/>' +
      '<rect x="38" y="13" width="6" height="9" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>' +
      '<path d="M44 14.5 h4 v4.5 h-4" fill="none" stroke="#000000" stroke-width="1.8"/></svg>',
    "文学意象":
      '<svg viewBox="0 0 64 64">' +
      '<path d="M8 16 q12 -6 24 0 v32 q-12 -6 -24 0 Z" fill="#ffffff" stroke="#000000" stroke-width="2.2"/>' +
      '<path d="M56 16 q-12 -6 -24 0 v32 q12 -6 24 0 Z" fill="#ffffff" stroke="#000000" stroke-width="2.2"/>' +
      '<line x1="32" y1="15" x2="32" y2="49" stroke="#000000" stroke-width="2"/>' +
      '<g stroke="#000000" stroke-width="1.6"><line x1="12" y1="24" x2="28" y2="22"/><line x1="12" y1="30" x2="28" y2="28"/>' +
      '<line x1="12" y1="36" x2="28" y2="34"/><line x1="36" y1="22" x2="52" y2="24"/><line x1="36" y1="28" x2="52" y2="30"/>' +
      '<line x1="36" y1="34" x2="52" y2="36"/></g></svg>',
    "社会素材":
      '<svg viewBox="0 0 64 64">' +
      '<path d="M24 28 q8 -12 16 0" fill="none" stroke="#000000" stroke-width="2.4"/>' +
      '<circle cx="19" cy="25" r="4.4" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>' +
      '<circle cx="29" cy="21" r="4.4" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>' +
      '<circle cx="39" cy="25" r="4.4" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>' +
      '<circle cx="47" cy="21" r="3.6" fill="#000000"/>' +
      '<path d="M10 28 h44 l-5 20 H15 Z" fill="#ffffff" stroke="#000000" stroke-width="2.2"/>' +
      '<line x1="12.5" y1="34" x2="51.5" y2="34" stroke="#000000" stroke-width="1.4"/>' +
      '<line x1="14.5" y1="41" x2="49.5" y2="41" stroke="#000000" stroke-width="1.4"/>' +
      '<circle cx="24" cy="37.5" r="1.8" fill="#000000"/><circle cx="33" cy="44" r="1.8" fill="#000000"/>' +
      '<circle cx="42" cy="37.5" r="1.8" fill="#000000"/></svg>',
    "经典艺术档案":
      '<svg viewBox="0 0 64 64">' +
      '<rect x="7" y="7" width="50" height="46" fill="#ffffff" stroke="#000000" stroke-width="2.6"/>' +
      '<rect x="14" y="14" width="36" height="32" fill="#ffffff" stroke="#000000" stroke-width="1.6"/>' +
      '<circle cx="24" cy="24" r="4.2" fill="none" stroke="#000000" stroke-width="1.8"/>' +
      '<path d="M14 40 L26 26 L34 36 L42 24 L50 40 V46 H14 Z" fill="#ffffff" stroke="#000000" stroke-width="1.8"/>' +
      '<line x1="7" y1="10.5" x2="57" y2="10.5" stroke="#000000" stroke-width="1.2"/></svg>',
  };

  function artIcon(src) {
    return ART_ICONS[src] || ART_ICONS["形式灵感"];
  }

  function buildExplorer(cat) {
    const catName = cat || "聚集";
    const items = catItems(catName); // 只放对应分类的内容
    const PHOTOS = window.TABLE_PHOTOS || {};
    let thumbs = "";
    items.forEach((it, i) => {
      const photo = PHOTOS[it.id];
      thumbs +=
        '<div class="thumb" data-idx="' + i + '" title="双击查看详情">' +
          '<div class="thumb-icon">' +
            (photo ? '<img src="' + escapeHtml(photo) + '" alt="" loading="lazy">' : PIX.folder) +
          "</div>" +
          '<div class="thumb-label">' + escapeHtml(it.name) + "</div>" +
        "</div>";
    });
    const total = items.length;
    const html =
      '<div class="explorer">' +
        '<div class="exp-toolbar">' +
          '<button class="tb-btn exp-select-all" type="button">全选</button>' +
          '<button class="tb-btn" type="button" disabled>复制</button>' +
          '<button class="tb-btn" type="button" disabled>删除</button>' +
          '<span class="exp-path">C:\\桌面动作\\' + catName + '\\</span>' +
        "</div>" +
        '<div class="exp-grid">' + thumbs + "</div>" +
        '<div class="exp-detail" hidden>' +
          '<div class="exp-detail-body">' +
            '<div class="exp-art"></div>' +
            '<div class="exp-info">' +
              '<h3 class="exp-name"></h3>' +
              '<div class="exp-chips"></div>' +
              '<div class="exp-reason"><p></p></div>' +
            "</div>" +
          "</div>" +
          '<div class="exp-detail-bar"><button class="tb-btn exp-back" type="button">← 返回</button></div>' +
        "</div>" +
        '<div class="exp-status">' + total + "项，选中0项</div>" +
      "</div>";
    return {
      html: html,
      bodyClass: "app-body",
      init(winEl) {
        const grid = winEl.querySelector(".exp-grid");
        const detail = winEl.querySelector(".exp-detail");
        const status = winEl.querySelector(".exp-status");
        const updateStatus = (n) => {
          status.textContent = total + "项，选中" + n + "项";
        };
        const openDetail = (item) => {
          const photo = PHOTOS[item.id];
          detail.querySelector(".exp-art").innerHTML =
            photo ? '<img src="' + escapeHtml(photo) + '" alt="' + escapeHtml(item.name) + '">' : artIcon(item.src);
          detail.querySelector(".exp-name").textContent = item.name;
          detail.querySelector(".exp-chips").innerHTML =
            '<span class="item-chip" style="background:#000000;color:#ffffff">' + escapeHtml(item.cat) + "</span>" +
            '<span class="item-chip chip-gray">' + escapeHtml(item.src) + "</span>" +
            '<span class="item-chip chip-gray">' + escapeHtml(item.id) + "</span>";
          detail.querySelector(".exp-reason p").textContent = item.reason;
          grid.style.display = "none";
          detail.hidden = false;
        };
        grid.addEventListener("click", (e) => {
          const th = e.target.closest(".thumb");
          if (!th) return;
          th.classList.add("selected");
          updateStatus(grid.querySelectorAll(".thumb.selected").length);
          const item = items[parseInt(th.dataset.idx, 10)];
          if (item) openDetail(item);
        });
        winEl.querySelector(".exp-back").addEventListener("click", () => {
          detail.hidden = true;
          grid.style.display = "";
        });
        winEl.querySelector(".exp-select-all").addEventListener("click", () => {
          grid.querySelectorAll(".thumb").forEach((t) => t.classList.add("selected"));
          updateStatus(total);
        });
      },
    };
  }

  /* ============================================================
     4. ⌨️ 劳作 · 文本编辑器
     ============================================================ */

  function buildEditor() {
    const lines = catItems("劳作");
    let text =
      "  RETRO-OS 98 记事本 —— 劳作日志\r\n" +
      "  ========================================\r\n\r\n";
    lines.forEach((it, i) => {
      text += "  " + String(i + 1).padStart(2, "0") + " [" + it.id + "] " + it.name +
              " —— " + it.reason + "\r\n";
    });
    text += "\r\n  ----------------------------------------\r\n  （全文完，共 " + lines.length + " 条记录）\r\n";

    const html =
      '<div class="editor">' +
        '<div class="ed-head">' +
          '<span class="ed-state">● 未保存</span>' +
          '<span class="ed-filename">无标题.txt</span>' +
          '<button class="tb-btn ed-save-as" type="button">另存为...</button>' +
        "</div>" +
        '<pre class="ed-text">' + escapeHtml(text) + "</pre>" +
        '<span class="ed-caret">▌</span>' +
        '<div class="ed-foot">共 ' + lines.length + ' 行 · 换行 (CRLF) · 编码 ANSI</div>' +
      "</div>";

    return {
      html: html,
      bodyClass: "app-body",
      init(winEl) {
        const state = winEl.querySelector(".ed-state");
        const fname = winEl.querySelector(".ed-filename");
        // 让光标滚动到可视区
        const caret = winEl.querySelector(".ed-caret");
        if (caret) caret.scrollIntoView(false);

        winEl.querySelector(".ed-save-as").addEventListener("click", () => {
          openSaveDialog(winEl, (name) => {
            fname.textContent = name;
            state.textContent = "✔ 已保存";
            state.classList.add("saved");
          });
        });
      },
    };
  }

  /* ---- 「另存为」对话框 ---- */

  function openSaveDialog(hostWin, onSave) {
    if (document.querySelector(".save-dialog")) return;
    const dlg = document.createElement("div");
    dlg.className = "save-dialog";
    dlg.innerHTML =
      '<div class="save-title"><span>另存为</span>' +
      '<button class="titlebar-btn save-cancel-x" type="button">✕</button></div>' +
      '<div class="save-body">' +
        "<p>文件名：</p>" +
        '<input class="save-input" type="text" value="劳作日志_最终版.txt" spellcheck="false" />' +
        '<div class="save-btns">' +
          '<button class="tb-btn save-ok" type="button">保存</button>' +
          '<button class="tb-btn save-cancel" type="button">取消</button>' +
        "</div>" +
      "</div>";
    const hr = hostWin.getBoundingClientRect();
    const dr = desktopEl.getBoundingClientRect();
    dlg.style.left = Math.max(hr.left - dr.left + 40, 8) + "px";
    dlg.style.top = Math.max(hr.top - dr.top + 60, 8) + "px";
    dlg.style.zIndex = ++zCounter;
    windowLayerEl.appendChild(dlg);
    const input = dlg.querySelector(".save-input");
    input.focus();
    input.select();

    const closeDlg = () => dlg.remove();
    attachResize(dlg, { minW: 240, minH: 150 });
    dlg.querySelector(".save-ok").addEventListener("click", () => {
      const name = input.value.trim() || "未命名.txt";
      onSave(name);
      closeDlg();
    });
    dlg.querySelector(".save-cancel").addEventListener("click", closeDlg);
    dlg.querySelector(".save-cancel-x").addEventListener("click", closeDlg);
  }

  /* ============================================================
     5. 👁️ 观看 · 媒体播放器（幻灯片：逐张播放「观看」条目的图片）
     ============================================================ */

  function buildPlayer() {
    const slides = catItems("观看");           // 26 个「观看」条目
    const PHOTOS = window.TABLE_PHOTOS || {};  // 可选照片清单：{ 编号: 'photos/xx.jpg' }

    const html =
      '<div class="player">' +
        '<div class="pv-screen">' +
          '<div class="pv-slide"></div>' +
          '<div class="pv-caption" hidden></div>' +
          '<div class="pv-osd">▶ 暂停中</div>' +
        "</div>" +
        '<div class="pv-controls">' +
          '<button class="pv-btn pv-prev" type="button" title="上一张">⏮</button>' +
          '<button class="pv-btn pv-play" type="button" title="播放/暂停">▶</button>' +
          '<button class="pv-btn pv-next" type="button" title="下一张">⏭</button>' +
          '<div class="pv-progress"><div class="pv-fill"></div></div>' +
          '<span class="pv-time">1 / ' + slides.length + "</span>" +
        "</div>" +
        '<div class="pv-status">状态：暂停 · 幻灯片放映</div>' +
      "</div>";

    const SLIDE_SECS = 3;   // 每张停留 3 秒
    const TICK = 100;       // 进度刷新间隔
    let idx = 0, sub = 0, playing = false, timer = null;

    return {
      html: html,
      bodyClass: "app-body",
      init(winEl) {
        const slideEl = winEl.querySelector(".pv-slide");
        const caption = winEl.querySelector(".pv-caption");
        const fill = winEl.querySelector(".pv-fill");
        const time = winEl.querySelector(".pv-time");
        const playBtn = winEl.querySelector(".pv-play");
        const osd = winEl.querySelector(".pv-osd");
        const status = winEl.querySelector(".pv-status");
        const n = slides.length;

        const renderSlide = () => {
          const it = slides[idx];
          const photo = PHOTOS[it.id];
          if (photo) {
            slideEl.innerHTML = '<img src="' + escapeHtml(photo) + '" alt="' + escapeHtml(it.name) + '">';
            // 图片加载失败时回退到线稿占位插图，避免黑屏/破图
            const im = slideEl.querySelector("img");
            if (im) im.addEventListener("error", () => { slideEl.innerHTML = artIcon(it.src); });
          } else {
            slideEl.innerHTML = artIcon(it.src); // 占位像素插图，导入照片后自动替换
          }
          caption.innerHTML =
            "<b>" + escapeHtml(it.name) + "</b>" +
            '<span class="pv-cap-reason">' + escapeHtml(it.reason) + "</span>";
          caption.hidden = false;
        };
        const renderProgress = () => {
          fill.style.width = ((idx + sub / SLIDE_SECS) / n) * 100 + "%";
          time.textContent = (idx + 1) + " / " + n;
        };
        const render = () => { renderSlide(); renderProgress(); };

        const setPlaying = (p) => {
          playing = p;
          playBtn.textContent = p ? "⏸" : "▶";
          osd.textContent = p ? "" : "▶ 暂停中";
          status.textContent = "状态：" + (p ? "播放中" : "暂停") + " · 幻灯片放映";
          if (p && !timer) {
            timer = setInterval(() => {
              sub += TICK / 1000;
              if (sub >= SLIDE_SECS) {
                sub = 0;
                idx = (idx + 1) % n;   // 循环播放
                renderSlide();
              }
              renderProgress();
            }, TICK);
          } else if (!p && timer) {
            clearInterval(timer);
            timer = null;
          }
        };

        playBtn.addEventListener("click", () => setPlaying(!playing));
        winEl.querySelector(".pv-prev").addEventListener("click", () => {
          idx = (idx - 1 + n) % n; sub = 0; render();
        });
        winEl.querySelector(".pv-next").addEventListener("click", () => {
          idx = (idx + 1) % n; sub = 0; render();
        });
        render();
      },
      onClose() {
        if (timer) { clearInterval(timer); timer = null; }
      },
    };
  }

  /* ============================================================
     6. ⌛ 等待 · 下载管理器
     ============================================================ */

  function buildDownload() {
    // 等待部分（原卡 87% 界面）—— 抽出为独立片段，完成后作为记录嵌入
    const waitingHtml =
      '<div class="dl-waiting">' +
        '<p class="dl-file">正在下载：retro_os_98_完整安装包.exe</p>' +
        '<div class="dl-bar"><div class="dl-fill"></div><span class="dl-pct">87%</span></div>' +
        '<p class="dl-status">正在下载……</p>' +
        '<p class="dl-meta">速度：0 KB/s ｜ 剩余时间：未知 ｜ 已用时间：2 小时 14 分</p>' +
        '<button class="tb-btn dl-cancel" type="button" disabled>取消</button>' +
      "</div>";
    // 加载完成后跳转：Saved HD 访达界面，填入「等待」分类的全部内容
    const waitItems = catItems("等待");
    const PHOTOS = window.TABLE_PHOTOS || {};
    let files = "";
    waitItems.forEach((it, i) => {
      const photo = PHOTOS[it.id];
      files +=
        '<div class="dl-file-item" data-idx="' + i + '" title="点击查看详情">' +
          '<div class="dl-file-ico">' +
            (photo ? '<img src="' + escapeHtml(photo) + '" alt="" loading="lazy">' : PIX.word) +
          "</div>" +
          '<div class="dl-file-label">' + escapeHtml(it.name) + "</div>" +
        "</div>";
    });
    const doneHtml =
      '<div class="dl-finder">' +
        '<div class="dl-hd-bar">' +
          "<span>" + waitItems.length + " items</span>" +
          "<span>228K in disk</span>" +
          "<span>1,124,130K available</span>" +
        "</div>" +
        '<div class="dl-hd-grid">' + files + "</div>" +
        '<div class="exp-detail dl-hd-detail" hidden>' +
          '<div class="exp-detail-body">' +
            '<div class="exp-art"></div>' +
            '<div class="exp-info">' +
              '<h3 class="exp-name"></h3>' +
              '<div class="exp-chips"></div>' +
              '<div class="exp-reason"><p></p></div>' +
            "</div>" +
          "</div>" +
          '<div class="exp-detail-bar"><button class="tb-btn dl-hd-back" type="button">← 返回</button></div>' +
        "</div>" +
      "</div>";
    const html =
      '<div class="dl">' +
        '<div class="dl-page dl-page-wait is-active">' + waitingHtml + "</div>" +
        '<div class="dl-page dl-page-done">' + doneHtml + "</div>" +
      "</div>";
    let dlTimer = null;
    return {
      html: html,
      bodyClass: "app-body",
      init(winEl) {
        // 阶段一：卡在 87%，省略号缓慢跳动，营造「还在动」的错觉
        const pageWait = winEl.querySelector(".dl-page-wait");
        const pageDone = winEl.querySelector(".dl-page-done");
        const liveFill = pageWait.querySelector(".dl-fill");
        const livePct = pageWait.querySelector(".dl-pct");
        const liveStatus = pageWait.querySelector(".dl-status");
        const liveMeta = pageWait.querySelector(".dl-meta");
        let dots = 0;
        dlTimer = setInterval(() => {
          dots = (dots + 1) % 4;
          liveStatus.textContent = dots ? "正在下载" + "。".repeat(dots + 1) : "正在下载……";
        }, 900);
        // 阶段二：约 5 秒后进度推进，走完后自动进入加载完成页
        setTimeout(() => {
          clearInterval(dlTimer);
          dlTimer = null;
          liveStatus.textContent = "即将完成……";
          liveMeta.textContent = "速度：128 KB/s ｜ 剩余时间：几秒 ｜ 已用时间：2 小时 14 分";
          let pct = 87;
          const advance = setInterval(() => {
            pct = Math.min(100, pct + 1 + Math.floor(Math.random() * 3));
            liveFill.style.width = pct + "%";
            livePct.textContent = pct + "%";
            if (pct >= 100) {
              clearInterval(advance);
              liveStatus.textContent = "下载完成，正在打开……";
              setTimeout(() => {
                pageWait.classList.remove("is-active");
                pageDone.classList.add("is-active");
              }, 700);
            }
          }, 120);
        }, 5000);
        // Saved HD：点击文件查看详情
        const grid = pageDone.querySelector(".dl-hd-grid");
        const detail = pageDone.querySelector(".dl-hd-detail");
        grid.addEventListener("click", (e) => {
          const el = e.target.closest(".dl-file-item");
          if (!el) return;
          const item = waitItems[parseInt(el.dataset.idx, 10)];
          if (!item) return;
          const photo = PHOTOS[item.id];
          detail.querySelector(".exp-art").innerHTML =
            photo ? '<img src="' + escapeHtml(photo) + '" alt="' + escapeHtml(item.name) + '">' : artIcon(item.src);
          detail.querySelector(".exp-name").textContent = item.name;
          detail.querySelector(".exp-chips").innerHTML =
            '<span class="item-chip" style="background:#000000;color:#ffffff">' + escapeHtml(item.cat) + "</span>" +
            '<span class="item-chip chip-gray">' + escapeHtml(item.src) + "</span>" +
            '<span class="item-chip chip-gray">' + escapeHtml(item.id) + "</span>";
          detail.querySelector(".exp-reason p").textContent = item.reason;
          grid.style.display = "none";
          detail.hidden = false;
        });
        pageDone.querySelector(".dl-hd-back").addEventListener("click", () => {
          detail.hidden = true;
          grid.style.display = "";
        });
      },
      onClose() {
        clearInterval(dlTimer);
        dlTimer = null;
      },
    };
  }

  /* ============================================================
     7. 🔓 越界 · 无限错误弹窗
     ============================================================ */

  const ERR_DEFS = [
    { title: "程序无响应", body: "『聚集.exe』没有响应。\r\n立即结束该程序？", btns: ["立即结束", "取消"] },
    { title: "错误报告", body: "程序发生未知错误。\r\n是否向 Microsoft 发送错误报告？", btns: ["发送", "不发送"] },
    { title: "磁盘空间不足", body: "磁盘空间不足，无法完成此操作。\r\n请清理磁盘后重试。", btns: ["确定"] },
    { title: "内存读取错误", body: "『0x00F4F2A1』指令引用的内存不能为 read。", btns: ["确定"] },
    { title: "非法操作", body: "该程序执行了非法操作，即将关闭。", btns: ["确定"] },
    { title: "权限不足", body: "拒绝访问。您没有执行此操作的权限。", btns: ["确定"] },
  ];
  const ERR_MAX_LIVE = 10;
  let errCount = 0;
  let errTimer = null;
  let errRepaired = 0;
  let transgressRepaired = false;

  // 修复完成后：「越界」标识变成文件夹标识（桌面图标 + 开始菜单）
  const FOLDER_START_SVG =
    '<svg class="start-ico" viewBox="0 0 32 32"><path d="M4 6 h10.5 l2.5 3.5 H28 v3 H4 Z" fill="#ffffff" stroke="#000000" stroke-width="1.6"/><path d="M4 11.5 h24 v13.5 H4 Z" fill="#ffffff" stroke="#000000" stroke-width="1.6"/></svg>';
  function checkAllRepaired() {
    if (errRepaired <= 0) return;
    if (document.querySelector(".err-dialog")) return;
    transgressRepaired = true;
    const img = document.querySelector('.desktop-icon[data-app-id="transgress"] .cat-img');
    if (img && !img.closest(".desktop-icon").classList.contains("repaired")) {
      img.closest(".desktop-icon").classList.add("repaired");
      img.src = "icons/gather.png";
    }
    const liSvg = document.querySelector('.start-menu-list li[data-open="transgress"] svg.start-ico');
    if (liSvg) liSvg.outerHTML = FOLDER_START_SVG;
  }

  function spawnErrorDialog() {
    const live = document.querySelectorAll(".err-dialog").length;
    if (live >= ERR_MAX_LIVE) return;
    SFX.error();
    const def = ERR_DEFS[errCount % ERR_DEFS.length];
    errCount++;
    const dlg = document.createElement("div");
    dlg.className = "err-dialog";
    const dw = desktopEl.clientWidth, dh = desktopEl.clientHeight;
    const x = 60 + Math.random() * Math.max(dw - 340, 0);
    const y = 40 + Math.random() * Math.max(dh - 220, 0);
    dlg.style.left = x + "px";
    dlg.style.top = y + "px";
    dlg.style.zIndex = ++zCounter;
    dlg.innerHTML =
      '<div class="err-title"><span>' + escapeHtml(def.title) + "</span>" +
      '<button class="titlebar-btn err-x" type="button">✕</button></div>' +
      '<div class="err-body">' +
        '<span class="err-icon">' + PIX.warn + "</span>" +
        '<span class="err-text">' + escapeHtml(def.body).replace(/\r\n/g, "<br>") + "</span>" +
      "</div>" +
      '<div class="err-btns">' +
        def.btns.map((b, i) => '<button class="tb-btn err-btn' + (i === 0 ? " err-default" : "") + '" type="button">' + escapeHtml(b) + "</button>").join("") +
        '<button class="tb-btn err-btn err-repair" type="button">修复</button>' +
      "</div>";
    windowLayerEl.appendChild(dlg);

    const closeDlg = () => { dlg.remove(); checkAllRepaired(); };
    // 只能通过「修复」关闭：✕ 和其他按钮一律无效，还会抖动一下提醒
    const shake = () => {
      dlg.classList.remove("err-shake");
      void dlg.offsetWidth;
      dlg.classList.add("err-shake");
    };
    dlg.querySelector(".err-x").addEventListener("click", shake);
    dlg.querySelectorAll(".err-btn:not(.err-repair)").forEach((b) => b.addEventListener("click", shake));
    // 修复键：点击后进入修复流程，修复完成自动关闭
    dlg.querySelector(".err-repair").addEventListener("click", () => {
      if (dlg.classList.contains("repairing")) return;
      dlg.classList.add("repairing");
      dlg.querySelectorAll("button").forEach((b) => { b.disabled = true; });
      dlg.querySelector(".err-icon").innerHTML = PIX.gear;
      const txt = dlg.querySelector(".err-text");
      txt.textContent = "正在修复……";
      setTimeout(() => { txt.textContent = "✓ 修复完成"; }, 900);
      setTimeout(() => {
        errRepaired++;
        SFX.repair();
        dlg.remove();
        checkAllRepaired();
      }, 1700);
    });
    attachResize(dlg, { minW: 240, minH: 130 });
    // 错误弹窗也可拖拽
    const bar = dlg.querySelector(".err-title");
    bar.addEventListener("mousedown", (e) => {
      if (e.button !== 0 || e.target.closest(".titlebar-btn")) return;
      e.preventDefault();
      dlg.style.zIndex = ++zCounter;
      const sx = e.clientX, sy = e.clientY;
      const ox = parseFloat(dlg.style.left) || 0;
      const oy = parseFloat(dlg.style.top) || 0;
      const onMove = (ev) => {
        const pos = clampToDesktop(ox + ev.clientX - sx, oy + ev.clientY - sy, dlg.offsetWidth, dlg.offsetHeight);
        dlg.style.left = pos.x + "px";
        dlg.style.top = pos.y + "px";
      };
      const onUp = () => {
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
  }

  function buildErrorHost() {
    const html =
      '<div class="err-host">' +
        '<div class="err-host-icon">' + PIX.warn + "</div>" +
        "<p>系统运行出现异常。</p>" +
        "<p class=\"err-host-sub\">错误正在一个接一个地产生……</p>" +
      "</div>";
    return {
      html: html,
      bodyClass: "app-body",
      init() {
        // 打开窗口后立即弹出一波
        for (let i = 0; i < 3; i++) {
          setTimeout(spawnErrorDialog, i * 350);
        }
      },
    };
  }

  /* ============================================================
     8. 👻 缺席 · 聊天窗口
     ============================================================ */

  function buildChat() {
    const PEER = "空椅子"; // 对方网名
    const logLine = (cls, nick, time, text) =>
      '<div class="qq-line ' + cls + '"><span class="qq-nick">' + nick + "</span>" +
      '<span class="qq-time">' + time + "</span>" + text + "</div>";
    const html =
      '<div class="qq-chat">' +
        '<div class="qq-toolbar">' +
          '<button class="qq-tb-btn" type="button" disabled>🎬 影音交谈</button>' +
          '<button class="qq-tb-btn" type="button" disabled>📄 传送文件</button>' +
          '<button class="qq-tb-btn" type="button" disabled>✉️ 短信</button>' +
          '<button class="qq-tb-btn" type="button" disabled>🎮 游戏</button>' +
          '<button class="qq-tb-btn" type="button" disabled>🎛 控制</button>' +
        "</div>" +
        '<div class="qq-main">' +
          '<div class="qq-left">' +
            '<div class="qq-peer-bar">' +
              '<img class="qq-avatar" src="icons/absent.png" alt="">' +
              "<b>" + PEER + "</b>（离线）" +
              '<span class="qq-sign">签名：桌面空着，人不在。</span>' +
            "</div>" +
            '<div class="chat-log qq-log">' +
              logLine("me",  "我",  "周一 14:02", "在忙吗？上次说的桌子整理得怎么样了") +
              logLine("peer", PEER, "周一 14:05", "在的！已经分好类了，一共两百条") +
              logLine("me",  "我",  "周一 14:06", "厉害，改天一起吃饭？") +
              logLine("me",  "我",  "周二 21:40", "在吗？看到回我一下") +
              logLine("peer", PEER, "三天前",     "好，你发我邮箱吧") +
            "</div>" +
            '<div class="qq-fmt-row">' +
              '<span class="qq-fmt-a" title="字体">A</span>' +
              '<span title="表情">😊</span><span title="图片">🖼</span>' +
              '<span title="抓屏">✂️</span><span title="音乐">🎵</span>' +
            "</div>" +
            '<textarea class="qq-input" spellcheck="false"></textarea>' +
            '<div class="qq-btn-row">' +
              '<button class="qq-btn" type="button" disabled>聊天记录(N)</button>' +
              '<button class="qq-btn" type="button" disabled>消息模式(T)</button>' +
              '<span class="qq-spacer"></span>' +
              '<button class="qq-btn qq-close" type="button">关闭(C)</button>' +
              '<button class="qq-btn qq-send" type="button" disabled>发送(S)&nbsp;▾</button>' +
            "</div>" +
          "</div>" +
          '<div class="qq-side">' +
            '<div class="qq-panel">' +
              '<div class="qq-panel-h">▼ 对方形象<span class="qq-panel-more">»</span></div>' +
              '<div class="qq-show"><img src="icons/absent.png" alt="对方QQ秀"></div>' +
            "</div>" +
            '<div class="qq-panel">' +
              '<div class="qq-panel-h">▼ 个人空间<span class="qq-panel-more">»</span></div>' +
              '<div class="qq-zone">摘要：桌面整理中…<br>日记：200条 / 0评论<br>相册：89张 / 0评论<br>收藏：57条 / 0评论</div>' +
            "</div>" +
            '<div class="qq-panel">' +
              '<div class="qq-panel-h">▼ 我的QQ秀<span class="qq-panel-more">»</span></div>' +
              '<div class="qq-zone qq-xiu">对方离线，形象不可见</div>' +
            "</div>" +
          "</div>" +
        "</div>" +
        '<div class="chat-status">对方离线 — 消息将无法送达</div>' +
      "</div>";
    return {
      html: html,
      bodyClass: "app-body",
      init(winEl) {
        const log = winEl.querySelector(".qq-log");
        const input = winEl.querySelector(".qq-input");
        const sendBtn = winEl.querySelector(".qq-send");
        log.scrollTop = log.scrollHeight;
        const scrollLog = () => { log.scrollTop = log.scrollHeight; };
        // 有文字时发送键才可用
        input.addEventListener("input", () => {
          sendBtn.disabled = input.value.trim() === "";
        });
        // 发送文字消息后，紧接着触发发送文档
        const send = () => {
          const text = input.value.trim();
          if (!text) return;
          SFX.send();
          log.insertAdjacentHTML("beforeend", logLine("me", "我", "刚刚", escapeHtml(text)));
          input.value = "";
          sendBtn.disabled = true;
          scrollLog();
          setTimeout(() => {
            log.insertAdjacentHTML("beforeend",
              '<div class="qq-line me qq-file-msg"><span class="qq-nick">我</span><span class="qq-time">刚刚</span>' +
              '<a class="qq-file-link" href="javascript:void(0)" title="点击打开文档">📄 发送文档「给' + PEER + '的话.doc」（1.44 MB）</a><br>' +
              '<span class="qq-file-state">等待对方接收…… 对方离线，传输暂停 0%</span></div>');
            scrollLog();
          }, 600);
        };
        sendBtn.addEventListener("click", send);
        // 点击发送的文档 → 打开劳作（Word 文档）窗口
        log.addEventListener("click", (e) => {
          if (e.target.closest(".qq-file-link")) openApp("labor");
        });
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
        });
        winEl.querySelector(".qq-close").addEventListener("click", () => closeWindow(winEl.dataset.winId));
      },
    };
  }

  /* ============================================================
     9. 💣 扫雷 · 可以玩
     ============================================================ */

  function buildMinesweeper() {
    const ROWS = 9, COLS = 9, MINES = 10;
    const html =
      '<div class="mine-app">' +
        '<div class="mine-hud">' +
          '<span class="mine-counter mine-left">010</span>' +
          '<button class="mine-face" type="button" title="重新开始">🙂</button>' +
          '<span class="mine-counter mine-time">000</span>' +
        "</div>" +
        '<div class="mine-board" style="grid-template-columns:repeat(' + COLS + ',26px)"></div>' +
        '<div class="mine-status">左键翻开 · 右键插旗</div>' +
      "</div>";
    let timer = null;
    return {
      html: html,
      bodyClass: "app-body",
      init(winEl) {
        const board = winEl.querySelector(".mine-board");
        const face = winEl.querySelector(".mine-face");
        const leftEl = winEl.querySelector(".mine-left");
        const timeEl = winEl.querySelector(".mine-time");
        const statusEl = winEl.querySelector(".mine-status");
        let cells, started, over, time;

        function newGame() {
          cells = [];
          started = false;
          over = false;
          time = 0;
          clearInterval(timer);
          timeEl.textContent = "000";
          face.textContent = "🙂";
          statusEl.textContent = "左键翻开 · 右键插旗";
          board.innerHTML = "";
          for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
              const el = document.createElement("button");
              el.type = "button";
              el.className = "mine-cell";
              el.dataset.r = r;
              el.dataset.c = c;
              board.appendChild(el);
              cells.push({ r, c, mine: false, open: false, flag: false, count: 0, el });
            }
          }
          updateLeft();
        }

        function at(r, c) {
          return r >= 0 && r < ROWS && c >= 0 && c < COLS ? cells[r * COLS + c] : null;
        }
        function neighbors(cell) {
          const out = [];
          for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
              if (!dr && !dc) continue;
              const n = at(cell.r + dr, cell.c + dc);
              if (n) out.push(n);
            }
          }
          return out;
        }
        function placeMines(safe) {
          let placed = 0;
          while (placed < MINES) {
            const cell = cells[Math.floor(Math.random() * cells.length)];
            if (cell.mine || cell === safe) continue;
            cell.mine = true;
            placed++;
          }
          cells.forEach((cell) => {
            cell.count = cell.mine ? 0 : neighbors(cell).filter((n) => n.mine).length;
          });
        }
        function updateLeft() {
          const flags = cells.filter((c) => c.flag).length;
          leftEl.textContent = String(Math.max(MINES - flags, 0)).padStart(3, "0");
        }
        function startTimer() {
          if (started) return;
          started = true;
          timer = setInterval(() => {
            time = Math.min(time + 1, 999);
            timeEl.textContent = String(time).padStart(3, "0");
          }, 1000);
        }
        function reveal(cell) {
          if (cell.open || cell.flag || over) return;
          cell.open = true;
          cell.el.classList.add("open");
          if (cell.mine) {
            cell.el.textContent = "💥";
            cell.el.classList.add("boom");
            SFX.boom();
            lose();
            return;
          }
          if (cell.count > 0) {
            cell.el.textContent = cell.count;
            cell.el.classList.add("n" + Math.min(cell.count, 4));
          } else {
            neighbors(cell).forEach(reveal);
          }
        }
        function lose() {
          over = true;
          clearInterval(timer);
          face.textContent = "😵";
          statusEl.textContent = "踩雷了，点击 🙂 重新开始";
          cells.forEach((cell) => {
            if (cell.mine && !cell.el.classList.contains("boom")) {
              cell.el.classList.add("open");
              cell.el.textContent = "✸";
            }
          });
        }
        function checkWin() {
          if (over) return;
          const opened = cells.filter((c) => c.open).length;
          if (opened === ROWS * COLS - MINES) {
            over = true;
            clearInterval(timer);
            face.textContent = "😎";
            SFX.win();
            statusEl.textContent = "全部排雷成功！点击 😎 再来一局";
            cells.forEach((cell) => {
              if (cell.mine) cell.el.textContent = "🚩";
            });
          }
        }

        board.addEventListener("click", (e) => {
          const el = e.target.closest(".mine-cell");
          if (!el || over) return;
          const cell = cells[+el.dataset.r * COLS + (+el.dataset.c)];
          if (cell.flag) return;
          if (!started) { placeMines(cell); startTimer(); }
          if (!cell.open) SFX.reveal();
          reveal(cell);
          checkWin();
        });
        board.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          const el = e.target.closest(".mine-cell");
          if (!el || over) return;
          const cell = cells[+el.dataset.r * COLS + (+el.dataset.c)];
          if (cell.open) return;
          cell.flag = !cell.flag;
          el.textContent = cell.flag ? "🚩" : "";
          el.classList.toggle("flagged", cell.flag);
          SFX.flag();
          updateLeft();
        });
        face.addEventListener("click", newGame);
        newGame();
      },
      onClose() {
        clearInterval(timer);
      },
    };
  }

  function updateClock() {
    const now = new Date();
    clockEl.textContent = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
  }
  updateClock();
  setInterval(updateClock, 1000);

  startBtnEl.addEventListener("click", (e) => {
    e.stopPropagation();
    SFX.click();
    const willOpen = startMenuEl.hidden;
    startMenuEl.hidden = !willOpen;
    startBtnEl.classList.toggle("open", willOpen);
  });

  startMenuEl.addEventListener("click", (e) => {
    const li = e.target.closest("li[data-open]");
    if (li) openApp(li.dataset.open);
    startMenuEl.hidden = true;
    startBtnEl.classList.remove("open");
  });

  document.addEventListener("mousedown", (e) => {
    if (!startMenuEl.hidden && !startMenuEl.contains(e.target) && !startBtnEl.contains(e.target)) {
      startMenuEl.hidden = true;
      startBtnEl.classList.remove("open");
    }
  });

  /* ============================================================
     10. 初始化
     ============================================================ */

  layoutCategoryIcons();

  window.RetroOS = {
    openApp,
    closeWindow,
    minimizeWindow,
    restoreWindow,
    spawnErrorDialog,
    APPS,
    ITEMS,
  };
})();
