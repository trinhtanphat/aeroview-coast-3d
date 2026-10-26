import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
const errors=[],paid=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(/api\.cesium\.com|assets\.cesium\.com|tile\.googleapis\.com/.test(r.url()))paid.push(r.url().slice(0,80))});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:40000});
await page.locator('#loading.hidden').waitFor({state:'attached'});
await page.locator('#real-3d-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:65000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().freeMap?.visibleBuildings>20,{timeout:65000});
const initial=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('#free-city-ocean').uncheck();
await page.waitForTimeout(500);
const off=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('button.free-city-focus').click();
if(!process.env.TEST_BASE_URL)await page.screenshot({path:'v13-water-off.png'});
await page.locator('button.free-city-focus').click();
await page.locator('#free-city-ocean').check();
await page.waitForTimeout(1000);
const on=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('button.free-city-focus').click();
if(!process.env.TEST_BASE_URL)await page.screenshot({path:'v13-water-on.png'});
await page.locator('button.free-city-focus').click();
await page.locator('[data-free-view=coast]').click();
await page.waitForTimeout(3300);
const coast=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('button.free-city-focus').click();
if(!process.env.TEST_BASE_URL)await page.screenshot({path:'v13-coast.png'});
await page.locator('button.free-city-focus').click();
await page.locator('#free-city-mood').selectOption('golden');
await page.waitForTimeout(600);
const golden=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('button.free-city-focus').click();
if(!process.env.TEST_BASE_URL)await page.screenshot({path:'v13-golden-coast.png'});
await page.locator('button.free-city-focus').click();
await page.locator('#free-city-ocean').uncheck();
const restore=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('#earth-exit').click();
const exited=await page.evaluate(()=>!window.__AEROVIEW_EARTH_DIAGNOSTICS__().active);
const checks=[
 ['city buildings loaded',initial.visibleBuildings>20],
 ['water detail default enabled',initial.visuals.oceanDetail],
 ['water detail can be disabled',!off.visuals.oceanDetail],
 ['water detail can be enabled',on.visuals.oceanDetail],
 ['water mode keeps building features',on.visibleBuildings>20],
 ['coastal camera still active',coast.pitch>50],
 ['golden coastal mood',golden.visuals.mood==='golden'&&golden.visuals.oceanDetail],
 ['water layer restores',!restore.visuals.oceanDetail],
 ['view closes cleanly',exited],
 ['no paid tile requests',paid.length===0],
 ['zero javascript errors',errors.length===0]
];
console.log(JSON.stringify({checks:checks.map(([name,pass])=>({name,pass})),failed:checks.filter(x=>!x[1]).map(x=>x[0]),initial:initial.visibleBuildings,off:off.visibleBuildings,on:on.visibleBuildings,coast:{zoom:coast.zoom,pitch:coast.pitch,buildings:coast.visibleBuildings},golden:golden.visuals.mood,errors},null,2));
await browser.close();
if(checks.some(x=>!x[1]))process.exit(1);
