import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { recolorModel, classify } from './palette.js';
import { InkRenderer } from './ink-renderer.js';

const stage = document.getElementById('stage');
// ---- boot loader: terminal-style setup sequence tied to the real GLB load ----
const loaderEl = document.getElementById('loader');
const loaderFill = document.getElementById('loader-fill');
const loaderPctEl = document.getElementById('loader-pct');
const loaderCopy = document.getElementById('loader-copy');
const loaderSteps = [...document.querySelectorAll('#loader-steps li')];
const GLB_STEP = 4;
// Skip the boot loader when returning from a sub-page within the same session.
const skipLoader = sessionStorage.getItem('deskLoaded') === '1';
if (skipLoader) loaderEl.remove();
let completedSteps = 0, glbFraction = 0, introDone = skipLoader, glbDone = false;
function stepStatus(i, text, done) {
 const st = loaderSteps[i].querySelector('.st');
 st.textContent = '[ ' + text + ' ]';
 loaderSteps[i].classList.toggle('done', !!done);
 loaderSteps[i].classList.toggle('active', !done);
}
function updateLoader() {
 const p = Math.min((completedSteps + glbFraction) / loaderSteps.length, 1);
 loaderFill.style.width = (p * 100).toFixed(0) + '%';
 loaderPctEl.textContent = Math.round(p * 100) + '%';
 window.deskDebug = { ...window.deskDebug, loadPct: Math.round(p * 100) };
}
const wait = ms => new Promise(r => setTimeout(r, ms));
async function runLoaderIntro() {
 for (let i = 0; i < GLB_STEP; i++) {
  stepStatus(i, '...', false); await wait(320);
  stepStatus(i, 'OK', true); completedSteps = i + 1; updateLoader();
 }
 introDone = true; maybeFinishLoader();
}
async function maybeFinishLoader() {
 if (!introDone || !glbDone) return;
 if (skipLoader) return;
 for (let i = GLB_STEP + 1; i < loaderSteps.length; i++) {
  stepStatus(i, '...', false); await wait(280);
  stepStatus(i, 'OK', true); completedSteps = i + 1; glbFraction = 0; updateLoader();
 }
 loaderCopy.textContent = 'Setup complete.';
 await wait(500);
 loaderEl.style.opacity = '0';
 setTimeout(() => loaderEl.remove(), 550);
 sessionStorage.setItem('deskLoaded', '1');
}
function failLoader(error) {
 loaderCopy.textContent = 'SETUP FAILED';
 loaderPctEl.textContent = '桌面模型加载失败，请检查网络后重试';
 const button = document.createElement('button');
 button.id = 'loader-error'; button.textContent = '重新加载';
 button.onclick = () => location.reload();
 loaderCopy.after(button);
 console.error('Desk model failed:', error);
}
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000');
window.deskScene = scene; // debug/inspection hook
const camera = new THREE.PerspectiveCamera(34, stage.clientWidth / stage.clientHeight, .05, 500);
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(1); renderer.setSize(stage.clientWidth, stage.clientHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('app').appendChild(renderer.domElement);
const ink = new InkRenderer(renderer, scene, camera); ink.setSize(stage.clientWidth, stage.clientHeight);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = .075;
scene.add(new THREE.HemisphereLight('#ffffff', '#ffffff', .65));
const key = new THREE.DirectionalLight('#ffffff', 2.6); key.position.set(-5, 9, -4); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
Object.assign(key.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: .1, far: 30 });
key.shadow.normalBias = .035; scene.add(key);
const fill = new THREE.DirectionalLight('#ffffff', .25); fill.position.set(4, 5, -6); scene.add(fill);

// One accent color for everything interactive, matching the pixel UI.
const ACCENT = '#3d7bff';
const OBJECT_INDEX = {
 book: { num: '01', name: '书本 BOOKS', desc: '文学中的桌面意象，以及关于桌面的语言表达。\nThe desk as it appears in literature, and the language used to describe it.', type: '文学与书写', material: 'Paper', added: '2023-11-14', tags: '文学意象, 书写, 阅读' },
 phone: { num: '02', name: 'TELEPHONE', desc: 'A direct line to the outside world. Mostly rings exactly when an idea starts flowing.', type: 'Physical Object', material: 'Plastic', added: '2024-01-09', tags: 'Communication, Retro' },
 computer: { num: '03', name: 'COMPUTER', desc: 'The engine of the desk. Every experiment, draft and prototype passes through here.', type: 'Physical Object', material: 'Metal, Glass', added: '2023-08-21', tags: 'Work, Code, Design' },
 note: { num: '04', name: 'NOTES', desc: 'Sticky fragments of half-formed plans. Cheap paper, expensive thoughts.', type: 'Physical Object', material: 'Paper', added: '2024-03-02', tags: 'Ideas, Sketches' },
 frame: { num: '05', name: 'FRAME', desc: 'A small window into somewhere else. A reminder that desks sit in rooms, and rooms in the world.', type: 'Physical Object', material: 'Wood, Glass', added: '2023-06-17', tags: 'Memory, Art' },
 lamp: { num: '06', name: 'LAMP', desc: 'Keeps the ideas lit after dark. The last thing switched off at night.', type: 'Physical Object', material: 'Metal', added: '2023-09-30', tags: 'Light, Focus' },
 greenCabinet: { num: '09', name: '文件柜 CABINET', desc: '归档的秩序：分类、收纳的桌面。\nThe order of archiving: classification, storage, and institutional desks.', type: '归档与秩序', material: '—', added: '—', tags: '归档, 收纳, 制度' },
 dining: { num: '02', name: '餐桌 DINING TABLE', desc: '围坐与共享的平面：一日三餐、节庆、谈判与家庭仪式，都发生在这张桌子上。\nA surface for gathering and sharing — daily meals, feasts, negotiations and family rituals all happen here.', type: '桌面类型学', material: 'Wood, Glass', added: '—', tags: '聚餐, 仪式, 共享' },
 drafting: { num: '04', name: '绘图桌 DRAWING TABLE', desc: '倾斜的平面：线条、比例与想象在这里落成图纸。\nA tilted surface where lines, proportions and imagination become drawings.', type: '桌面类型学', material: 'Wood, Metal', added: '—', tags: '绘图, 设计, 工作' },
 school: { num: '03', name: '课桌 SCHOOL DESK', desc: '规训与求知的平面：一代人的晨读、考试与课间的刻痕。\nA surface of discipline and learning — morning readings, exams, and carvings between classes.', type: '桌面类型学', material: 'Wood, Metal', added: '—', tags: '教育, 规训, 记忆' },
 altar: { num: '01', name: '祭坛 ALTAR', desc: '献祭与通灵的平面：火、供品与祈祷在此抵达另一重世界。\nA surface of sacrifice and communion — fire, offerings and prayers reaching another world.', type: '桌面类型学', material: 'Stone, Wood', added: '—', tags: '仪式, 信仰, 献祭' }
};

const meshGroup = new Map();
let hoverGroup = null, selectedRole = null;
const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
window.deskDebug = { state: 'loading', modelUrl: new URL('./assets/desktop.glb', import.meta.url).href };
let model, deskModel = null, deskWrapper = null;
function buildHoverGroups() {
 const groups = new Map();
 model.traverse(node => {
  if (!node.isMesh) return;
  const { role, node: anchor } = classify(node, model);
  if (role === 'floor' || role === 'wall') return;
  let group = groups.get(anchor);
  if (!group) { group = { role, meshes: [] }; groups.set(anchor, group); }
  group.meshes.push(node);
 });
 for (const group of groups.values()) group.meshes.forEach(mesh => meshGroup.set(mesh, group));
 // Books piled on the file cabinets (model-local x < -6.5) are pure scenery:
 // no hover fill, no pointer cursor, no click archive. The desk's own books
 // stay interactive. Note: anchors sit inside a scaled/recentered wrapper,
 // so compare in model-local (raw GLB) coordinates.
 model.updateMatrixWorld(true);
 const wp = new THREE.Vector3();
 for (const [anchor, group] of groups) {
  if (group.role !== 'book') continue;
  anchor.getWorldPosition(wp);
  model.worldToLocal(wp);
  if (wp.x < -6.5) group.role = 'bookStatic';
 }
}
function roleMeshes(role) {
 const meshes = [];
 for (const [mesh, group] of meshGroup) if (group.role === role) meshes.push(mesh);
 return meshes;
}
// Hover wins over the carousel selection; otherwise the selection glows.
// Desk and chair are scenery: never color-filled.
const NOFILL = { desk: 1, chair: 1, chairFrame: 1, bookStatic: 1, paperStatic: 1 };
// Static scenery roles: raycast passes through them — no hover, no click.
const STATIC = { bookStatic: 1, paperStatic: 1 };
function refreshHighlight() {
 const role = hoverGroup ? hoverGroup.role : selectedRole;
 // Highlight every object of the same type: hovering one book lights all books.
 const meshes = role ? roleMeshes(role) : null;
 if (meshes && meshes.length && !NOFILL[role]) ink.setHover(meshes, ACCENT); else ink.setHover(null);
 const filled = !!(meshes && meshes.length && !NOFILL[role]);
 window.deskDebug = { ...window.deskDebug, fillRole: filled ? role : null, fillCount: filled ? meshes.length : 0 };
}
function showPanel(role) {
 const info = OBJECT_INDEX[role]; if (!info) return;
 document.getElementById('obj-num').textContent = info.num;
 document.getElementById('obj-name').textContent = info.name;
 document.getElementById('obj-desc').textContent = info.desc;
 document.getElementById('obj-type').textContent = info.type;
 document.getElementById('obj-material').textContent = info.material;
 document.getElementById('obj-added').textContent = info.added;
 document.getElementById('obj-tags').textContent = info.tags;
 const icon = document.getElementById('icon-' + role);
 document.getElementById('obj-preview').innerHTML = icon ? icon.outerHTML : '';
}
function select(role) {
 selectedRole = role;
 for (const cell of document.querySelectorAll('#carousel .cell')) cell.classList.toggle('selected', cell.dataset.role === role);
 showPanel(role);
 refreshHighlight();
 window.deskDebug = { ...window.deskDebug, selectedRole: role };
}
// Bottom bar is now a link bar to the stage sub-page; it no longer selects 3D objects.
for (const cell of document.querySelectorAll('#carousel .cell')) cell.addEventListener('click', () => {
 if (cell.dataset.view) { switchView(cell.dataset.view); return; }
 if (cell.dataset.link) { if (window.SFX) SFX.go(cell.dataset.link, 'click'); else location.href = cell.dataset.link; }
});
function updateHover() {
 raycaster.setFromCamera(pointer, camera);
 let group = null;
 for (const hit of raycaster.intersectObject(model, true)) {
  const found = meshGroup.get(hit.object);
  if (found && !STATIC[found.role]) { group = found; break; }
 }
 if (group === hoverGroup) return;
 hoverGroup = group;
 if (group) { showPanel(group.role); renderer.domElement.style.cursor = 'pointer'; }
 else renderer.domElement.style.cursor = selectedRole ? '' : '';
 refreshHighlight();
 window.deskDebug = { ...window.deskDebug, hoverRole: group ? group.role : null };
}
renderer.domElement.addEventListener('pointermove', event => {
 if (!model) return;
 const rect = renderer.domElement.getBoundingClientRect();
 pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
 pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
 updateHover();
});
renderer.domElement.addEventListener('pointerleave', () => {
 if (!hoverGroup) return;
 hoverGroup = null; renderer.domElement.style.cursor = ''; refreshHighlight();
 window.deskDebug = { ...window.deskDebug, hoverRole: null };
});
// ---- archive overlay: click an object to open its archive sub-page ----
const ARCHIVES = { book: { title: '书本 BOOKS', theme: '文学与书写', data: () => window.BOOK_ARCHIVE } };
const archiveEl = document.getElementById('archive');
const arcList = document.getElementById('arc-list');
function showArcDetail(entry, idx, total) {
 document.getElementById('arc-d-id').textContent = entry.id + ' — ' + String(idx + 1).padStart(2, '0') + ' / ' + total;
 document.getElementById('arc-d-title').textContent = entry.title;
 document.getElementById('arc-d-meta').innerHTML = '<b>年代 YEAR</b>' + (entry.year || '—') + '<br><b>标签 TAGS</b>' + entry.tags;
 document.getElementById('arc-d-note').textContent = entry.note;
 document.getElementById('arc-d-image').textContent = entry.image ? '图像建议：' + entry.image : '';
}
function openArchive(role) {
 const a = ARCHIVES[role], data = a && a.data();
 if (!data || !data.length) return;
 document.getElementById('arc-title').textContent = a.title;
 document.getElementById('arc-theme').textContent = a.theme;
 document.getElementById('arc-count').textContent = data.length + ' 条档案';
 arcList.innerHTML = '';
 data.forEach((e, i) => {
  const li = document.createElement('li');
  const n = document.createElement('span'); n.className = 'n'; n.textContent = String(i + 1).padStart(2, '0');
  const t = document.createElement('span'); t.className = 't'; t.textContent = e.title;
  const y = document.createElement('span'); y.className = 'y'; y.textContent = e.year;
  li.append(n, t, y);
  li.addEventListener('click', () => {
   if (window.SFX) SFX.play('click');
   for (const x of arcList.querySelectorAll('li.active')) x.classList.remove('active');
   li.classList.add('active'); showArcDetail(e, i, data.length);
  });
  arcList.append(li);
 });
 arcList.firstChild.classList.add('active'); showArcDetail(data[0], 0, data.length);
 archiveEl.hidden = false;
 window.deskDebug = { ...window.deskDebug, archive: role };
}
function closeArchive() { archiveEl.hidden = true; window.deskDebug = { ...window.deskDebug, archive: null }; }
document.getElementById('arc-close').addEventListener('click', () => { if (window.SFX) SFX.play('click'); closeArchive(); });
addEventListener('keydown', e => { if (e.key === 'Escape') closeArchive(); });
document.getElementById('open-archive').addEventListener('click', () => {
 if (selectedRole === 'greenCabinet') { if (window.SFX) { SFX.go('./card-index.html', 'drawer'); return; } location.href = './card-index.html'; return; }
 if (selectedRole === 'computer') { if (window.SFX) { SFX.go('./retro-desktop/index.html', 'boot'); return; } location.href = './retro-desktop/index.html'; return; }
 if (selectedRole === 'book') { if (window.SFX) { SFX.go('./book-wall/index.html', 'book'); return; } location.href = './book-wall/index.html'; return; }
 if (selectedRole === 'frame') { if (window.SFX) { SFX.go('./scatter.html', 'click'); return; } location.href = './scatter.html'; return; }
 if (selectedRole) { if (window.SFX) SFX.play('click'); openArchive(selectedRole); }
});
// Click (not drag) on a scene object opens its archive.
let downPos = null;
renderer.domElement.addEventListener('pointerdown', e => { downPos = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener('pointerup', e => {
 if (!downPos) return;
 const dx = e.clientX - downPos[0], dy = e.clientY - downPos[1]; downPos = null;
 if (dx * dx + dy * dy > 25) return;
 if (!hoverGroup) return;
 if (hoverGroup.role === 'greenCabinet') { if (window.SFX) { SFX.go('./card-index.html', 'drawer'); return; } location.href = './card-index.html'; return; }
 if (hoverGroup.role === 'computer') { if (window.SFX) { SFX.go('./retro-desktop/index.html', 'boot'); return; } location.href = './retro-desktop/index.html'; return; }
 if (hoverGroup.role === 'book') { if (window.SFX) { SFX.go('./book-wall/index.html', 'book'); return; } location.href = './book-wall/index.html'; return; }
 if (hoverGroup.role === 'frame') { if (window.SFX) { SFX.go('./scatter.html', 'click'); return; } location.href = './scatter.html'; return; }
 if (window.SFX) SFX.play('click');
 openArchive(hoverGroup.role);
});
window.deskOpenArchive = openArchive;
function dolly(factor) {
 camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);
 controls.update();
}
document.getElementById('zoom-in').addEventListener('click', () => { if (window.SFX) SFX.play('click'); dolly(.8); });
document.getElementById('zoom-out').addEventListener('click', () => { if (window.SFX) SFX.play('click'); dolly(1.25); });
document.getElementById('reset-view').addEventListener('click', () => { if (window.SFX) SFX.play('click'); if (model) (viewMode === 'desk' ? frameDesk() : frameView(viewMode)); });
// Sound on/off toggle in the top nav.
const soundBtn = document.getElementById('sound-btn');
if (soundBtn) soundBtn.addEventListener('click', () => {
 const m = window.SFX ? SFX.toggle() : false;
 soundBtn.classList.toggle('muted', m);
 if (!m && window.SFX) SFX.play('click');
});
// Test hooks.
window.deskHoverAt = role => {
 for (const [mesh, group] of meshGroup) {
  if (group.role !== role) continue;
  const p = new THREE.Box3().setFromObject(mesh).getCenter(new THREE.Vector3()).project(camera);
  const rect = renderer.domElement.getBoundingClientRect();
  return { x: (p.x + 1) / 2 * rect.width + rect.left, y: (1 - p.y) / 2 * rect.height + rect.top };
 }
 return null;
};
// All screen-space centers of a role's meshes (for picking a visible one).
window.deskHoverPoints = role => {
 const rect = renderer.domElement.getBoundingClientRect(), pts = [];
 for (const [mesh, group] of meshGroup) {
  if (group.role !== role) continue;
  const p = new THREE.Box3().setFromObject(mesh).getCenter(new THREE.Vector3()).project(camera);
  pts.push({ x: (p.x + 1) / 2 * rect.width + rect.left, y: (1 - p.y) / 2 * rect.height + rect.top });
 }
 return pts;
};
window.deskSelect = select;
function frameModel() {
 // Force-refresh world matrices: freshly added view wrappers can carry stale
 // matrices at framing time, which inflates the measured bounds and pushes
 // the camera beyond the far plane (black screen).
 model.updateWorldMatrix(true, true);
 const bounds = new THREE.Box3().setFromObject(model), size = bounds.getSize(new THREE.Vector3()), center = bounds.getCenter(new THREE.Vector3());
 controls.target.copy(center);
 const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
 // Live stage aspect: camera.aspect is rewritten by the ink renderer and
 // goes degenerate while the tab is hidden.
 const rect = stage.getBoundingClientRect();
 const aspect = rect.width > 200 && rect.height > 200 ? THREE.MathUtils.clamp(rect.width / rect.height, .75, 2) : 1;
 const distance = Math.max(size.y / 2 / Math.tan(halfFov), Math.max(size.x, size.z) / 2 / (Math.tan(halfFov) * aspect)) * (aspect < 1 ? 1.5 : 1.85);
 camera.position.copy(center).add(new THREE.Vector3(-.78, .68, -1).normalize().multiplyScalar(distance));
 camera.lookAt(center); controls.update();
}
// Dining-table framing: near top-down view so the place settings read as a
// plan, with a slight tilt to keep a hint of depth (and avoid a degenerate
// straight-down orbit). Distance fits the table's footprint, not its height.
function frameDining() {
 model.updateWorldMatrix(true, true); // see frameModel: avoid stale-matrix bounds
 const bounds = new THREE.Box3().setFromObject(model), size = bounds.getSize(new THREE.Vector3()), center = bounds.getCenter(new THREE.Vector3());
 controls.target.copy(center);
 const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
 // Use the live stage aspect: camera.aspect is rewritten by the ink renderer
 // and goes degenerate while the tab is hidden.
 const rect = stage.getBoundingClientRect();
 const aspect = rect.width > 200 && rect.height > 200 ? THREE.MathUtils.clamp(rect.width / rect.height, .75, 2) : 1;
 const distance = Math.max(size.x, size.z) / 2 / (Math.tan(halfFov) * Math.min(aspect, 1)) * .85;
 camera.position.copy(center).add(new THREE.Vector3(0, 1, -.12).normalize().multiplyScalar(distance));
 camera.lookAt(center); controls.update();
 window.deskCam = { camera, controls };
}
// Drafting-desk framing: a hand-framed close-up along the tilted board,
// frozen as the initial camera (position/target captured from a live session).
function frameDrafting() {
 controls.target.set(.2302, -.3134, .0613);
 camera.position.set(5.8913, 2.7556, -5.5096);
 camera.lookAt(controls.target); controls.update();
 window.deskCam = { camera, controls };
}
// Orbit framing for typology views: pure math from the stored world size
// (ensureView measured it from the raw bounds at load time). The wrapper is
// centered at the origin, so the target is fixed — no setFromObject involved.
function frameOrbit(view) {
 const st = viewState[view];
 const size = st && st.worldSize ? st.worldSize : new THREE.Vector3(7.6, 4, 7.6);
 controls.target.set(0, 0, 0);
 const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
 // Clamp the stage aspect: a hidden/collapsed panel reports a degenerate
 // rect (e.g. 32px wide), which would throw the camera hundreds of units
 // away and leave a black screen.
 const rect = stage.getBoundingClientRect();
 const aspect = rect.width > 200 && rect.height > 200 ? THREE.MathUtils.clamp(rect.width / rect.height, .75, 2) : 1;
 const distance = Math.max(size.y / 2 / Math.tan(halfFov), Math.max(size.x, size.z) / 2 / (Math.tan(halfFov) * aspect)) * (aspect < 1 ? 1.5 : 1.85);
 camera.position.copy(new THREE.Vector3(-.78, .68, -1).normalize().multiplyScalar(distance));
 camera.lookAt(0, 0, 0); controls.update();
 window.deskCam = { camera, controls };
 window.deskDebug = { ...window.deskDebug, framed: view, frameDist: distance };
}
// Dispatch the initial/reset framing for a typology view.
function frameView(view) {
 const kind = VIEW_MODELS[view].frame;
 if (kind === 'topdown') frameDining();
 else if (kind === 'fixed') frameDrafting();
 else frameOrbit(view);
}
function roleBox(roles) {
 const box = new THREE.Box3(); let found = false;
 model.traverse(node => {
  if (!node.isMesh) return;
  if (roles.includes(classify(node, model).role)) { box.expandByObject(node); found = true; }
 });
 return found ? box : null;
}
// Initial / reset view: close-up of the desk surface from the chair side,
// instead of the whole-room overview.
function frameDesk() {
 const box = roleBox(['computer', 'phone', 'note']);
 if (!box) { frameModel(); return; }
 const center = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3());
 center.y -= .25; // aim between the monitor and the desktop surface
 controls.target.copy(center);
 const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
 const distance = Math.max(size.y / 2 / Math.tan(halfFov), Math.max(size.x, size.z) / 2 / (Math.tan(halfFov) * camera.aspect)) * 1.25;
 const chair = roleBox(['chair', 'chairFrame']);
 const dir = chair ? chair.getCenter(new THREE.Vector3()).sub(center).setY(0).normalize() : new THREE.Vector3(-.6, 0, -1).normalize();
 dir.y = .55; dir.normalize();
 camera.position.copy(center).add(dir.multiplyScalar(distance));
 camera.lookAt(center); controls.update();
 window.deskCam = { camera, controls };
 window.deskRoleBox = roleBox;
}
async function load() {
 try {
  const gltf = await new GLTFLoader().loadAsync(window.deskDebug.modelUrl, xhr => {
    if (xhr.total) {
      glbFraction = Math.min(xhr.loaded / xhr.total, 1);
      stepStatus(GLB_STEP, Math.round(glbFraction * 100) + '%', false);
      updateLoader();
    }
  });
  model = gltf.scene; model.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(model), size = bounds.getSize(new THREE.Vector3()), center = bounds.getCenter(new THREE.Vector3());
  const scale = 7.6 / Math.max(size.x, size.z), wrapper = new THREE.Group();
  wrapper.add(model); wrapper.scale.setScalar(scale); wrapper.position.set(-center.x * scale, -bounds.min.y * scale, -center.z * scale);
  const report = recolorModel(model);
  model.traverse(node => {
    if (node.isLight) {
      node.color.set('#ffffff'); node.intensity = .45;
      node.distance = 2.6; node.decay = 2;
    }
  });
  scene.add(wrapper); wrapper.updateMatrixWorld(true); frameDesk(); buildHoverGroups();
  deskModel = model; deskWrapper = wrapper;
  stepStatus(GLB_STEP, 'OK', true); completedSteps = GLB_STEP + 1; glbFraction = 0; updateLoader();
  glbDone = true; maybeFinishLoader();
  // Populate the info panel on load without a blue selection fill: books
  // should only glow while actually hovered in the 3D view.
  showPanel('book');
  // The desk scene is the 电脑桌 (computer desk) view: mark its cell active.
  for (const cell of document.querySelectorAll('#carousel .cell')) cell.classList.toggle('selected', cell.dataset.view === 'desk');
  window.deskDebug = { ...window.deskDebug, state: 'ready', ...report };
  // Deep link: index.html#dining / #drafting opens straight into that view.
  const deepView = location.hash.slice(1);
  if (VIEW_MODELS[deepView]) switchView(deepView);
 } catch (error) {
  console.error('Desk model failed:', error); window.deskDebug.state = 'error'; window.deskDebug.error = error.message;
  failLoader(error);
 }
}
// ---- in-place typology views: the center 3D stage swaps to another desk ----
// model while all the surrounding chrome (top bar, side panel, bottom bar,
// zoom buttons) stays exactly where it is.
const VIEW_MODELS = {
 dining: { url: new URL('./assets/dining-table.glb', import.meta.url).href, label: 'DINING TABLE', frame: 'topdown' },
 drafting: { url: new URL('./assets/drafting-desk.glb', import.meta.url).href, label: 'DRAWING TABLE', frame: 'fixed' },
 school: { url: new URL('./assets/school-desk.glb', import.meta.url).href, label: 'SCHOOL DESK', frame: 'orbit' },
 altar: { url: new URL('./assets/altar.glb', import.meta.url).href, label: 'ALTAR', frame: 'orbit' }
};
const viewState = {}; // view -> { model, wrapper, promise }
let viewMode = 'desk';
// Same grayscale quantization as dining.html: every material becomes a flat
// shade of gray derived from its texture's average luminance (5 levels).
const GRAYS = ['#ffffff', '#e2e2e2', '#a6a6a6', '#4f4f4f', '#131313'];
function grayFor(l) { return l > .78 ? GRAYS[0] : l > .60 ? GRAYS[1] : l > .44 ? GRAYS[2] : l > .27 ? GRAYS[3] : GRAYS[4]; }
function averageLuminance(image) {
 const canvas = document.createElement('canvas');
 const w = canvas.width = Math.min(64, image.width), h = canvas.height = Math.min(64, image.height);
 const ctx = canvas.getContext('2d', { willReadFrequently: true });
 ctx.drawImage(image, 0, 0, w, h);
 const data = ctx.getImageData(0, 0, w, h).data;
 let sum = 0;
 for (let i = 0; i < data.length; i += 4) sum += (data[i] * .2126 + data[i + 1] * .7152 + data[i + 2] * .0722) / 255;
 return sum / (data.length / 4);
}
function recolorGrayscale(root) {
 // All volumes are pure white against the black void: darker materials would
 // disappear into the background. The ink renderer supplies the black
 // outlines, so form still reads clearly.
 const cache = new Map();
 root.traverse(node => {
  if (!node.isMesh) return;
  node.castShadow = true; node.receiveShadow = true;
  const source = Array.isArray(node.material) ? node.material[0] : node.material;
  if (!cache.has(source)) cache.set(source, new THREE.MeshStandardMaterial({ color: GRAYS[0], roughness: .95, metalness: 0, flatShading: true }));
  node.material = cache.get(source);
 });
}
function viewLoading(text) {
 let el = document.getElementById('view-loading');
 if (!el) {
  el = document.createElement('div'); el.id = 'view-loading';
  el.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.62);color:#fff;font-family:VT323,"Courier New",monospace;font-size:24px;letter-spacing:.22em;z-index:30;pointer-events:none;';
  document.getElementById('app').appendChild(el);
 }
 el.textContent = text;
 el.style.display = text ? 'flex' : 'none';
}
function ensureView(view) {
 const cfg = VIEW_MODELS[view];
 const st = viewState[view] || (viewState[view] = {});
 if (st.promise) return st.promise;
 st.promise = new GLTFLoader().loadAsync(cfg.url, xhr => {
  if (xhr.total) viewLoading('LOADING ' + cfg.label + ' ' + Math.round(xhr.loaded / xhr.total * 100) + '%');
 }).then(gltf => {
  st.model = gltf.scene; st.model.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(st.model), size = bounds.getSize(new THREE.Vector3()), center = bounds.getCenter(new THREE.Vector3());
  const scale = 7.6 / Math.max(size.x, size.z);
  // Store the post-scale world size: orbit framing uses this instead of
  // re-measuring setFromObject, which can return stale/inflated bounds.
  st.worldSize = size.clone().multiplyScalar(scale);
  st.wrapper = new THREE.Group();
  st.wrapper.add(st.model);
  st.wrapper.scale.setScalar(scale);
  // No floor in these views: center the model vertically in the black void.
  st.wrapper.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
  recolorGrayscale(st.model);
  st.wrapper.visible = false;
  scene.add(st.wrapper); st.wrapper.updateMatrixWorld(true);
 });
 return st.promise;
}
function setView(mode) {
 viewMode = mode;
 const isDesk = mode === 'desk';
 const st = viewState[mode];
 if (deskWrapper) deskWrapper.visible = isDesk;
 for (const [v, s] of Object.entries(viewState)) if (s.wrapper) s.wrapper.visible = v === mode;
 model = isDesk ? deskModel : st && st.model;
 hoverGroup = null; selectedRole = null;
 renderer.domElement.style.cursor = '';
 meshGroup.clear();
 if (isDesk) buildHoverGroups(); // typology models are purely visual: no hover, no click
 refreshHighlight();
 for (const cell of document.querySelectorAll('#carousel .cell')) cell.classList.toggle('selected', cell.dataset.view === mode);
 if (isDesk) { frameDesk(); showPanel('book'); }
 else { frameView(mode); showPanel(mode); }
 window.deskDebug = { ...window.deskDebug, view: viewMode };
}
// Bottom bar view switcher: 电脑桌 shows the desk scene, 餐桌 the dining
// table, 绘图桌 the drafting desk. Clicking the active view's cell is a no-op.
async function switchView(view) {
 if (window.SFX) SFX.play('click');
 if (view === viewMode) return;
 if (view === 'desk') { setView('desk'); return; }
 const cfg = VIEW_MODELS[view];
 if (!cfg) return;
 viewLoading('LOADING ' + cfg.label + ' …');
 try {
  await ensureView(view);
  setView(view);
  viewLoading('');
 } catch (error) {
  console.error(view + ' model failed:', error);
  if (viewState[view]) viewState[view].promise = null;
  viewLoading('模型加载失败 FAILED');
  setTimeout(() => viewLoading(''), 1600);
 }
}
new ResizeObserver(() => {
 renderer.setSize(stage.clientWidth, stage.clientHeight);
 ink.setSize(stage.clientWidth, stage.clientHeight);
}).observe(stage);
renderer.setAnimationLoop(() => { controls.update(); const report = ink.render(); if (window.deskDebug.state === 'ready') Object.assign(window.deskDebug, report); });
window.deskTick = () => { controls.update(); ink.render(); };
if (!skipLoader) runLoaderIntro();
load();
