import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
 headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
page.setDefaultTimeout(20000);
const errors=[],weatherRequests=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(r.url().startsWith('https://api.open-meteo.com/v1/ecmwf'))weatherRequests.push(r.url())});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:35000});
await page.locator('#loading.hidden').waitFor();
await page.locator('#earth-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weather?.loaded===true,{timeout:60000});
const initially=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
await page.locator('#grid-sample').click();
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weatherGrid?.stations===9,{timeout:60000});
await page.locator('#grid-layer').selectOption('wind');
await page.locator('#grid-tracers').check();
const tracerStart=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid.tracers);
await page.waitForTimeout(1450);
const tracerLater=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid.tracers);
await page.locator('#grid-tracers').uncheck();
const tracerStopped=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().weatherGrid.tracers);
const requestsBeforeTimeline=weatherRequests.length;
await page.locator('#timeline-speed').selectOption('450');
await page.locator('#timeline-loop').uncheck();
await page.locator('#timeline-play').click();
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().playback?.hour>=2,{timeout:10000});
const playing=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
await page.locator('#timeline-play').click();
const paused=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
await page.locator('#studio-hour').fill('23');
await page.locator('#timeline-play').click();
await page.waitForTimeout(850);
const exhausted=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
await page.locator('#timeline-reset').click();
const reset=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
const requestsAfterTimeline=weatherRequests.length;
await page.locator('#grid-clear').click();
await page.locator('#earth-exit').click();
const afterExit=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__());
const checks=[
 ['weather loaded',initially.weather?.loaded===true],
 ['9 stations sampled',initially.mode==='atlas'],
 ['24 active particles',tracerStart.active&&tracerStart.particles===24],
 ['tracers have >=5 real stations',tracerStart.stations>=5],
 ['tracer frame advances',tracerLater.updates>tracerStart.updates],
 ['tracers stop when unchecked',!tracerStopped.active&&tracerStopped.particles===0],
 ['forecast player began',playing.playback?.playing===true],
 ['point forecast time advanced',!!playing.weather?.time&&playing.playback?.hour>=2],
 ['manual pause',paused.playback?.playing===false],
 ['end-of-range auto-stops when loop disabled',exhausted.playback?.playing===false&&exhausted.playback?.hour===23],
 ['restart back to hour zero',reset.playback?.hour===0],
 ['timeline no new weather requests',requestsBeforeTimeline===requestsAfterTimeline],
 ['exit releases all modules',afterExit.active===false],
 ['no JS pageerrors',errors.length===0]
];
const failures=checks.filter(([name,ok])=>!ok).map(([name])=>name);
console.log(JSON.stringify({
 tracerStart,tracerLater,tracerStopped,playing:{playback:playing.playback,weatherTime:playing.weather?.time},
 paused:paused.playback,exhausted:exhausted.playback,reset:reset.playback,
 requestsBeforeTimeline,requestsAfterTimeline,errors,checks:checks.map(([n,ok])=>({name:n,pass:ok})),
 failures
},null,2));
await browser.close();
if(failures.length)process.exit(1);
