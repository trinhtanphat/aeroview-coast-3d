import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1,hasTouch:true,isMobile:true});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:40000});
await page.locator('#loading.hidden').waitFor({state:'attached',timeout:40000});
await page.locator('#real-3d-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:65000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().freeMap?.loaded,{timeout:35000});
const initial=await page.evaluate(()=>{
 const panel=document.querySelector('.free-city-panel');
 const r=panel.getBoundingClientRect();
 return {width:window.innerWidth,scrollWidth:document.documentElement.scrollWidth,
  left:r.left,right:r.right,bottom:r.bottom,viewportHeight:window.innerHeight,
  panelDisplayed:getComputedStyle(panel).display==='block',
  mapCanvas:!!document.querySelector('.free-city-viewport canvas')};
});
await page.locator('#free-city-mood').selectOption('golden');
await page.locator('button.free-city-focus').click();
const focused=await page.evaluate(()=>({enabled:document.body.classList.contains('free-city-focus'),mapWidth:document.querySelector('#earth-view').getBoundingClientRect().width,bodyWidth:document.body.getBoundingClientRect().width}));
await page.locator('button.free-city-focus').click();
const restored=await page.evaluate(()=>!document.body.classList.contains('free-city-focus'));
await page.locator('#earth-exit').click();
const exited=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().active===false);
const checks=[
 ['no horizontal overflow',initial.scrollWidth<=initial.width],
 ['compact panel fits screen',initial.left>=0&&initial.right<=initial.width],
 ['panel within visible height',initial.bottom<=initial.viewportHeight],
 ['map mounted',initial.mapCanvas],
 ['controls displayed',initial.panelDisplayed],
 ['focus mode toggles on/off',focused.enabled&&restored],
 ['focus preserves mobile viewer width',focused.mapWidth>=385&&focused.bodyWidth>=385],
 ['viewer closes',exited],
 ['no JS errors',!errors.length]
];
console.log(JSON.stringify({initial,checks:checks.map(([name,pass])=>({name,pass})),errors},null,2));
await browser.close();
if(checks.some(x=>!x[1]))process.exit(1);
