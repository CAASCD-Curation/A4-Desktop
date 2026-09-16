// 横向时间轴版 3D 轮播：环形布局横置（rotationY），滚轮→横向滚动驱动
(function () {
  const DEG = 0.017453292519943295;
  const entries = window.H_ENTRIES || [];

  // ---- 有图条目；不足 30 张时循环补足（保持环形顺滑）----
  const uniq = [];
  entries.forEach((e, i) => { if (e.img) uniq.push({ img: e.img, entryIndex: i }); });
  const MIN = 30;
  const flowItems = [];
  if (uniq.length) {
    const target = Math.max(MIN, uniq.length);
    while (flowItems.length < target) {
      for (const u of uniq) { flowItems.push(u); if (flowItems.length >= target) break; }
    }
  }
  const total = flowItems.length;

  const hs = document.getElementById('hscroll');
  const dist = document.getElementById('scroll-dist');

  if (!total) {
    if (dist) dist.style.width = '100vw';
    if (window.hShow) window.hShow(0);
    window.hGoEntry = function (i) { if (window.hShow) window.hShow(Math.max(0, Math.min(entries.length - 1, i))); };
    window.hGoStage = function () {};
    return;
  }

  // 滚动轨道宽度与图片数成正比
  dist.style.width = (total * 8 + 40) + 'vw';

  const getCSSVariable = (n) => parseFloat(getComputedStyle(document.documentElement).getPropertyValue(n));
  const getPlaneSize = () => {
    const w = window.innerWidth, h = window.innerHeight;
    let width = w * 0.46, height = width * (2 / 3);
    if (height > h * 0.62) { height = h * 0.62; width = height * 1.5; }
    return { width, height };
  };
  const getRadius = () => getPlaneSize().width * 2.1;
  const cameraZ = () => 4400 * Math.min(1, window.innerHeight / 1200);

  // ---- Three.js ----
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = cameraZ();
  camera.position.y = getCSSVariable('--camera-y-offset') + 30;  // 照片块略下移，与下方说明条视觉平衡
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth * 1.5, window.innerHeight * 1.5);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('container').appendChild(renderer.domElement);
  scene.add(new THREE.PointLight(0xffffff, 2.5, 10000).translateY(500).translateZ(500));
  scene.add(new THREE.AmbientLight(0xffffff, 2.5));

  // ---- 横向布局（参考图样式）：正中正对镜头最大；两侧逐张后退、压暗、收在中间后面 ----
  const Util = {
    flow(i, selected) {
      const obj = { x: 0, y: 0, z: 0, rotationY: 0, visible: true, alpha: 1, dim: 1 };
      let d = i - selected;
      if (d > total / 2) d -= total;
      if (d < -total / 2) d += total;
      const abs = Math.abs(d);
      let f = d / (total / 2);
      while (f < -1) f += 2;
      while (f > 1) f -= 2;
      const theta = d * ((Math.PI * 2) / total);
      const r = getRadius();
      obj.x = Math.sin(theta) * r * 1.12;
      obj.z = r - abs * r * 0.24;         // 每远离一张后退 24% 半径
      obj.rotationY = -theta * 0.55;      // 轻微朝内偏转
      obj.alpha = Math.pow(1 - Math.abs(f), 7);
      obj.visible = abs < 4;
      obj.dim = Math.max(0.22, 1 - abs * 0.3);  // 侧面照片压暗
      if (abs < 1) obj.z += (1 - abs) * -20;
      return obj;
    }
  };

  const loader = new THREE.TextureLoader();
  const objects = new Array(total);   // 每组 = THREE.Group（照片 + 白色边框底板）
  const track = { cur: 0.0 };
  let lastCentered = -1;

  const promises = flowItems.map((item, i) => new Promise((resolve) => {
    loader.load(item.img, (tex) => {
      const s = getPlaneSize();
      // 裁剪而非压扁：按 3:2  cover 方式裁掉多余部分，居中取图
      const iw = tex.image.width, ih = tex.image.height;
      if (iw && ih) {
        const planeA = s.width / s.height, imgA = iw / ih;
        tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
        if (imgA > planeA) {
          const rep = planeA / imgA;
          tex.repeat.set(rep, 1);
          tex.offset.set((1 - rep) / 2, 0);
        } else {
          const rep = imgA / planeA;
          tex.repeat.set(1, rep);
          tex.offset.set(0, (1 - rep) / 2);
        }
      }
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(s.width, s.height),
        new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, transparent: true, metalness: 0.6, roughness: 0, envMapIntensity: 10 })
      );
      // 细线框（白底页上用黑线）：仅比照片大 0.8%
      const frame = new THREE.Mesh(
        new THREE.PlaneGeometry(s.width * 1.008, s.height * 1.011),
        new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true })
      );
      frame.position.z = -3;
      const group = new THREE.Group();
      group.add(frame);
      group.add(mesh);
      objects[i] = group;
      scene.add(group);
      resolve();
    }, undefined, () => { objects[i] = null; resolve(); });
  }));

  function shiftTo(pIndex) {
    gsap.to(track, {
      duration: 0.8, overwrite: true,
      cur: pIndex,
      ease: 'power3.out',
      onUpdate: redraw
    });
  }

  function redraw() {
    let sel = track.cur;
    sel = (sel + total) % total;
    for (let i = 0; i < total; i++) {
      const group = objects[i];
      if (!group) continue;
      const o = Util.flow(i, sel);
      group.position.set(o.x, o.y, o.z);
      group.rotation.set(0, o.rotationY, 0);
      group.visible = o.visible;
      const mesh = group.children[1];
      mesh.material.opacity = o.alpha;
      mesh.material.color.setScalar(o.dim);        // 侧面照片压暗
      group.children[0].material.opacity = Math.min(1, o.alpha * 1.4);  // 白框同步
      group.children[0].material.color.setScalar(Math.max(0.25, o.dim)); // 侧框同步压暗
    }
    const centered = ((Math.round(sel) % total) + total) % total;
    const ei = flowItems[centered].entryIndex;
    if (ei !== lastCentered && window.hShow) {
      lastCentered = ei;
      window.hShow(ei);
    }
  }

  // ---- 横向滚动：scrollLeft 驱动 + 空闲吸附 + 滚轮换向 ----
  // 统一映射：第 k 张居中 ↔ scrollLeft = k·step，step = max/total，全程无偏移
  const maxScroll = () => dist.scrollWidth - hs.clientWidth;
  const stepPx = () => maxScroll() / total;
  let snapTimer = null;
  hs.addEventListener('scroll', () => {
    const max = maxScroll();
    if (max <= 0) return;
    shiftTo((hs.scrollLeft / max) * total);
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => {
      const s = stepPx();
      const target = Math.round(hs.scrollLeft / s) * s;
      if (Math.abs(target - hs.scrollLeft) > 1) hs.scrollTo({ left: target, behavior: 'smooth' });
    }, 180);
  }, { passive: true });

  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    let d = e.deltaY + e.deltaX;
    if (e.deltaMode === 1) d *= 16;            // 行模式（部分浏览器）换算成像素
    hs.scrollLeft += (d / 100) * stepPx();     // 一格滚轮 ≈ 移动一张照片，任何屏宽手感一致
  }, { passive: false });

  // ---- 跳转 API ----
  function scrollToFlow(k, behavior) {
    const max = maxScroll();
    const kk = ((k % total) + total) % total;
    hs.scrollTo({ left: (kk / total) * max, behavior: behavior || 'smooth' });
  }
  window.hGoEntry = function (i, instant) {
    if (i == null || i < 0 || i >= entries.length) return;
    if (window.hShow) window.hShow(i);
    lastCentered = i;
    const k = flowItems.findIndex(f => f.entryIndex === i);
    if (k >= 0) {
      if (instant) {           // 深链接/首跳：立刻到位，不播放过渡
        track.cur = ((k % total) + total) % total;
        redraw();
      }
      scrollToFlow(k, instant ? 'auto' : 'smooth');
    }
  };
  window.hGoStage = function (si) {
    const k = flowItems.findIndex(f => entries[f.entryIndex].stageIndex === si);
    if (k >= 0) {
      const firstEntry = flowItems[k].entryIndex;
      if (window.hShow) window.hShow(firstEntry);
      lastCentered = firstEntry;
      scrollToFlow(k);
    } else if (window.hShow) {
      const e = entries.findIndex(x => x.stageIndex === si);
      if (e >= 0) window.hShow(e);
    }
  };

  // ---- 初始化：直接定位到第 0 张（与左栏「建立」一致），深链接直接跳 ----
  function init() {
    const loop = () => { requestAnimationFrame(loop); renderer.render(scene, camera); };
    loop();
    track.cur = 0;
    redraw();
    Promise.all(promises).then(() => {
      redraw();
      const m = /go=(\d+)/.exec(location.hash || '');
      if (m) window.hGoEntry(parseInt(m[1], 10), true);
      // 首页六模块带入的 ?stage=<阶段key>：定位到该阶段第一张有图的条目
      const role = new URLSearchParams(location.search).get('stage');
      if (role) {
        const idx = entries.findIndex(x => x.stageKey === role);
        if (idx >= 0) window.hGoEntry(idx, true);
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth * 1.5, window.innerHeight * 1.5);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.z = cameraZ();
    const s = getPlaneSize();
    objects.forEach(g => {
      if (!g) return;
      g.children[1].geometry.dispose();
      g.children[1].geometry = new THREE.PlaneGeometry(s.width, s.height);
      g.children[0].geometry.dispose();
      g.children[0].geometry = new THREE.PlaneGeometry(s.width * 1.008, s.height * 1.011);
    });
    redraw();
  }, false);
})();
