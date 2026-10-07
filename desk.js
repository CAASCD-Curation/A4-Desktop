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
const ACCENT = '#1693ed';
const OBJECT_INDEX = {
 book: { num: '01', name: '书本 BOOKS', desc: '文学中的桌面意象，以及关于桌面的语言表达。\nThe desk as it appears in literature, and the language used to describe it.', type: '文学与书写', material: 'Paper', added: '2023-11-14', tags: '文学意象, 书写, 阅读' },
 phone: { num: '02', name: 'TELEPHONE', desc: 'A direct line to the outside world. Mostly rings exactly when an idea starts flowing.', type: 'Physical Object', material: 'Plastic', added: '2024-01-09', tags: 'Communication, Retro' },
 computer: { num: '03', name: 'COMPUTER', desc: 'The engine of the desk. Every experiment, draft and prototype passes through here.', type: 'Physical Object', material: 'Metal, Glass', added: '2023-08-21', tags: 'Work, Code, Design' },
 note: { num: '04', name: 'NOTES', desc: 'Sticky fragments of half-formed plans. Cheap paper, expensive thoughts.', type: 'Physical Object', material: 'Paper', added: '2024-03-02', tags: 'Ideas, Sketches' },
 frame: { num: '05', name: 'FRAME', desc: 'A small window into somewhere else. A reminder that desks sit in rooms, and rooms in the world.', type: 'Physical Object', material: 'Wood, Glass', added: '2023-06-17', tags: 'Memory, Art' },
 lamp: { num: '06', name: '灯 LAMP', desc: '天黑之后点亮灵感：每晚最后熄灭的那盏灯。\nKeeps the ideas lit after dark. The last thing switched off at night.', type: 'Physical Object', material: 'Metal', added: '2023-09-30', tags: 'Light, Focus' },
 greenCabinet: { num: '09', name: '文件柜 CABINET', desc: '归档的秩序：分类、收纳的桌面。\nThe order of archiving: classification, storage, and institutional desks.', type: '归档与秩序', material: '—', added: '—', tags: '归档, 收纳, 制度' },
 dining: { num: '02', name: '餐桌 DINING TABLE', desc: '围坐与共享的平面：一日三餐、节庆、谈判与家庭仪式，都发生在这张桌子上。\nA surface for gathering and sharing — daily meals, feasts, negotiations and family rituals all happen here.', type: '桌面类型学', material: 'Wood, Glass', added: '—', tags: '聚餐, 仪式, 共享' },
 drafting: { num: '04', name: '绘图桌 DRAWING TABLE', desc: '倾斜的平面：线条、比例与想象在这里落成图纸。\nA tilted surface where lines, proportions and imagination become drawings.', type: '桌面类型学', material: 'Wood, Metal', added: '—', tags: '绘图, 设计, 工作' },
 school: { num: '03', name: '课桌 SCHOOL DESK', desc: '规训与求知的平面：一代人的晨读、考试与课间的刻痕。\nA surface of discipline and learning — morning readings, exams, and carvings between classes.', type: '桌面类型学', material: 'Wood, Metal', added: '—', tags: '教育, 规训, 记忆' },
 altar: { num: '01', name: '祭坛 ALTAR', desc: '献祭与通灵的平面：火、供品与祈祷在此抵达另一重世界。\nA surface of sacrifice and communion — fire, offerings and prayers reaching another world.', type: '桌面类型学', material: 'Stone, Wood', added: '—', tags: '仪式, 信仰, 献祭' },
 candle: { num: '07', name: '蜡烛 CANDLES', desc: '祭坛上的火：光是第一份抵达另一重世界的供品。\nFire on the altar: light is the first offering to reach the other world.', type: '仪式与供品', material: 'Wax', added: '—', tags: '火, 光, 供奉' },
 prayer: { num: '08', name: '祝辞 PRAYER', desc: '摊开的书页写着送往他处的文字：祈祷是被朗读的地址。\nAn open book of words sent elsewhere: a prayer is an address read aloud.', type: '仪式与供品', material: 'Paper', added: '—', tags: '祈祷, 文字, 祝辞' },
 curtain: { num: '10', name: '帷布 ALTAR CLOTH', desc: '覆盖祭坛的布：划分神圣与日常的边界。\nThe cloth over the altar: a border between the sacred and the everyday.', type: '仪式与供品', material: 'Cloth', added: '—', tags: '帷布, 覆盖, 圣域' },
 stationery: { num: '11', name: '文具 STATIONERY', desc: '铅笔与钢笔：一代人写下的第一行字。\nPencils and pens: the first line a generation ever wrote.', type: '教育与书写', material: 'Wood, Metal', added: '—', tags: '书写, 学习, 工具' },
 penholder: { num: '12', name: '笔筒 PEN HOLDER', desc: '铅笔与橡皮的营地：课桌上最拥挤的角落。\nA camp for pencils and erasers: the most crowded corner of a school desk.', type: '教育与书写', material: 'Plastic', added: '—', tags: '文具, 收纳, 课间' },
 exampaper: { num: '15', name: '试卷 EXAM PAPER', desc: '被打分的平面：一代人的紧张都印在折叠的纸上。\nThe graded surface: a generation’s nerves printed on folded sheets.', type: '教育与书写', material: 'Paper', added: '—', tags: '考试, 规训, 分数' },
 textbook: { num: '16', name: '课本 TEXTBOOKS', desc: '被翻旧的标准答案：知识按学期切分。\nWell-worn standard answers: knowledge sliced by semester.', type: '教育与书写', material: 'Paper', added: '—', tags: '教材, 学习, 记忆' },
 ruler: { num: '17', name: '尺子 RULER', desc: '图板上唯一的直线：所有倾斜都从它开始。\nThe only straight line on the board: every tilt begins with it.', type: '工作与工作台', material: 'Wood', added: '—', tags: '测量, 直线, 工具' },
 stool: { num: '13', name: '凳子 STOOL', desc: '绘图者的座位：高度决定视线的角度。\nThe drafter’s seat: height sets the angle of looking.', type: '工作与工作台', material: 'Wood, Metal', added: '—', tags: '坐具, 工作, 姿势' },
 draftpaper: { num: '14', name: '图纸 DRAWINGS', desc: '摊开的图纸：尚未建成的世界。\nSheets spread out: worlds not yet built.', type: '工作与工作台', material: 'Paper', added: '—', tags: '绘图, 设计, 纸' },
 plate: { num: '18', name: '盘子 PLATES', desc: '每人面前的圆：盛宴被切分成均等的一份。\nA circle before each seat: the feast divided into equal portions.', type: '饮食与仪式', material: 'Ceramic', added: '—', tags: '餐具, 圆, 盛放' },
 cutlery: { num: '19', name: '餐具 CUTLERY', desc: '刀叉的顺序就是餐桌的礼仪：谁先动手，谁后动手。\nThe order of knife and fork is table manners itself: who starts, who waits.', type: '饮食与仪式', material: 'Metal', added: '—', tags: '刀叉, 礼仪, 秩序' },
 wineglass: { num: '20', name: '酒杯 WINE GLASSES', desc: '举起的瞬间，桌面变成仪式：碰杯是最短的祝辞。\nThe moment it is raised, the table becomes a ritual: a toast is the shortest prayer.', type: '饮食与仪式', material: 'Glass', added: '—', tags: '碰杯, 仪式, 欢庆' }
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
const ARCHIVES = {
 book: { title: '书本 BOOKS', theme: '文学与书写', data: () => window.BOOK_ARCHIVE },
 candle: { title: '蜡烛 CANDLES', theme: '仪式与供品', data: () => window.ALTAR_CANDLE_ARCHIVE },
 prayer: { title: '祝辞 PRAYER', theme: '仪式与供品', data: () => window.ALTAR_PRAYER_ARCHIVE },
 curtain: { title: '帷布 ALTAR CLOTH', theme: '仪式与供品', data: () => window.ALTAR_CURTAIN_ARCHIVE },
 plate: { title: '盘子 PLATES', theme: '饮食与仪式', data: () => window.DINING_PLATE_ARCHIVE },
 cutlery: { title: '餐具 CUTLERY', theme: '饮食与仪式', data: () => window.DINING_CUTLERY_ARCHIVE },
 wineglass: { title: '酒杯 WINE GLASSES', theme: '饮食与仪式', data: () => window.DINING_WINEGLASS_ARCHIVE },
 textbook: { title: '课本 TEXTBOOKS', theme: '教育与书写', data: () => window.SCHOOL_TEXTBOOK_ARCHIVE },
 penholder: { title: '笔筒 PEN HOLDER', theme: '教育与书写', data: () => window.SCHOOL_PENHOLDER_ARCHIVE },
 exampaper: { title: '试卷 EXAM PAPER', theme: '教育与书写', data: () => window.SCHOOL_EXAMPAPER_ARCHIVE },
 draftpaper: { title: '图纸 DRAWINGS', theme: '工作与工作台', data: () => window.DRAFTING_DRAFTPAPER_ARCHIVE },
 // 灯也出现在电脑桌场景：档案只在绘图桌视图打开，电脑桌保持原样。
 lamp: { title: '灯 LAMP', theme: '光与观看', view: 'drafting', data: () => window.DRAFTING_LAMP_ARCHIVE },
 ruler: { title: '尺子 RULER', theme: '工作与工作台', data: () => window.DRAFTING_RULER_ARCHIVE }
};
const archiveEl = document.getElementById('archive');
const arcList = document.getElementById('arc-list');
function showArcDetail(entry, idx, total) {
 document.getElementById('arc-d-id').textContent = entry.id + ' — ' + String(idx + 1).padStart(2, '0') + ' / ' + total;
 document.getElementById('arc-d-title').textContent = entry.title;
 document.getElementById('arc-d-meta').innerHTML = '<b>年代 YEAR</b>' + (entry.year || '—') + '<br><b>标签 TAGS</b>' + entry.tags;
 document.getElementById('arc-d-note').textContent = entry.note;
 // Entries from the spreadsheet carry a photo (原图 column); show it above
 // the caption. Older text-only entries keep the plain 图像建议 line.
 const imgEl = document.getElementById('arc-d-photo');
 if (entry.img) { imgEl.src = entry.img; imgEl.style.display = 'block'; }
 else { imgEl.removeAttribute('src'); imgEl.style.display = 'none'; }
 document.getElementById('arc-d-image').textContent = entry.image ? '图像建议：' + entry.image : '';
}
function openArchive(role) {
 const a = ARCHIVES[role];
 if (a && a.view && a.view !== viewMode) return;
 const data = a && a.data();
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
// Debug hook: meshes of a hover role with their ancestor chain and world
// size — used to split mis-grouped objects (e.g. the ruler on the drafting
// desk was lumped in with the drawings).
window.deskRoleMeshes = role => [...meshGroup].filter(([m, g]) => g.role === role).map(([m]) => {
 const b = new THREE.Box3().setFromObject(m), s = b.getSize(new THREE.Vector3());
 const chain = [];
 for (let n = m; n && n !== scene; n = n.parent) chain.push(n.name);
 return { chain: chain.join(' < '), size: [+s.x.toFixed(2), +s.y.toFixed(2), +s.z.toFixed(2)] };
});
// Debug hook: every mesh in the current view with its ancestor chain, world
// size and projected screen center — used to identify unlabeled objects
// (e.g. the drafting-desk lamp) from a screenshot.
window.deskSceneMeshes = () => {
 const rect = renderer.domElement.getBoundingClientRect(), out = [];
 model.traverse(m => {
  if (!m.isMesh) return;
  const b = new THREE.Box3().setFromObject(m), s = b.getSize(new THREE.Vector3());
  const p = b.getCenter(new THREE.Vector3()).project(camera);
  const chain = [];
  for (let n = m; n && n !== scene; n = n.parent) chain.push(n.name);
  out.push({
   chain: chain.join(' < '), size: [+s.x.toFixed(2), +s.y.toFixed(2), +s.z.toFixed(2)],
   x: Math.round((p.x + 1) / 2 * rect.width + rect.left), y: Math.round((1 - p.y) / 2 * rect.height + rect.top)
  });
 });
 return out;
};
// Debug hook: render only meshes whose ancestor chain contains the substring
// (visual identification of a single object against a user screenshot).
window.deskIsolate = sub => {
 let shown = 0;
 model.traverse(m => {
  if (!m.isMesh) return;
  const chain = [];
  for (let n = m; n && n !== scene; n = n.parent) chain.push(n.name);
  const hit = chain.join(' < ').toLowerCase().includes(String(sub).toLowerCase());
  m.visible = hit; if (hit) shown++;
 });
 return shown;
};
window.deskShowAll = () => { model.traverse(m => { if (m.isMesh) m.visible = true; }); };
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
// Typology object hover: per-view rules match ancestor node names (the same
// walk-up scheme as palette.classify). Hovering an object on the altar,
// school desk or drafting desk fills it blue and updates the side panel,
// exactly like the computer-desk scene. Meshes that match nothing (the table
// bodies themselves) get no group, so the raycast passes through them.
const VIEW_RULES = {
 altar: [[/candle|flame/i, 'candle'], [/bookopen/i, 'prayer'], [/simply_cloth/i, 'curtain']],
 school: [[/book/i, 'textbook'], [/paper_file/i, 'exampaper'], [/pen|pencil/i, 'stationery'], [/empty_cup/i, 'penholder']],
 drafting: [[/tonone|defintion/i, 'lamp'], [/^object_2$/i, 'ruler'], [/stool/i, 'stool'], [/object_\d/i, 'draftpaper']],
 dining: [[/^box00[6-9]/i, 'plate'], [/对象02[12]|对象03[4-9]/, 'cutlery'], [/cylinder|对象0(?:02|52|53|55)/i, 'wineglass']]
};
function classifyView(node, root, rules) {
 for (let n = node; n && n !== root; n = n.parent) {
  const name = n.name || '';
  for (const [re, role] of rules) if (re.test(name)) return { role, node: n };
 }
 return null;
}
function buildViewHoverGroups(view) {
 const rules = VIEW_RULES[view];
 if (!rules) return;
 const groups = new Map();
 model.traverse(node => {
  if (!node.isMesh) return;
  const hit = classifyView(node, model, rules);
  if (!hit) return;
  let group = groups.get(hit.node);
  if (!group) { group = { role: hit.role, meshes: [] }; groups.set(hit.node, group); }
  group.meshes.push(node);
 });
 for (const group of groups.values()) group.meshes.forEach(mesh => meshGroup.set(mesh, group));
 window.deskDebug = { ...window.deskDebug, viewRoles: [...new Set([...groups.values()].map(g => g.role))] };
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
 if (isDesk) buildHoverGroups(); else buildViewHoverGroups(mode);
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
