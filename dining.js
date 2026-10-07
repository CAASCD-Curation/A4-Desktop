import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { InkRenderer } from './ink-renderer.js';

// Standalone viewer for the dining-table typology entry. Same 1-bit ink
// pipeline as the main desk scene, fed by a generic grayscale recolor: every
// textured material is replaced by a flat shade of gray derived from the
// average luminance of its texture, so the model's own tonal relationships
// survive the translation into line art.
const stage = document.getElementById('stage');
const loaderEl = document.getElementById('loader');
const loaderFill = document.getElementById('loader-fill');
const loaderPct = document.getElementById('loader-pct');

const scene = new THREE.Scene();
scene.background = new THREE.Color('#000000');
const camera = new THREE.PerspectiveCamera(34, 1, .05, 100);
const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(1); renderer.setSize(stage.clientWidth, stage.clientHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('app').appendChild(renderer.domElement);
const ink = new InkRenderer(renderer, scene, camera); ink.setSize(stage.clientWidth, stage.clientHeight);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = .075;
controls.minDistance = 1.5;

scene.add(new THREE.HemisphereLight('#ffffff', '#ffffff', .65));
const key = new THREE.DirectionalLight('#ffffff', 2.6); key.position.set(-5, 9, -4); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
Object.assign(key.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: .1, far: 30 });
key.shadow.normalBias = .035; scene.add(key);
const fill = new THREE.DirectionalLight('#ffffff', .25); fill.position.set(4, 5, -6); scene.add(fill);

// ---- pure black void: no added room geometry. Anything without volume
// renders as solid black in the ink pass; only the model itself is drawn.

// ---- grayscale recolor ----
const GRAYS = ['#ffffff', '#e2e2e2', '#a6a6a6', '#4f4f4f', '#131313'];
function grayFor(luminance) {
 if (luminance > .78) return GRAYS[0];
 if (luminance > .60) return GRAYS[1];
 if (luminance > .44) return GRAYS[2];
 if (luminance > .27) return GRAYS[3];
 return GRAYS[4];
}
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
function recolor(model) {
 const cache = new Map();
 model.traverse(node => {
  if (!node.isMesh) return;
  node.castShadow = true; node.receiveShadow = true;
  const source = Array.isArray(node.material) ? node.material[0] : node.material;
  if (!cache.has(source)) {
   let gray = GRAYS[2];
   if (source.map && source.map.image) {
    try { gray = grayFor(averageLuminance(source.map.image)); } catch (e) { /* keep default */ }
   } else if (source.color) {
    const c = source.color;
    gray = grayFor(c.r * .2126 + c.g * .7152 + c.b * .0722);
   }
   cache.set(source, new THREE.MeshStandardMaterial({ color: gray, roughness: .95, metalness: 0, flatShading: true }));
  }
  node.material = cache.get(source);
 });
}

// ---- load + frame ----
let model = null;
const modelBox = new THREE.Box3();
function frame() {
 if (!model) return;
 const center = modelBox.getCenter(new THREE.Vector3()), size = modelBox.getSize(new THREE.Vector3());
 controls.target.copy(center);
 const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
 const distance = Math.max(size.y / 2 / Math.tan(halfFov), Math.max(size.x, size.z) / 2 / (Math.tan(halfFov) * camera.aspect)) * 1.45;
 // Aim from the side with the most chairs, falling back to a fixed diagonal.
 let dir = new THREE.Vector3(-.68, 0, -.72);
 const chairBox = new THREE.Box3(); let chairs = 0;
 model.traverse(node => { if (node.isMesh && /yizi/i.test(node.material.name || '')) { chairBox.expandByObject(node); chairs++; } });
 if (chairs) {
  const d = chairBox.getCenter(new THREE.Vector3()).sub(center).setY(0);
  if (d.length() > .3) dir = d.normalize();
 }
 dir.y = .42; dir.normalize();
 camera.position.copy(center).add(dir.multiplyScalar(distance));
 camera.lookAt(center); controls.update();
}
async function load() {
 try {
  const gltf = await new GLTFLoader().loadAsync('./assets/dining-table.glb', xhr => {
   if (xhr.total) {
    const p = Math.min(xhr.loaded / xhr.total, 1);
    loaderFill.style.width = (p * 100).toFixed(0) + '%';
    loaderPct.textContent = Math.round(p * 100) + '%';
   }
  });
  model = gltf.scene; model.updateMatrixWorld(true);
  // Material names survive recoloring only if we keep them: tag meshes first
  // so chair detection still works after materials are replaced.
  model.traverse(node => { if (node.isMesh) { const m = Array.isArray(node.material) ? node.material[0] : node.material; node.userData.sourceMaterial = m.name || ''; } });
  recolor(model);
  model.traverse(node => { if (node.isMesh) node.material.name = node.userData.sourceMaterial; });
  // Normalize: feet on the floor, centered, longest side ~3.6 units.
  const raw = new THREE.Box3().setFromObject(model), size = raw.getSize(new THREE.Vector3()), center = raw.getCenter(new THREE.Vector3());
  const scale = 3.6 / Math.max(size.x, size.z);
  const wrapper = new THREE.Group();
  wrapper.add(model); wrapper.scale.setScalar(scale); wrapper.position.set(-center.x * scale, -raw.min.y * scale, -center.z * scale);
  scene.add(wrapper); wrapper.updateMatrixWorld(true);
  modelBox.setFromObject(wrapper);
  frame();
  loaderEl.style.opacity = '0'; setTimeout(() => loaderEl.remove(), 550);
 } catch (error) {
  loaderPct.textContent = '模型加载失败，请重试 MODEL FAILED';
  console.error('Dining table failed:', error);
 }
}
document.getElementById('reset').addEventListener('click', frame);
new ResizeObserver(() => {
 renderer.setSize(stage.clientWidth, stage.clientHeight);
 ink.setSize(stage.clientWidth, stage.clientHeight);
}).observe(stage);
renderer.setAnimationLoop(() => { controls.update(); ink.render(); });
window.diningDebug = { scene, camera, renderer, ink, controls, THREE };
load();
