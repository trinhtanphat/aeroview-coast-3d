import {chromium} from 'playwright-core';
import {readFileSync,statSync} from 'node:fs';
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true,
 args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-gpu-sandbox','--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,acceptDownloads:true});
page.setDefaultTimeout(18000);
const errors=[],requests=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('request',r=>{if(r.url().startsWith('https://api.open-meteo.com/v1/ecmwf'))requests.push(r.url());});
await page.goto(process.env.TEST_BASE_URL||'http://127.0.0.1:5188/',{waitUntil:'networkidle',timeout:30000});
await page.locator('#loading.hidden').waitFor();
await page.locator('#earth-open').click();
await page.locator('#earth-launch').click();
await page.locator('#earth-hud').waitFor({state:'visible',timeout:75000});
await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weather?.loaded===true,{timeout:45000});
await page.locator('#grid-sample').click();
let gridReady=false;
try{await page.waitForFunction(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weatherGrid?.stations===9,{timeout:60000});gridReady=true;}catch{}
const grid=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weatherGrid);
const gridStatus=await page.locator('#grid-status').innerText();
await page.locator('#grid-layer').selectOption('rain');
const rain=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weatherGrid.layer);
await page.locator('#studio-hour').fill('1');
const timeChanged=await page.locator('#studio-hour-label').innerText();
const requestCountBefore=requests.length;
await page.locator('#grid-fit').click();
await page.waitForTimeout(9000);
const legend=await page.locator('#grid-legend').isVisible();
await page.screenshot({path:'weather-grid-preview.png'});
await page.locator('#grid-clear').click();
const cleared=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__?.().weatherGrid.stations);
const buildingFixture={
 type:'FeatureCollection',features:[
  {type:'Feature',properties:{name:'TEST TOWER',height:48},geometry:{
   type:'Polygon',coordinates:[[[153.425,-28.001],[153.426,-28.001],[153.426,-28.002],[153.425,-28.002],[153.425,-28.001]]]}},
  {type:'Feature',properties:{name:'TEST LEVELS','building:levels':7},geometry:{
   type:'Polygon',coordinates:[[[153.430,-28.004],[153.431,-28.004],[153.431,-28.005],[153.430,-28.005],[153.430,-28.004]]]}}
 ]
};
await page.locator('#buildings-file').setInputFiles({name:'test-buildings.geojson',mimeType:'application/geo+json',buffer:Buffer.from(JSON.stringify(buildingFixture))});
await page.waitForTimeout(350);
const buildingsLoaded=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__()?.buildings);
await page.locator('#buildings-toggle').click();
const buildingsHidden=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__()?.buildings.visible===false);
await page.locator('#buildings-toggle').click();
const buildingsShown=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__()?.buildings.visible===true);
await page.locator('#buildings-file').setInputFiles({name:'bad.geojson',mimeType:'application/geo+json',buffer:Buffer.from('{"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[999]]}}]}')});
await page.waitForTimeout(200);
const buildingsAfterBad=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__()?.buildings.count);
await page.locator('#buildings-clear').click();
const buildingsCleared=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__()?.buildings.count);

await page.locator('[data-draw=pin]').click();
await page.mouse.click(700,500);
await page.locator('#camera-add').click();
const before=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio);
const dlWait=page.waitForEvent('download',{timeout:18000});
await page.locator('#project-save').click();
const dl=await dlWait;
const buf=readFileSync(await dl.path());
const project=JSON.parse(buf.toString('utf8'));
await page.locator('#project-clear').click();
const countAfterClear=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio.annotations);
await page.locator('#project-file').setInputFiles({name:'aeroview-project.json',mimeType:'application/json',buffer:buf});
await page.waitForTimeout(400);
const restored=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio);
const response=await page.locator('#project-status').innerText();
const bad=JSON.stringify({...project,annotations:[{type:'pin',coordinates:[999,1]}]});
await page.locator('#project-file').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from(bad)});
await page.waitForTimeout(200);
const afterBad=await page.evaluate(()=>window.__AEROVIEW_EARTH_DIAGNOSTICS__().studio);
const rejectText=await page.locator('#project-status').innerText();
await page.locator('#earth-exit').click();
const result={
 gridReady,stations:grid?.stations,layer:rain,
 legend,gridStatus,forecastHour:timeChanged,gridCleared:cleared,buildingsLoaded,buildingsHidden,buildingsShown,buildingsAfterBad,buildingsCleared,
 weatherRequests:requests.length,project:{schema:project.schema,annotations:project.annotations.length,keyframes:project.keyframes.length,bytes:buf.length},before,countAfterClear,restored,response,afterBad,rejectText,errors
};
console.log(JSON.stringify(result,null,2));
await browser.close();
if(!gridReady||grid.stations!==9||rain!=='rain'||!legend||cleared!==0||project.schema!=='aeroview-project'
 ||project.annotations.length!==1||project.keyframes.length!==1||buildingsLoaded.count!==2||!buildingsHidden||!buildingsShown||buildingsAfterBad!==2||buildingsCleared!==0||countAfterClear!==0
 ||restored.annotations!==1||restored.keyframes!==1||afterBad.annotations!==1||!rejectText.includes('Cannot open project')||errors.length)process.exit(1);
