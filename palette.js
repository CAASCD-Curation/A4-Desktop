import * as THREE from 'three';
// Match the nearest real object; never classify using the scene root "Floor 0".
// Returns both the palette role and the ancestor node that anchored the match,
// so hover highlighting can group every mesh of the same physical object.
function classify(mesh, root) {
 for (let n = mesh; n && n !== root; n = n.parent) {
  const name = n.name.toLowerCase();
  if (/^floor_tile/.test(name)) return { role: 'floor', node: n };
  if (/^wall_small/.test(name)) return { role: 'wall', node: n };
  if (/chair_office_wheel|base.?model/.test(name)) return { role: 'chairFrame', node: n };
  if (/simple_office_chair/.test(name)) return { role: 'chair', node: n };
  if (/file_cabinet_medium/.test(name)) return { role: 'greenCabinet', node: n };
  if (/file_cabinet_small/.test(name)) return { role: 'cabinet', node: n };
  if (/^desk_/.test(name)) return { role: 'desk', node: n };
  if (/book/.test(name)) return { role: 'book', node: n };
  if (/painting/.test(name)) return { role: 'frame', node: n };
  if (/nature_deco/.test(name)) return { role: 'plant', node: n };
  if (/alcohol_dispenser/.test(name)) return { role: 'bottle', node: n };
  if (/lamp_small/.test(name)) return { role: 'lamp', node: n };
  if (/phone/.test(name)) return { role: 'phone', node: n };
  if (/^box/.test(name)) return { role: 'box', node: n };
  if (/trash|empty_cup/.test(name)) return { role: 'ivory', node: n };
  if (/keyboard|monitor|pc_case|mouse/.test(name)) return { role: 'computer', node: n };
  if (/paper/.test(name)) return { role: 'paperStatic', node: n };
  if (/sticky_note/.test(name)) return { role: 'note', node: n };
 }
 return { role: 'accessory', node: mesh };
}
function category(mesh, root) { return classify(mesh, root).role; }
export { classify };
function pickColor(role, rgb) {
 const max = Math.max(...rgb), min = Math.min(...rgb), light = (max + min) / 2, saturation = max - min;
 const pale = light > .65 && saturation < .25, dark = max < .23;
 // Ink art uses white architectural surfaces and dark small objects. This
 // remains per-face material data on the original GLB, not a baked picture.
 if (role === 'floor' || role === 'wall') return '#ffffff';
 if (role === 'desk') return dark ? '#434343' : '#ffffff';
 if (role === 'cabinet' || role === 'greenCabinet') return max > .72 ? '#ffffff' : dark ? '#505050' : '#ffffff';
 if (role === 'chair') return dark ? '#171717' : '#efefef';
 if (role === 'chairFrame') return light > .65 ? '#b0b0b0' : '#161616';
 if (role === 'book' || role === 'frame') return pale ? '#ffffff' : '#353535';
 if (role === 'plant') return rgb[0] > rgb[1] * 1.15 ? '#ffffff' : '#424242';
 if (role === 'lamp') return max > .85 ? '#ffffff' : '#111111';
 if (role === 'phone') return pale ? '#dadada' : '#191919';
 if (role === 'computer') return pale ? '#ffffff' : dark ? '#242424' : '#e0e0e0';
 if (role === 'ivory') return '#ffffff';
 if (role === 'bottle' || role === 'box') return '#b8b8b8';
 if (role === 'note') return '#f0f0f0';
 return pale ? '#ffffff' : dark ? '#161616' : '#a0a0a0';
}
export function recolorModel(root) {
 const imageCache = new Map();
 const report = { meshes: 0, paletteMeshes: 0, detailMeshes: 0, invalidMaterialArrays: 0, categories: {} };
 root.traverse(mesh => {
  if (!mesh.isMesh) return;
  report.meshes++; mesh.castShadow = true; mesh.receiveShadow = true;
  const wasArray = Array.isArray(mesh.material), materials = wasArray ? mesh.material : [mesh.material], role = category(mesh, root);
  report.categories[role] = (report.categories[role] || 0) + 1;
  const result = materials.map(original => {
   const material = original.clone(); material.metalness = 0; material.roughness = .95;
   if (!/^palette_/i.test(original.name) || !original.map || wasArray) { report.detailMeshes++; return material; }
   report.paletteMeshes++;
   const image = original.map.image;
   if (!imageCache.has(image)) {
    const canvas = document.createElement('canvas'); canvas.width = image.width; canvas.height = image.height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true }); ctx.drawImage(image, 0, 0);
    imageCache.set(image, ctx.getImageData(0, 0, canvas.width, canvas.height));
   }
   const pixels = imageCache.get(image), geometry = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
   const uv = geometry.getAttribute('uv'), count = geometry.getAttribute('position').count, colors = new Float32Array(count * 3), c = new THREE.Color(), sampleUv = new THREE.Vector2();
   for (let i = 0; i < count; i += 3) {
    sampleUv.set((uv.getX(i) + uv.getX(i+1) + uv.getX(i+2)) / 3, (uv.getY(i) + uv.getY(i+1) + uv.getY(i+2)) / 3);
    original.map.transformUv(sampleUv);
    const x = Math.min(pixels.width - 1, Math.max(0, Math.floor(sampleUv.x * pixels.width))), y = Math.min(pixels.height - 1, Math.max(0, Math.floor(sampleUv.y * pixels.height))), off = (y * pixels.width + x) * 4;
    const sourceRGB = [pixels.data[off]/255, pixels.data[off+1]/255, pixels.data[off+2]/255];
    c.set(pickColor(role, sourceRGB));
    for (let j = 0; j < 3; j++) c.toArray(colors, (i+j)*3);
   }
   geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3)); mesh.geometry = geometry;
   material.map = null; material.color.set('#ffffff'); material.vertexColors = true; material.flatShading = true;
   if (role === 'floor') {
    // The four original tiles share a plane. Draw their real boundaries in
    // object space, so seams rotate and zoom with the GLB instead of the screen.
    geometry.computeBoundingBox();
    const { min, max } = geometry.boundingBox;
    material.onBeforeCompile = shader => {
     shader.uniforms.tileMin = { value: new THREE.Vector2(min.x,min.z) };
     shader.uniforms.tileSpan = { value: new THREE.Vector2(max.x-min.x,max.z-min.z) };
     shader.vertexShader = 'varying vec2 tilePosition;\n' + shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\ntilePosition = position.xz;');
     shader.fragmentShader = 'varying vec2 tilePosition;\nuniform vec2 tileMin, tileSpan;\n' + shader.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\nvec2 t = (tilePosition - tileMin) / max(tileSpan,vec2(0.001));\nfloat seam = min(min(t.x,1.0-t.x),min(t.y,1.0-t.y));\nif(seam < 0.003) diffuseColor.rgb = vec3(0.0);');
    };
    material.customProgramCacheKey = () => 'ink-floor-seams';
   }
   return material;
  });
  mesh.material = wasArray ? result : result[0];
  if (Array.isArray(mesh.material) && !mesh.geometry.groups.length) report.invalidMaterialArrays++;
 });
 return report;
}
