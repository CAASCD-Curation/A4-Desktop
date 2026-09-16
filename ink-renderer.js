import * as THREE from 'three';

// Both geometry passes use the same low-resolution grid. The final pass maps
// each texel to an integer block of display pixels, never interpolating ink.
export class InkRenderer {
 constructor(renderer, scene, camera) {
  this.renderer = renderer; this.scene = scene; this.camera = camera;
  this.beauty = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  this.beauty.depthTexture = new THREE.DepthTexture(1, 1, THREE.UnsignedIntType);
  this.normals = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  this.normalMaterials = new Map();
  // Hover highlight: the hovered object's meshes are drawn white into this
  // mask, everything else black. The ink pass recolors masked white pixels.
  this.mask = new THREE.WebGLRenderTarget(1, 1, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
  this.hoverWhite = new THREE.MeshBasicMaterial({ color: '#ffffff' });
  this.hoverBlack = new THREE.MeshBasicMaterial({ color: '#000000' });
  this.hoverMeshes = null;
  this.pass = new THREE.Scene(); this.passCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  this.material = new THREE.ShaderMaterial({
   depthTest: false, depthWrite: false, toneMapped: false,
   uniforms: {
    beauty: { value: this.beauty.texture }, normals: { value: this.normals.texture }, depth: { value: this.beauty.depthTexture },
    mask: { value: this.mask.texture }, hoverColor: { value: new THREE.Color('#ffffff') }, hoverOn: { value: 0 },
    resolution: { value: new THREE.Vector2(1, 1) }, block: { value: 3 }, near: { value: camera.near }, far: { value: camera.far }, inverseProjection: { value: camera.projectionMatrixInverse }
   },
   vertexShader: `void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,
   fragmentShader: `
    precision highp float;
    uniform sampler2D beauty, normals, depth, mask;
    uniform vec3 hoverColor;
    uniform float hoverOn;
    uniform vec2 resolution;
    uniform float block, near, far;
    uniform mat4 inverseProjection;
    float viewDepth(vec2 uv) {
     float d = texture2D(depth, uv).x;
     return near * far / (far - d * (far - near));
    }
    float bayer(vec2 p) {
     vec2 a = mod(p, 2.0), b = mod(floor(p / 2.0), 2.0);
     float small = 2.0 * a.x + 3.0 * a.y - 4.0 * a.x * a.y;
     float large = 2.0 * b.x + 3.0 * b.y - 4.0 * b.x * b.y;
     return (4.0 * small + large + 0.5) / 16.0;
    }
    vec3 positionAt(vec2 uv) {
     vec4 p = inverseProjection * vec4(uv * 2.0 - 1.0, texture2D(depth, uv).x * 2.0 - 1.0, 1.0);
     return p.xyz / p.w;
    }
    void main() {
     vec2 p = floor(gl_FragCoord.xy / block), uv = (p + 0.5) / resolution, stepUV = 1.0 / resolution;
     float rawDepth = texture2D(depth, uv).x;
     if (rawDepth > 0.99999) { gl_FragColor = vec4(0.0,0.0,0.0,1.0); return; }
     float z = viewDepth(uv), edge = 0.0;
     vec4 surface = texture2D(normals, uv);
     vec3 normal = surface.rgb * 2.0 - 1.0;
     for (int i = 0; i < 4; i++) {
      vec2 dir = i == 0 ? vec2(1,0) : i == 1 ? vec2(-1,0) : i == 2 ? vec2(0,1) : vec2(0,-1);
      vec2 q = uv + dir * stepUV;
      float otherZ = viewDepth(q);
      vec3 otherNormal = texture2D(normals, q).rgb * 2.0 - 1.0;
      edge = max(edge, step(max(0.045, z * 0.012), otherZ - z));
      // Only compare normals within a continuous surface depth neighborhood.
      if (i == 0 || i == 2) {
       edge = max(edge, step(0.65, length(normal - otherNormal)) * (1.0 - step(z * 0.02, abs(z - otherZ))));
       edge = max(edge, step(0.002, abs(surface.a - texture2D(normals,q).a)));
      }
     }
     vec3 lit = texture2D(beauty, uv).rgb;
     float value = pow(clamp(dot(lit, vec3(0.2126,0.7152,0.0722)), 0.0, 1.0), 1.0 / 2.2);
     // Screen-space contact shading is quantized below into the same ink grid.
     // Reconstruct true view positions so only nearby surfaces cast these dots.
     vec3 origin = positionAt(uv);
     float occlusion = 0.0;
     for (int i = 0; i < 8; i++) {
      float angle = float(i) * 0.78539816;
      vec2 offset = vec2(cos(angle), sin(angle)) * stepUV * 5.0;
      vec3 delta = positionAt(uv + offset) - origin;
      float distanceToSample = length(delta);
      occlusion += max(0.0, dot(normal, delta / max(distanceToSample,0.001)) - 0.12) * (1.0 - smoothstep(0.05,0.8,distanceToSample));
     }
     value -= min(0.40, occlusion * 0.13);
     // Broad white planes, sparse halftones, checker shadows and solid ink.
     float paper = value > 0.72 ? 1.0 : value > 0.63 ? 0.875 : value > 0.54 ? 0.75 : value > 0.43 ? 0.5 : value > 0.30 ? 0.25 : 0.0;
     float pixel = step(bayer(p), paper) * (1.0 - edge);
     // White pixels inside the hovered object's mask take the accent color.
     if (hoverOn > 0.5 && pixel > 0.5 && texture2D(mask, uv).r > 0.5) {
      gl_FragColor = vec4(hoverColor, 1.0); return;
     }
     gl_FragColor = vec4(vec3(pixel), 1.0);
    }`
  });
  this.pass.add(new THREE.Mesh(new THREE.PlaneGeometry(2,2), this.material));
 }
 setSize(width, height) {
  const block = width < 600 ? 2 : 3;
  const w = Math.ceil(width / block), h = Math.ceil(height / block);
  this.beauty.setSize(w,h); this.normals.setSize(w,h); this.mask.setSize(w,h);
  this.material.uniforms.resolution.value.set(w,h); this.material.uniforms.block.value = block;
  // Prevent the ceil-to-grid padding from stretching the scene's aspect ratio.
  this.camera.aspect = w / h; this.camera.updateProjectionMatrix();
 }
 setHover(meshes, color) {
  this.hoverMeshes = meshes && meshes.length ? new Set(meshes) : null;
  if (color) this.material.uniforms.hoverColor.value.set(color);
  this.material.uniforms.hoverOn.value = this.hoverMeshes ? 1 : 0;
 }
 render() {
  const r = this.renderer, scene = this.scene;
  r.setRenderTarget(this.beauty); r.render(scene, this.camera);
  const calls = r.info.render.calls, triangles = r.info.render.triangles;
  const originals = [];
  scene.traverse(mesh => {
   if (!mesh.isMesh) return;
   if (!this.normalMaterials.has(mesh)) {
    const normal = new THREE.MeshNormalMaterial({ flatShading: true, opacity: (this.normalMaterials.size + 1) / 255 });
    // Alpha carries an object ID, allowing outlines on thin paper and notes
    // whose depth difference is too small for a geometric edge detector.
    normal.onBeforeCompile = shader => { shader.fragmentShader = shader.fragmentShader.replace('gl_FragColor.a = 1.0;', 'gl_FragColor.a = opacity;'); };
    this.normalMaterials.set(mesh, normal);
   }
   originals.push([mesh, mesh.material]); mesh.material = this.normalMaterials.get(mesh);
  });
  r.shadowMap.autoUpdate = false;
  r.setRenderTarget(this.normals); r.render(scene, this.camera);
  for (const [mesh, material] of originals) mesh.material = material;
  r.shadowMap.autoUpdate = true;
  // Hover mask pass: hovered meshes white, everything else black. Black
  // geometry still writes depth, so occluded parts never glow through.
  if (this.hoverMeshes) {
   const swapped = [];
   scene.traverse(mesh => {
    if (!mesh.isMesh) return;
    swapped.push([mesh, mesh.material]);
    mesh.material = this.hoverMeshes.has(mesh) ? this.hoverWhite : this.hoverBlack;
   });
   r.setRenderTarget(this.mask); r.render(scene, this.camera);
   for (const [mesh, material] of swapped) mesh.material = material;
  }
  r.setRenderTarget(null); r.render(this.pass, this.passCamera);
  return { drawCalls: calls, triangles, pixelSize: this.material.uniforms.block.value, renderWidth: this.beauty.width, renderHeight: this.beauty.height, style: '1-bit-live-3d' };
 }
}
