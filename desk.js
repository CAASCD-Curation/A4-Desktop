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
const camera = new THREE.PerspectiveCamera(34, stage.clientWidth / stage.clientHeight, .05, 100);
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
 greenCabinet: { num: '09', name: '文件柜 CABINET', desc: '归档的秩序：分类、收纳的桌面。\nThe order of archiving: classification, storage, and institutional desks.', type: '归档与秩序', material: '—', added: '—', tags: '归档, 收纳, 制度' }
};

const meshGroup = new Map();
let hoverGroup = null, selectedRole = null;
const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
window.deskDebug = { state: 'loading', modelUrl: new URL('./assets/desktop.glb', import.meta.url).href };
let model;
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
}
function roleMeshes(role) {
 const meshes = [];
 for (const [mesh, group] of meshGroup) if (group.role === role) meshes.push(mesh);
 return meshes;
}
// Hover wins over the carousel selection; otherwise the selection glows.
function refreshHighlight() {
 const meshes = hoverGroup ? hoverGroup.meshes : selectedRole ? roleMeshes(selectedRole) : null;
 if (meshes && meshes.length) ink.setHover(meshes, ACCENT); else ink.setHover(null);
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
for (const cell of document.querySelectorAll('#carousel .cell')) cell.addEventListener('click', () => select(cell.dataset.role));
function updateHover() {
 raycaster.setFromCamera(pointer, camera);
 let group = null;
 for (const hit of raycaster.intersectObject(model, true)) {
  const found = meshGroup.get(hit.object);
  if (found) { group = found; break; }
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
document.getElementById('arc-close').addEventListener('click', closeArchive);
addEventListener('keydown', e => { if (e.key === 'Escape') closeArchive(); });
document.getElementById('open-archive').addEventListener('click', () => {
 if (selectedRole === 'greenCabinet') { location.href = './card-index.html'; return; }
 if (selectedRole) openArchive(selectedRole);
});
// Click (not drag) on a scene object opens its archive.
let downPos = null;
renderer.domElement.addEventListener('pointerdown', e => { downPos = [e.clientX, e.clientY]; });
renderer.domElement.addEventListener('pointerup', e => {
 if (!downPos) return;
 const dx = e.clientX - downPos[0], dy = e.clientY - downPos[1]; downPos = null;
 if (dx * dx + dy * dy > 25) return;
 if (!hoverGroup) return;
 if (hoverGroup.role === 'greenCabinet') { location.href = './card-index.html'; return; }
 openArchive(hoverGroup.role);
});
window.deskOpenArchive = openArchive;
function dolly(factor) {
 camera.position.sub(controls.target).multiplyScalar(factor).add(controls.target);
 controls.update();
}
document.getElementById('zoom-in').addEventListener('click', () => dolly(.8));
document.getElementById('zoom-out').addEventListener('click', () => dolly(1.25));
document.getElementById('reset-view').addEventListener('click', () => { if (model) frameModel(); });
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
 const bounds = new THREE.Box3().setFromObject(model), size = bounds.getSize(new THREE.Vector3()), center = bounds.getCenter(new THREE.Vector3());
 controls.target.copy(center);
 const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
 const distance = Math.max(size.y / 2 / Math.tan(halfFov), Math.max(size.x, size.z) / 2 / (Math.tan(halfFov) * camera.aspect)) * (camera.aspect < 1 ? 1.5 : 1.85);
 camera.position.copy(center).add(new THREE.Vector3(-.78, .68, -1).normalize().multiplyScalar(distance));
 camera.lookAt(center); controls.update();
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
  scene.add(wrapper); wrapper.updateMatrixWorld(true); frameModel(); buildHoverGroups();
  stepStatus(GLB_STEP, 'OK', true); completedSteps = GLB_STEP + 1; glbFraction = 0; updateLoader();
  glbDone = true; maybeFinishLoader();
  select('book');
  window.deskDebug = { ...window.deskDebug, state: 'ready', ...report };
 } catch (error) {
  console.error('Desk model failed:', error); window.deskDebug.state = 'error'; window.deskDebug.error = error.message;
  failLoader(error);
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
