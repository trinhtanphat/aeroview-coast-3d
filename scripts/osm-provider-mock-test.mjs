import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1});
const errors=[],ionRequests=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(/api\.cesium\.com|assets\.cesium\.com/.test(r.url()))ionRequests.push('unexpected ion request');});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:30000});
await page.locator('#loading.hidden').waitFor({state:'attached'});
await page.locator('#earth-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});
await page.locator('#earth-exit').click();
const monkey=await page.evaluate(()=>{
 const C=window.Cesium;
 const origTerrain=C.createWorldTerrainAsync,origBuildings=C.createOsmBuildingsAsync;
 window.__osmTester={countTerrain:0,countBuildings:0,oldToken:C.Ion.defaultAccessToken,origTerrain,origBuildings,originalNamespace:C};
 const terrain=async ()=>{window.__osmTester.countTerrain++;return new C.EllipsoidTerrainProvider();};
 const buildings=async ()=>{window.__osmTester.countBuildings++;return new C.PrimitiveCollection();};
 window.Cesium={...C,createWorldTerrainAsync:terrain,createOsmBuildingsAsync:buildings};
 return {overriddenTerrain:window.Cesium.createWorldTerrainAsync===terrain,overriddenBuildings:window.Cesium.createOsmBuildingsAsync===buildings};
});
if(!monkey.overriddenTerrain||!monkey.overriddenBuildings)throw new Error('Cesium functions cannot be mocked: '+JSON.stringify(monkey));
await page.locator('#earth-open').click();
await page.locator('input[name=earth-layer][value=osm3d]').check();
await page.locator('#earth-osm-key').fill('eyJvalid-looking-in-test-only-aaaaaaaaaaa');
await page.locator('#earth-osm-confirm').check();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:45000});
const outcome=await page.evaluate(()=>({
 mode:window.__AEROVIEW_EARTH_DIAGNOSTICS__().mode,
 counts:{terrain:window.__osmTester.countTerrain,buildings:window.__osmTester.countBuildings},
 status:document.querySelector('#earth-status').textContent,
 studioCollapsed:document.querySelector('#studio').classList.contains('collapsed'),
 tokenIsTestOnly:window.Cesium.Ion.defaultAccessToken==='eyJvalid-looking-in-test-only-aaaaaaaaaaa'
}));
await page.locator('#earth-exit').click();
const restored=await page.evaluate(()=>{
 const C=window.Cesium;
 const t=C.Ion.defaultAccessToken===window.__osmTester.oldToken;
 window.Cesium=window.__osmTester.originalNamespace;
 return {tokenRestored:t,active:window.__AEROVIEW_EARTH_DIAGNOSTICS__().active};
});
const checks=[
 ['mock 3D terrain initialized',outcome.counts.terrain===1],
 ['mock OSM buildings initialized',outcome.counts.buildings===1],
 ['real-3D mode selected',outcome.mode==='osm3d'],
 ['credits-aware UI identifies provider',outcome.status.includes('CESIUM OSM')],
 ['3D technical panel initially collapsed',outcome.studioCollapsed],
 ['token stored for selected session only',outcome.tokenIsTestOnly],
 ['original ion token restored on exit',restored.tokenRestored],
 ['viewer stopped',!restored.active],
 ['no live ion requests from mocked path',ionRequests.length===0],
 ['no JS errors',errors.length===0]
];
console.log(JSON.stringify({checks:checks.map(([name,pass])=>({name,pass})),failures:checks.filter(x=>!x[1]).map(x=>x[0]),errors},null,2));
await browser.close();
if(checks.some(x=>!x[1]))process.exit(1);
