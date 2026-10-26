import {chromium} from 'playwright-core';
import {readFileSync,writeFileSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1,acceptDownloads:true});
page.setDefaultTimeout(20000);
const errors=[],paidRequests=[],browserErrors=[];
page.on('console',m=>{if(m.type()==='error')browserErrors.push(m.text().slice(0,400));});
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(/api\.cesium\.com|assets\.cesium\.com|tile\.googleapis\.com/.test(r.url()))paidRequests.push('paid provider request');});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:35000});
await page.locator('#loading.hidden').waitFor({state:'attached'});
await page.locator('#real-3d-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:25000}).catch(async e=>{
 console.log('EARTH_LAUNCH_DEBUG',JSON.stringify(await page.evaluate(()=>({message:document.querySelector('#earth-message')?.textContent,modal:document.querySelector('#earth-dialog')?.hidden,selected:document.querySelector('input[name="earth-layer"]:checked')?.value}))),JSON.stringify(errors),JSON.stringify(browserErrors));throw e;
});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().freeMap?.tilesLoaded && window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().freeMap?.visibleBuildings>20,{timeout:60000});
await page.locator('#free-city-record').evaluate((el,d)=>el.dataset.duration=String(d),process.env.SAVE_V13_PREVIEW==='1'?7:4);
const downloadEvent=page.waitForEvent('download',{timeout:24000}).catch(()=>null);
console.log('RECORD_CAPS',JSON.stringify(await page.evaluate(()=>({recorder:typeof window.MediaRecorder,stream:typeof HTMLCanvasElement.prototype.captureStream,canvas:document.querySelector('.free-city-viewport canvas')?.getBoundingClientRect().toJSON(),tiles:window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.tilesLoaded,features:window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.visibleBuildings}))));
await page.locator('#free-city-record').click();
await page.waitForTimeout(1300);
console.log('VIDEO_DEBUG',JSON.stringify(await page.evaluate(()=>({v:window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap?.visuals?.video,status:document.querySelector('.free-city-status')?.textContent,record:document.querySelector('#free-city-record')?.textContent}))));
const active=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.visuals.video);
const videoDownload=await downloadEvent;
if(!videoDownload){console.log('NO_VIDEO',JSON.stringify(await page.evaluate(()=>({video:window.__AEROVIEW_EARTH_DIAGNOSTICS__()?.freeMap?.visuals?.video,status:document.querySelector('.free-city-status')?.textContent}))));await browser.close();process.exit(2);}
const data=readFileSync(await videoDownload.path());
if(process.env.SAVE_V13_PREVIEW==='1'&&!process.env.TEST_BASE_URL)writeFileSync('public/demo-flight-v13.webm',data);
const saved=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap.visuals.video);
await page.locator('#earth-exit').click();
const closed=await page.evaluate(()=>!window.__AEROVIEW_EARTH_DIAGNOSTICS__().active);
const checks=[
 ['MediaRecorder supported',active.supported],
 ['recording starts on explicit click',active.recording],
 ['WebM filename',videoDownload.suggestedFilename()==='aeroview-geographic-flight-attributed.webm'],
 ['WebM EBML header',data.subarray(0,4).equals(Buffer.from([0x1a,0x45,0xdf,0xa3]))],
 ['video not empty',data.length>15000],
 ['recording stopped and saved',saved.recorded===1&&!saved.recording],
 ['viewer closes cleanly',closed],
 ['no paid provider calls',paidRequests.length===0],
 ['zero page errors',errors.length===0]
];
console.log(JSON.stringify({checks:checks.map(([name,ok])=>({name,ok})),fileBytes:data.length,active,saved,errors,failed:checks.filter(x=>!x[1]).map(x=>x[0])},null,2));
await browser.close();
if(checks.some(x=>!x[1]))process.exit(1);
