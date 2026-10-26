import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
page.setDefaultTimeout(20000);
const errors=[],cycles=[];
page.on('pageerror',e=>errors.push(e.message));
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:30000});
await page.locator('#loading.hidden').waitFor();
for(let i=0;i<2;i++){
 await page.locator('#earth-open').click();
 await page.locator('#earth-launch').click();
 await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});
 await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weather?.loaded===true,{timeout:60000});
 await page.locator('#camera-add').click();
 const afterAdd=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio.keyframes);
 await page.locator('#camera-back').click();
 const afterBack=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio.keyframes);
 await page.locator('[data-draw=pin]').click();
 await page.mouse.click(730,505);
 const beforeClear=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio.annotations);
 await page.locator('#draw-clear').click();
 const afterClear=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio.annotations);
 await page.locator('#timeline-reset').click();
 const playback=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().playback);
 await page.locator('#earth-exit').click();
 const closed=await page.evaluate(()=>!window.__AEROVIEW_EARTH_DIAGNOSTICS__().active);
 cycles.push({afterAdd,afterBack,beforeClear,afterClear,playback,closed});
}
console.log(JSON.stringify({cycles,errors},null,2));
await browser.close();
if(errors.length||cycles.some(c=>c.afterAdd!==1||c.afterBack!==0||c.beforeClear!==1||c.afterClear!==0||c.playback.hour!==0||!c.closed))process.exit(1);
