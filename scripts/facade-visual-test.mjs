import {chromium} from 'playwright-core';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},acceptDownloads:true});
const errors=[],warnings=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')warnings.push(m.text().slice(0,180))});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:35000});
await page.locator('#loading.hidden').waitFor({state:'attached'});
await page.locator('#real-3d-open').click();await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:60000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().freeMap?.visibleBuildings>30,{timeout:60000});
await page.waitForTimeout(1700);
const initial=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('#free-city-facades').uncheck();
await page.waitForTimeout(700);
const before=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('button.free-city-focus').click();
await page.screenshot({path:'v12-clean.png'});
await page.locator('button.free-city-focus').click();
await page.locator('#free-city-facades').check();
await page.waitForTimeout(3300);
const patterned=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('button.free-city-focus').click();
await page.screenshot({path:'v12-facades.png'});
await page.locator('button.free-city-focus').click();
await page.locator('#free-city-facades').uncheck();
await page.waitForTimeout(700);
const restored=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().freeMap);
await page.locator('#earth-exit').click();
const closed=await page.evaluate(()=>!window.__AEROVIEW_EARTH_DIAGNOSTICS__().active);
const checks=[
 ['facade material enabled by default',initial.visuals.facadeDetail],
 ['real buildings loaded',before.visibleBuildings>30],
 ['facade texture enabled',patterned.visuals.facadeDetail],
 ['buildings still rendered',patterned.visibleBuildings>30],
 ['facade texture disabled',!restored.visuals.facadeDetail],
 ['buildings remain after reset',restored.visibleBuildings>30],
 ['map closes',closed],
 ['no JS errors',errors.length===0],
 ['no console errors',warnings.length===0]
];
console.log(JSON.stringify({checks:checks.map(([label,pass])=>({label,pass})),failed:checks.filter(c=>!c[1]).map(c=>c[0]),before:before.visibleBuildings,patterned:patterned.visibleBuildings,restored:restored.visibleBuildings,errors,warnings},null,2));
await browser.close();if(checks.some(c=>!c[1]))process.exit(1);
