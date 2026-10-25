import { readFileSync, existsSync } from 'node:fs';
import { strict as assert } from 'node:assert';
const index=readFileSync('index.html','utf8');
const script=readFileSync('src/main.js','utf8');
const css=readFileSync('src/style.css','utf8');
for(const id of ['world','cinematic','explore','fullscreen','haze-slider','time-slider','lights-toggle','fps','altitude','loading','quality-button']) assert(index.includes('id="'+id+'"'), 'missing DOM node '+id);
for(const feature of ['WebGLRenderer','InstancedMesh','OrbitControls','requestAnimationFrame','setAnimationLoop','scene.fog','onResize','mergeGeometries','qualityOrder','__AEROVIEW_DIAGNOSTICS__']) assert(script.includes(feature), 'missing feature '+feature);
assert(css.length>1000);
console.log('PASS: UI DOM, 3D scene, animation loop, fog and responsive stylesheet');
