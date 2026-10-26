import {chromium} from 'playwright-core';
import {readFileSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,
 args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,acceptDownloads:true});
page.setDefaultTimeout(16000);
const errors=[];
page.on('pageerror',err=>errors.push(err.message));
page.on('console',msg=>{if(msg.type()==='error'&&!msg.text().includes('favicon'))errors.push(msg.text().slice(0,280));});
await page.goto(process.env.TEST_BASE_URL || 'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:30000});
await page.locator('#loading.hidden').waitFor({state:'attached',timeout:30000});
await page.locator('#earth-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weather?.loaded,{timeout:45000});
await page.waitForTimeout(3500);
const state={
 panelVisible:await page.locator('#studio').isVisible(),
 panelLayout:await page.locator('#studio').evaluate(el=>({position:getComputedStyle(el).position,width:el.getBoundingClientRect().width,top:el.getBoundingClientRect().top,display:getComputedStyle(el).display})),
 initialWeather:await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weather),
 weatherText:await page.locator('#wx-temp').innerText(),
 cloudText:await page.locator('#wx-cloud').innerText(),
 weatherStatus:await page.locator('#studio-status').innerText(),
 imgDisplayed:await page.locator('#earth-view canvas').count()>0
};
await page.screenshot({path:'weather-studio-preview.png'});
await page.locator('#studio-hour').fill('2');
state.scrubbedTime=await page.locator('#studio-hour-label').innerText();
await page.locator('[data-draw=pin]').click();
await page.mouse.click(680,480);await page.waitForTimeout(300);
state.pin=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.annotations);
await page.locator('[data-draw=line]').click();
await page.mouse.click(620,505);await page.mouse.click(675,532);
await page.locator('#draw-finish').click();
state.afterLine=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.annotations);
await page.locator('[data-draw=polygon]').click();
await page.mouse.click(600,520);await page.mouse.click(665,520);await page.mouse.click(640,575);
await page.locator('#draw-finish').click();
state.afterPolygon=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.annotations);
await page.locator('#draw-edit').click();
state.editModeEnabled=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.editMode);
await page.locator('#draw-edit').click();
state.editModeDisabled=!(await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.editMode));
if(state.afterPolygon){
 const event=page.waitForEvent('download',{timeout:16000});
 await page.locator('#draw-export').click();
 const dl=await event;
 const raw=readFileSync(await dl.path(),'utf8');
 const geo=JSON.parse(raw);
 state.geojson={count:geo.features.length,types:geo.features.map(f=>f.geometry.type)};
}
await page.locator('#draw-undo').click();
state.afterUndo=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.annotations);
await page.locator('#camera-add').click();
await page.locator('[data-city=singapore]').click();
await page.locator('#camera-add').click();
state.keyframes=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.keyframes);
await page.locator('#camera-play').click();
state.playing=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.playing);
await page.locator('#camera-stop').click();
state.stopped=!(await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.playing));
await page.locator('#draw-clear').click();
state.cleared=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().studio.annotations);
await page.locator('#studio-toggle').click();
state.collapsed=await page.locator('#studio').evaluate(el=>el.classList.contains('collapsed'));
await page.locator('#studio-toggle').click();
await page.locator('#earth-exit').click();
state.returned=await page.locator('#world').isVisible()&&!await page.locator('#studio').isVisible();
state.errors=errors;
console.log(JSON.stringify(state,null,2));
await browser.close();
if(!state.panelVisible||state.panelLayout.width>380||state.panelLayout.position!=='absolute'||state.initialWeather?.loaded!==true
 ||!state.scrubbedTime.includes('UTC')||state.pin!==1||state.afterLine!==2||state.afterPolygon!==3
 ||!state.editModeEnabled||!state.editModeDisabled||state.geojson?.count!==3||state.afterUndo!==2||state.keyframes!==2||!state.playing||!state.stopped||state.cleared!==0
 ||!state.collapsed||!state.returned||errors.length)process.exit(1);
