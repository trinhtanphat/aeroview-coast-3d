import {chromium} from 'playwright-core';
import {readFileSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1,acceptDownloads:true});
page.setDefaultTimeout(25000);
const errors=[],paid=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(/api\.cesium\.com|assets\.cesium\.com|tile\.googleapis\.com/.test(r.url()))paid.push(r.url());});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:35000});
await page.locator('#loading.hidden').waitFor({state:'attached'});
await page.locator('#real-3d-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:70000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().freeMap?.visibleBuildings>20,{timeout:55000});
await page.locator('#free-camera-a').click();
const afterA=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.customCamera);
await page.locator('[data-free-view=overhead]').click();
await page.waitForTimeout(2550);
const pitchB=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.pitch);
await page.locator('#free-camera-b').click();
const ready=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.customCamera);
await page.locator('#free-record-length').selectOption('6');
const selected=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.visuals.clipLength);
await page.locator('[data-free-view=skyline]').click();
await page.waitForTimeout(2450);
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.visibleBuildings>10,{timeout:15000});
await page.locator('#free-city-record').evaluate(e=>{e.dataset.duration='4';});
const dl=page.waitForEvent('download',{timeout:22000});
await page.locator('#free-city-record').click();
await page.waitForTimeout(1300);
const during=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
const downloaded=await dl;
const bytes=readFileSync(await downloaded.path());
const post=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('#free-camera-clear').click();
const cleared=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.customCamera);
await page.locator('#free-camera-a').click();
await page.locator('[data-city=singapore]').click();
const cityClear=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.customCamera);
await page.locator('#earth-exit').click();
const closed=await page.evaluate(()=>!window.__AEROVIEW_EARTH_DIAGNOSTICS__().active);
const checks=[
 ['set start only',afterA.start&&!afterA.end],
 ['overhead is low pitch',pitchB<24],
 ['both camera points saved',ready.start&&ready.end],
 ['clip length UI selection',selected===6],
 ['recording custom route',during.flightRunning&&during.customCamera.start&&during.customCamera.end],
 ['custom animation progressed toward B',during.pitch<62],
 ['video valid WebM EBML',bytes.length>15000&&bytes.subarray(0,4).equals(Buffer.from([0x1a,0x45,0xdf,0xa3]))],
 ['recording ended',!post.visuals.video.recording&&post.visuals.video.recorded===1],
 ['clear resets both points',!cleared.start&&!cleared.end],
 ['city change clears stale camera',!cityClear.start&&!cityClear.end],
 ['viewer closed',closed],
 ['no paid requests',paid.length===0],
 ['no JS errors',errors.length===0]
];
const failed=checks.filter(([,pass])=>!pass).map(([label])=>label);
console.log(JSON.stringify({checks:checks.map(([label,pass])=>({label,pass})),failed,pitchB,
 during:{pitch:during.pitch,customCamera:during.customCamera,flightRunning:during.flightRunning},
 post:{pitch:post.pitch,video:post.visuals.video},bytes:bytes.length,errors},null,2));
await browser.close();
if(failed.length)process.exit(1);
