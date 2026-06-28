var THREE=window.THREE;
if(!THREE){document.querySelector('#webglError')?.classList.add('show');throw new Error('Three.js did not load')}
const defaultDriveCar={brand:'Aston Martin',name:'Valkyrie',top:250,hp:1160,zero:2.5,handling:99,braking:99,weight:'2,271 lb',drive:'RWD'};
function loadSelectedCar(){
 try{
  const saved=JSON.parse(localStorage.getItem('infiniteCarsDrive')||'null');
  return saved&&typeof saved==='object'?{...defaultDriveCar,...saved}:defaultDriveCar;
 }catch(error){
  localStorage.removeItem('infiniteCarsDrive');
  return defaultDriveCar;
 }
}
const selected=loadSelectedCar();
const num=(v,fallback)=>{const n=parseFloat(v);return Number.isFinite(n)&&n>0?n:fallback};
const rawWeight=String(selected.weight||'').replace(/,/g,''),weightValue=num(rawWeight,null),weightIsKg=/kg/i.test(String(selected.weight||''));
const specs={topMph:num(selected.top,155),powerHp:num(selected.hp,300),zero:num(selected.zero,5.5),handling:num(selected.handling,75),braking:num(selected.braking,75),massKg:weightValue?weightValue*(weightIsKg?1:.453592):1450,drive:selected.drive||'RWD'};
function getCoins(){return Math.max(0,Math.floor(Number(localStorage.getItem('infiniteCarsCoins')||'0')||0))}
function setCoins(value){localStorage.setItem('infiniteCarsCoins',String(Math.max(0,Math.floor(value))))}
function getAchievements(){try{return JSON.parse(localStorage.getItem('infiniteCarsAchievements')||'{}')}catch(error){return{}}}
function saveAchievements(items){localStorage.setItem('infiniteCarsAchievements',JSON.stringify(items))}
function achievementCarKey(){return `${selected.brand||'Unknown'}|${selected.name||'Unknown'}`}
function canDoAchievement(key){
 const speedReq={hit_60_mph:60,hit_150_mph:150,hit_200_mph:200}[key];
 return !speedReq||specs.topMph>=speedReq;
}
function rewardToast(message){
 let toast=document.querySelector('#rewardToast');
 if(!toast){
  toast=document.createElement('div');toast.id='rewardToast';toast.style.cssText='position:fixed;right:22px;bottom:24px;z-index:30;border:1px solid rgba(255,176,46,.65);background:rgba(12,14,15,.94);color:#ffb02e;padding:13px 16px;font:900 12px Inter;letter-spacing:1px;box-shadow:0 16px 42px #0008;transform:translateY(20px);opacity:0;transition:.25s;pointer-events:none;text-transform:uppercase';document.body.appendChild(toast);
 }
 toast.textContent=message;toast.style.opacity='1';toast.style.transform='translateY(0)';
 clearTimeout(toast._timer);toast._timer=setTimeout(()=>{toast.style.opacity='0';toast.style.transform='translateY(20px)'},2600);
}
function awardInficoins(reason){setCoins(getCoins()+100);rewardToast(`+100 INFICOINS · ${reason}`)}
function completeAchievement(key,label){
 if(!canDoAchievement(key))return;
 const achievements=getAchievements(),carKey=achievementCarKey();achievements[carKey]||={};
 if(achievements[carKey][key])return;
 achievements[carKey][key]={label,earnedAt:Date.now()};saveAchievements(achievements);awardInficoins(label);
}
const cpuCatalog={
 "Abarth":[carData("695 Competizione",140,180,6.7,72,74,"FWD","2,579 lb"),carData("124 Spider",144,164,6.8,82,78,"RWD","2,477 lb")],
 "Acura":[carData("NSX Type S",191,600,2.9,91,91,"AWD","3,878 lb"),carData("Integra Type S",167,320,5.1,84,82,"FWD","3,219 lb")],
 "Alfa Romeo":[carData("Giulia Quadrifoglio",191,505,3.8,89,88,"RWD","3,806 lb"),carData("33 Stradale",207,620,3.0,93,93,"RWD","3,307 lb")],
 "Aston Martin":[carData("Valkyrie",250,1160,2.5,99,99,"RWD","2,271 lb"),carData("Valhalla",217,998,2.5,96,96,"AWD","3,417 lb"),carData("DB12",202,671,3.5,86,88,"RWD","3,715 lb")],
 "Audi":[carData("R8 GT",199,602,3.4,93,92,"RWD","3,516 lb"),carData("RS 6 Avant",190,621,3.3,83,91,"AWD","4,608 lb")],
 "BMW":[carData("M3 CS",188,543,3.2,91,91,"AWD","3,915 lb"),carData("M5",190,717,3.4,84,94,"AWD","5,390 lb")],
 "Bugatti":[carData("Chiron Super Sport",273,1578,2.4,91,99,"AWD","4,398 lb")],
 "Chevrolet":[carData("Corvette Z06",195,670,2.6,95,93,"RWD","3,434 lb"),carData("Camaro ZL1",198,650,3.5,86,86,"RWD","3,907 lb")],
 "Dodge":[carData("Challenger SRT Demon 170",215,1025,1.7,70,82,"RWD","4,280 lb")],
 "Ferrari":[carData("SF90 XX Stradale",199,1016,2.3,98,99,"AWD","3,439 lb"),carData("812 Competizione",211,819,2.9,93,95,"RWD","3,278 lb")],
 "Ford":[carData("Mustang GTD",202,815,3.0,96,95,"RWD","3,600 lb"),carData("GT",216,660,3.0,94,94,"RWD","3,054 lb")],
 "Honda":[carData("Civic Type R",171,315,4.9,91,84,"FWD","3,188 lb"),carData("S2000",150,237,5.4,90,74,"RWD","2,855 lb")],
 "Koenigsegg":[carData("Jesko Absolut",330,1600,2.5,97,99,"RWD","3,064 lb")],
 "Lamborghini":[carData("Revuelto",217,1001,2.5,96,98,"AWD","3,907 lb"),carData("Huracán STO",193,631,3.0,97,94,"RWD","2,952 lb")],
 "Lucid":[carData("Air Sapphire",205,1234,1.9,86,96,"AWD","5,336 lb")],
 "Mazda":[carData("RX-7 Spirit R",155,276,4.8,91,75,"RWD","2,800 lb"),carData("MX-5 Miata",135,181,5.7,89,72,"RWD","2,341 lb")],
 "McLaren":[carData("750S",206,740,2.7,97,96,"RWD","3,062 lb")],
 "Nissan":[carData("GT-R Nismo",196,600,2.5,91,93,"AWD","3,865 lb"),carData("Z Nismo",155,420,4.3,83,83,"RWD","3,704 lb")],
 "Porsche":[carData("911 GT3 RS",184,518,3.0,100,96,"RWD","3,268 lb"),carData("Taycan Turbo GT",190,1019,2.1,92,99,"AWD","5,101 lb")],
 "Rimac":[carData("Nevera",258,1914,1.7,95,100,"AWD","4,740 lb")],
 "Tesla":[carData("Model S Plaid",200,1020,1.99,82,93,"AWD","4,766 lb")],
 "Toyota":[carData("GR Supra 3.0",155,382,3.9,87,85,"RWD","3,400 lb"),carData("GR86",140,228,5.4,90,76,"RWD","2,811 lb")]
};
function carData(name,top,hp,zero,handling,braking,drive,weight){return{name,top,hp,zero,handling,braking,drive,weight,brand:""}}
function addCpuCar(brand,car){
 cpuCatalog[brand] ||= [];
 const existing=new Set(cpuCatalog[brand].map(c=>c.name.toLowerCase()));
 if(!existing.has(car.name.toLowerCase()))cpuCatalog[brand].push(car);
}
function addGarageShowcaseCars(){
 const garageCars={
  "Alpine":[carData("A110 R",177,300,3.9,94,87,"RWD","2,385 lb")],
  "Bentley":[carData("Continental GT Speed",208,650,3.5,78,91,"AWD","5,011 lb")],
  "Cadillac":[carData("CT5-V Blackwing",205,668,3.4,88,90,"RWD","4,123 lb")],
  "Genesis":[carData("G70 3.3T",168,365,4.5,80,82,"AWD","3,887 lb")],
  "Hyundai":[carData("Ioniq 5 N",162,641,3.3,88,91,"AWD","4,861 lb")],
  "Jaguar":[carData("F-Type R 75",186,575,3.5,84,86,"AWD","3,935 lb")],
  "Lexus":[carData("LFA",202,552,3.6,92,90,"RWD","3,483 lb")],
  "Lotus":[carData("Emira V6",180,400,4.2,93,84,"RWD","3,212 lb")],
  "Maserati":[carData("MC20",202,621,2.9,92,92,"RWD","3,307 lb")],
  "Mercedes-AMG":[carData("AMG ONE",219,1049,2.9,99,99,"AWD","3,737 lb"),carData("GT 63 S E Performance",198,805,2.7,88,96,"AWD","4,674 lb")],
  "Pagani":[carData("Utopia",217,852,2.8,96,98,"RWD","2,822 lb")],
  "Subaru":[carData("WRX STI S209",162,341,4.4,89,84,"AWD","3,485 lb")],
  "Volkswagen":[carData("Golf R",155,315,4.5,85,84,"AWD","3,481 lb")],
  "Volvo":[carData("S60 Polestar Engineered",155,455,4.1,79,88,"AWD","4,442 lb")]
 };
 Object.entries(garageCars).forEach(([brand,cars])=>cars.forEach(car=>addCpuCar(brand,car)));
}
function mergeGarageArchive(){
 Object.entries(window.archiveCatalog||{}).forEach(([brand,names])=>{
  cpuCatalog[brand] ||= [];
  const existing=new Set(cpuCatalog[brand].map(c=>c.name.toLowerCase()));
  names.split('|').forEach(name=>{const clean=name.trim();if(clean&&!existing.has(clean.toLowerCase())){cpuCatalog[brand].push(carData(clean,null,null,null,null,null,'—','—'));existing.add(clean.toLowerCase())}});
  cpuCatalog[brand].sort((a,b)=>(a.name||'').localeCompare(b.name||''));
 });
}
addGarageShowcaseCars();
mergeGarageArchive();
function fullCar(brand,car){return{...car,brand}}
function specsFor(car){
 if(String(car.brand||'').toLowerCase()===String(selected.brand||'').toLowerCase()&&String(car.name||'').toLowerCase()===String(selected.name||'').toLowerCase())return{...specs};
 const raw=String(car.weight||'').replace(/,/g,''),weight=num(raw,null),isKg=/kg/i.test(String(car.weight||''));
 return{topMph:num(car.top,155),powerHp:num(car.hp,300),zero:num(car.zero,5.5),handling:num(car.handling,75),braking:num(car.braking,75),massKg:weight?weight*(isKg?1:.453592):1450,drive:car.drive||'RWD'};
}
const cpuPhotoCache=new Map(),localPhotoOverrides={
 "Abarth 695 Competizione":{src:"assets/abarth-695-competizione.png",credit:"CUSTOM GARAGE IMAGE"},
 "Abarth 695":{src:"assets/abarth-695.png",credit:"CUSTOM GARAGE IMAGE"},
 "Abarth 124 Spider":{src:"assets/abarth-124-spider.png",credit:"CUSTOM GARAGE IMAGE"},
 "Abarth 595 Competizione":{src:"assets/abarth-595-competizione.png",credit:"CUSTOM GARAGE IMAGE"},
 "Abarth 595":{src:"assets/abarth-595.png",credit:"CUSTOM GARAGE IMAGE"},
 "Abarth 500":{src:"assets/abarth-500.png",credit:"CUSTOM GARAGE IMAGE"},
 "Abarth Punto Evo":{src:"assets/abarth-punto-evo.png",credit:"CUSTOM GARAGE IMAGE"},
 "Abarth Ritmo 130 TC":{src:"assets/abarth-ritmo-130-tc.png",credit:"CUSTOM GARAGE IMAGE"},
 "Acura NSX Type S":{src:"assets/acura-nsx.png",credit:"CUSTOM GARAGE IMAGE"},
 "Acura Integra Type S":{src:"assets/acura-integra-type-s.png",credit:"CUSTOM GARAGE IMAGE"},
 "Alfa Romeo Giulia Quadrifoglio":{src:"assets/alfa-romeo-giulia-quadrifoglio.png",credit:"CUSTOM GARAGE IMAGE"},
 "Lucid Air Sapphire":{src:"assets/lucid-air-sapphire.png",credit:"CUSTOM GARAGE IMAGE"}
};
const noImageSubjects=new Set(['ac10245']);
function normalizedSubjectKey(value){return String(value||'').toLowerCase().replace(/[^a-z0-9]/g,'')}
function createImageDataUrl(label,brand){
 const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');canvas.width=800;canvas.height=450;
 const g=ctx.createLinearGradient(0,0,800,450);g.addColorStop(0,'#111820');g.addColorStop(1,'#050607');ctx.fillStyle=g;ctx.fillRect(0,0,800,450);
 ctx.fillStyle='#ffb02e';ctx.font='800 42px Arial';ctx.textAlign='center';ctx.fillText(brand.toUpperCase(),400,178);
 ctx.fillStyle='#ffffff';ctx.font='800 58px Arial';ctx.fillText(label.toUpperCase().slice(0,26),400,250);
 ctx.strokeStyle='#ffffff55';ctx.lineWidth=8;ctx.beginPath();ctx.roundRect?.(170,295,460,70,35);ctx.stroke();
 return canvas.toDataURL('image/png');
}
async function lookupCpuWikipediaPhoto(subject){
 const params=new URLSearchParams({action:'query',format:'json',origin:'*',generator:'search',gsrsearch:`${subject} automobile`,gsrnamespace:'0',gsrlimit:'5',prop:'pageimages|info',inprop:'url',piprop:'thumbnail|name',pithumbsize:'800'});
 const response=await fetch(`https://en.wikipedia.org/w/api.php?${params}`);if(!response.ok)return null;
 const pages=Object.values((await response.json()).query?.pages||{}).sort((a,b)=>(a.index??99)-(b.index??99));
 const page=pages.find(p=>p.thumbnail?.source);return page?{src:page.thumbnail.source,credit:'GARAGE WIKIPEDIA IMAGE'}:null;
}
async function lookupCpuCommonsPhoto(subject){
 const params=new URLSearchParams({action:'query',format:'json',origin:'*',generator:'search',gsrsearch:`${subject} car`,gsrnamespace:'6',gsrlimit:'8',prop:'imageinfo',iiprop:'url',iiurlwidth:'800'});
 const response=await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);if(!response.ok)return null;
 const pages=Object.values((await response.json()).query?.pages||{}).sort((a,b)=>(a.index??99)-(b.index??99));
 const page=pages.find(p=>p.imageinfo?.[0]?.thumburl||p.imageinfo?.[0]?.url);return page?{src:page.imageinfo[0].thumburl||page.imageinfo[0].url,credit:'GARAGE COMMONS IMAGE'}:null;
}
async function setCpuPreviewImage(){
 const img=document.querySelector('#cpuImage'),status=document.querySelector('#cpuImageStatus');if(!img||!status)return;
 const subject=`${cpuOpponent.brand} ${cpuOpponent.name}`,key=subject.toLowerCase(),local=localPhotoOverrides[subject];
 img.style.display='block';status.textContent='Loading garage image…';
 if(cpuOpponent.brand==='AC'&&!['Cobra','Cobra GT Roadster'].includes(cpuOpponent.name)){img.removeAttribute('src');img.style.display='none';status.textContent='NO IMAGE';return}
 if(noImageSubjects.has(normalizedSubjectKey(subject))){img.removeAttribute('src');img.style.display='none';status.textContent='NO IMAGE';return}
 if(local){img.src=local.src;status.textContent=local.credit;return}
 if(cpuPhotoCache.has(key)){const cached=cpuPhotoCache.get(key);img.src=cached.src;status.textContent=cached.credit;return}
 try{const found=await lookupCpuWikipediaPhoto(subject)||await lookupCpuCommonsPhoto(subject);if(found){cpuPhotoCache.set(key,found);img.src=found.src;status.textContent=found.credit;return}}catch(error){}
 const fallback={src:createImageDataUrl(cpuOpponent.name,cpuOpponent.brand),credit:'NO REAL IMAGE FOUND YET'};
 cpuPhotoCache.set(key,fallback);img.src=fallback.src;status.textContent=fallback.credit;
}
document.querySelector('#carTitle').textContent=`${selected.brand} ${selected.name}`;
document.querySelector('#physicsReadout').innerHTML=`${selected.physicsEstimated?'ESTIMATED PROFILE':'PUBLISHED PROFILE'}<br>${Math.round(specs.powerHp)} HP Â· ${Math.round(specs.massKg)} KG<br>${specs.drive} Â· ${(specs.handling/100).toFixed(2)} GRIP INDEX`;

const courses={
 city:{theme:'city',sky:0x8fc7e8,ground:0x4f5f50,road:0x2d3134,accent:0xf0c048,points:[[-260,-260],[260,-260],[260,260],[-260,260]],branches:[[[-260,-130],[260,-130]],[[-260,0],[260,0]],[[-260,130],[260,130]],[[-130,-260],[-130,260]],[[0,-260],[0,260]],[[130,-260],[130,260]]]},
 drag:{theme:'drag',sky:0x8fa8bd,ground:0x585247,road:0x17191b,accent:0xffb02e,drag:true,points:[[0,-2600],[0,3200]],branches:[]},
 test:{theme:'test',sky:0x9fc7df,ground:0x405542,road:0x24282b,accent:0x35d9ff,points:[[-390,-250],[-80,-250],[260,-230],[390,-130],[360,40],[250,150],[60,190],[-90,130],[-25,35],[145,-20],[70,-105],[-120,-70],[-270,10],[-410,-70],[-455,-185]],branches:[]}
};

const canvas=document.querySelector('#game');let renderer,scene,camera,clock;
try{renderer=new THREE.WebGLRenderer({canvas,antialias:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1));renderer.shadowMap.enabled=false;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.28}catch(error){document.querySelector('#webglError').classList.add('show');throw error}
scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(62,innerWidth/innerHeight,.1,1200);clock=new THREE.Clock();
const hemi=new THREE.HemisphereLight(0xf4fbff,0x8a836e,3.2);scene.add(hemi);const sun=new THREE.DirectionalLight(0xffffff,3.6);sun.position.set(-80,140,60);sun.castShadow=false;scene.add(sun);

let world=new THREE.Group(),curve,trackSamples=[],colliders=[],driveSurfaces=[],trafficCars=[],portal=null,roadWidth=13,player,course=courses.city,cpuCar=null,cpuBrand='Acura',cpuOpponent=fullCar('Acura',cpuCatalog.Acura[0]),cpuMotion={speed:0,distance:0,topSpeed:0};
scene.add(world);
const keys={},driveKeys=new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space','KeyC','KeyR']);addEventListener('keydown',e=>{if(driveKeys.has(e.code)){e.preventDefault();if(document.activeElement instanceof HTMLElement)document.activeElement.blur()}keys[e.code]=true;if(e.code==='KeyW'||e.code==='ArrowUp')startAudio();if(e.code==='KeyC'&&!e.repeat)cycleCamera();if(e.code==='KeyR')resetPlayer()},{passive:false});addEventListener('keyup',e=>{if(driveKeys.has(e.code))e.preventDefault();keys[e.code]=false},{passive:false});addEventListener('blur',()=>Object.keys(keys).forEach(k=>keys[k]=false));

function inferBodyProfile(source=selected){
 const text=`${source.brand||''} ${source.name} ${source.type||''}`.toLowerCase();
 if(/acura.*nsx|nsx/.test(text))return{style:'hypercar',signature:'nsx',w:1.94,l:4.49,body:.34,cabin:.46,cabinL:1.5,cabinZ:-.34,wheel:.41};
 if(/lucid.*air/.test(text))return{style:'sedan',signature:'lucid-air',w:1.94,l:4.98,body:.42,cabin:.5,cabinL:2.55,cabinZ:-.06,wheel:.42};
 if(/giulia.*quadrifoglio/.test(text))return{style:'sedan',signature:'giulia-qv',w:1.87,l:4.64,body:.48,cabin:.62,cabinL:2.12,cabinZ:-.22,wheel:.41};
 if(/abarth.*124/.test(text))return{style:'roadster',signature:'abarth124',w:1.74,l:4.05,body:.39,cabin:.28,cabinL:1.2,cabinZ:-.42,wheel:.38};
 if(/abarth.*(500|595|695)|fiat.*500/.test(text))return{style:'hatch',signature:'abarth500',w:1.75,l:3.66,body:.58,cabin:.82,cabinL:2.08,cabinZ:-.1,wheel:.38};
 if(/tesla.*model s/.test(text))return{style:'sedan',signature:'tesla-s',w:1.96,l:4.98,body:.42,cabin:.58,cabinL:2.45,cabinZ:-.08,wheel:.41};
 if(/golf/.test(text))return{style:'hatch',signature:'golf',w:1.8,l:4.3,body:.53,cabin:.72,cabinL:2.2,cabinZ:-.15,wheel:.39};
 if(/civic/.test(text))return{style:'hatch',signature:'civic',w:1.89,l:4.6,body:.46,cabin:.62,cabinL:2.2,cabinZ:-.12,wheel:.4};
 if(/cybertruck/.test(text))return{style:'truck',signature:'cybertruck',w:2.05,l:5.45,body:.62,cabin:.72,cabinL:2.65,cabinZ:.05,wheel:.47};
 if(/g-class|g wagon|g-wagen/.test(text))return{style:'suv',signature:'boxy',w:2.02,l:4.82,body:.68,cabin:.92,cabinL:2.6,cabinZ:-.18,wheel:.44};
 if(/beetle/.test(text))return{style:'hatch',signature:'beetle',w:1.78,l:4.08,body:.52,cabin:.78,cabinL:2.45,cabinZ:-.08,wheel:.38};
 if(/\b911\b/.test(text))return{style:'sports',signature:'911',w:1.88,l:4.5,body:.43,cabin:.58,cabinL:1.95,cabinZ:-.25,wheel:.4};
 if(/countach|diablo/.test(text))return{style:'hypercar',signature:'wedge',w:2.02,l:4.45,body:.31,cabin:.4,cabinL:1.45,cabinZ:-.38,wheel:.4};
 if(/chiron|veyron/.test(text))return{style:'hypercar',signature:'rounded',w:2.04,l:4.55,body:.42,cabin:.51,cabinL:1.72,cabinZ:-.28,wheel:.41};
 if(/\bmini\b|cooper/.test(text))return{style:'hatch',signature:'mini',w:1.75,l:3.85,body:.55,cabin:.72,cabinL:2.12,cabinZ:-.18,wheel:.37};
 if(/model s|taycan|ioniq 6/.test(text))return{style:'sedan',signature:'ev-sedan',w:1.96,l:4.86,body:.45,cabin:.62,cabinL:2.32,cabinZ:-.12,wheel:.41};
 if(/gt-r|supra|lfa/.test(text))return{style:'sports',signature:'jdm-coupe',w:1.9,l:4.55,body:.45,cabin:.55,cabinL:1.72,cabinZ:-.34,wheel:.4};
 if(/124 spider|miata|mx-5/.test(text))return{style:'roadster',signature:'italian-roadster',w:1.74,l:4.05,body:.39,cabin:.28,cabinL:1.2,cabinZ:-.42,wheel:.38};
 if(/corvette/.test(text))return{style:'hypercar',signature:'corvette',w:1.93,l:4.63,body:.38,cabin:.5,cabinL:1.65,cabinZ:-.32,wheel:.41};
 if(/mustang/.test(text))return{style:'muscle',signature:'mustang',w:1.92,l:4.81,body:.49,cabin:.55,cabinL:1.78,cabinZ:-.48,wheel:.42};
 if(/camaro/.test(text))return{style:'muscle',signature:'camaro',w:1.9,l:4.78,body:.46,cabin:.46,cabinL:1.6,cabinZ:-.52,wheel:.41};
 if(/challenger|charger/.test(text))return{style:'muscle',signature:'wide-muscle',w:1.98,l:5.0,body:.54,cabin:.56,cabinL:1.85,cabinZ:-.46,wheel:.43};
 if(/suv|crossover|escalade|bronco|wrangler|range rover|land cruiser|cayenne|urus|model x/.test(text))return{style:'suv',w:2.02,l:4.72,body:.62,cabin:.88,cabinL:2.45,cabinZ:-.2,wheel:.43};
 if(/truck|pickup|f-150|silverado|tundra|tacoma|ram/.test(text))return{style:'truck',w:2.05,l:5.15,body:.68,cabin:.85,cabinL:1.85,cabinZ:.62,wheel:.46};
 if(/hypercar|supercar|valkyrie|chiron|veyron|koenigsegg|pagani|ferrari|lamborghini|mclaren|corvette|ford gt/.test(text))return{style:'hypercar',w:2.08,l:4.58,body:.34,cabin:.48,cabinL:1.62,cabinZ:-.35,wheel:.4};
 if(/roadster|convertible|spider|miata|mx-5|s2000|z4|boxster/.test(text))return{style:'roadster',w:1.86,l:4.05,body:.4,cabin:.34,cabinL:1.35,cabinZ:-.38,wheel:.38};
 if(/muscle|mustang|camaro|challenger|charger|firebird/.test(text))return{style:'muscle',w:1.98,l:4.78,body:.5,cabin:.56,cabinL:1.72,cabinZ:-.52,wheel:.42};
 if(/hatch|golf|civic|focus|fiesta|corolla|yaris/.test(text))return{style:'hatch',w:1.84,l:4.08,body:.52,cabin:.72,cabinL:2.12,cabinZ:-.22,wheel:.38};
 return{style:'sedan',w:1.9,l:4.62,body:.5,cabin:.68,cabinL:2.05,cabinZ:-.28,wheel:.39};
}
function selectedPaint(source=selected){const brand=String(source.brand||'').toLowerCase(),name=String(source.name||'').toLowerCase(),iconic=[[/abarth/,0xf4f4ef],[/acura/,0xaeb5b8],[/alfa romeo/,0xc51422],[/lucid/,0x10182a],[/ferrari/,0xc51422],[/lamborghini/,0xf1b51d],[/bugatti/,0x174f9b],[/porsche/,0xb8bcc0],[/aston martin/,0x185c4b],[/mclaren/,0xf27a18],[/bmw/,0x2767a8],[/mercedes/,0x8e969b],[/tesla/,0xb51f2a],[/subaru/,0x1d4f9b],[/lotus/,0x17623a],[/mazda/,0xa6111b],[/ford/,0x215b9b],[/chevrolet/,0xd7a21e]];if(/695 competizione/.test(name))return new THREE.Color(0x111111);const match=iconic.find(([re])=>re.test(brand));if(match)return new THREE.Color(match[1]);let hash=0;for(const ch of `${source.brand}${source.name}`)hash=(hash*31+ch.charCodeAt(0))|0;const color=new THREE.Color();color.setHSL(Math.abs(hash%360)/360,.68,.43);return color}
function taperedGeometry(w,h,l,front=.82,rear=.94){
 const z=l/2,verts=new Float32Array([-w*rear/2,0,-z,w*rear/2,0,-z,-w*rear/2,h,-z,w*rear/2,h,-z,-w*front/2,0,z,w*front/2,0,z,-w*front/2,h,z,w*front/2,h,z]),idx=[0,1,2,1,3,2,4,6,5,5,6,7,0,4,1,1,4,5,2,3,6,3,7,6,0,2,4,2,6,4,1,5,3,3,5,7],g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(verts,3));g.setIndex(idx);g.computeVertexNormals();return g
}
function createCar(color=0xffa51f,playerCar=false,carSource=null){
 const source=carSource||selected,p=(playerCar||carSource)?inferBodyProfile(source):{style:'sports',w:1.92,l:4.3,body:.46,cabin:.58,cabinL:1.72,cabinZ:-.25,wheel:.39},car=new THREE.Group(),paint=new THREE.MeshPhysicalMaterial({color:(playerCar||carSource)?selectedPaint(source):color,metalness:.72,roughness:.22,clearcoat:1,clearcoatRoughness:.12}),dark=new THREE.MeshStandardMaterial({color:0x111416,metalness:.38,roughness:.35}),glass=new THREE.MeshPhysicalMaterial({color:0x7ea9bd,metalness:.08,roughness:.1,transmission:.22,transparent:true,opacity:.72});
 const ride=(p.style==='suv'||p.style==='truck') ? .58 : .42,body=new THREE.Mesh(taperedGeometry(p.w,p.body,p.l,p.style==='hypercar' ? .58 : .82,.95),paint);body.position.y=ride;body.castShadow=true;car.add(body);
 const hoodLength=p.style==='muscle'?1.72:p.style==='suv'?.92:1.25,hood=new THREE.Mesh(taperedGeometry(p.w*.91,.16,hoodLength,.78,.94),paint);hood.position.set(0,ride+p.body-.02,p.l/2-hoodLength/2-.15);hood.rotation.x=p.style==='hypercar'?-.13:-.04;car.add(hood);
 let cabin;if(['911','beetle','rounded'].includes(p.signature)){cabin=new THREE.Mesh(new THREE.SphereGeometry(1,24,12),glass);cabin.scale.set(p.w*(p.signature==='beetle' ? .44 : .39),p.cabin*.72,p.cabinL*.52)}else{const cabinGeo=p.signature==='boxy'||p.signature==='mini'?new THREE.BoxGeometry(p.w*.8,p.cabin,p.cabinL):taperedGeometry(p.w*(p.style==='suv' ? .86 : .76),p.cabin,p.cabinL,p.signature==='cybertruck' ? .38 : .78,.92);cabin=new THREE.Mesh(cabinGeo,p.signature==='cybertruck'?paint:glass)}cabin.position.set(0,ride+p.body-.02,p.cabinZ);cabin.castShadow=true;car.add(cabin);
 if(p.signature==='beetle'||p.signature==='abarth500'){const shell=new THREE.Mesh(new THREE.SphereGeometry(1,24,12),paint);shell.scale.set(p.w*(p.signature==='abarth500'?.48:.49),p.body*(p.signature==='abarth500'?.82:.95),p.l*.43);shell.position.set(0,ride+p.body*.72,-.08);car.add(shell);car.remove(cabin);car.add(cabin)}
 if(p.signature==='911'){const rearHump=new THREE.Mesh(taperedGeometry(p.w*.9,.26,1.1,.95,.86),paint);rearHump.position.set(0,ride+p.body-.03,-1.58);car.add(rearHump)}
 if(p.signature==='wedge'){const rearWing=new THREE.Mesh(new THREE.BoxGeometry(p.w*.96,.08,.42),dark);rearWing.position.set(0,ride+p.body+.43,-p.l/2+.25);car.add(rearWing)}
 if(p.style==='truck'){const bed=new THREE.Mesh(new THREE.BoxGeometry(p.w*.9,.34,1.65),paint);bed.position.set(0,ride+p.body*.7,-1.58);car.add(bed)}
 if(p.style==='hypercar'){const splitter=new THREE.Mesh(new THREE.BoxGeometry(p.w*1.02,.07,.42),dark);splitter.position.set(0,ride+.04,p.l/2+.03);car.add(splitter);const wing=new THREE.Mesh(new THREE.BoxGeometry(p.w*.94,.07,.36),dark);wing.position.set(0,ride+p.body+.36,-p.l/2+.18);car.add(wing)}
 if(p.signature==='nsx'){const bladeMat=new THREE.MeshStandardMaterial({color:0x111416,roughness:.42,metalness:.35});for(const sx of [-1,1]){const blade=new THREE.Mesh(new THREE.BoxGeometry(.055,.42,.82),bladeMat);blade.position.set(sx*p.w*.52,ride+p.body*.48,-.65);blade.rotation.y=sx*.12;car.add(blade);const intake=new THREE.Mesh(new THREE.BoxGeometry(.06,.28,.52),dark);intake.position.set(sx*p.w*.53,ride+p.body*.3,.38);car.add(intake)}const nose=new THREE.Mesh(new THREE.BoxGeometry(p.w*.72,.08,.08),dark);nose.position.set(0,ride+p.body*.55,p.l/2+.05);car.add(nose)}
 if(p.signature==='lucid-air'){const barMat=new THREE.MeshStandardMaterial({color:0xdfeeff,emissive:0x8ec7ff,emissiveIntensity:2.4});const frontBar=new THREE.Mesh(new THREE.BoxGeometry(p.w*.72,.045,.035),barMat);frontBar.position.set(0,ride+p.body*.72,p.l/2+.05);car.add(frontBar);const rearBar=frontBar.clone();rearBar.position.z=-p.l/2-.05;car.add(rearBar);const roof=new THREE.Mesh(new THREE.BoxGeometry(p.w*.76,.04,p.cabinL*.92),glass);roof.position.set(0,ride+p.body+p.cabin*.38,p.cabinZ);car.add(roof)}
 if(p.signature==='giulia-qv'){const grilleMat=new THREE.MeshStandardMaterial({color:0x050505,roughness:.45,metalness:.2}),tri=new THREE.Mesh(new THREE.ConeGeometry(.34,.42,3),grilleMat);tri.position.set(0,ride+p.body*.45,p.l/2+.07);tri.rotation.set(Math.PI/2,0,Math.PI);car.add(tri);const ventMat=new THREE.MeshStandardMaterial({color:0x151515,roughness:.5});for(const sx of [-1,1]){const vent=new THREE.Mesh(new THREE.BoxGeometry(.08,.32,.48),ventMat);vent.position.set(sx*p.w*.48,ride+p.body*.5,.56);vent.rotation.y=sx*.18;car.add(vent)}const lip=new THREE.Mesh(new THREE.BoxGeometry(p.w*.95,.06,.28),dark);lip.position.set(0,ride+.03,p.l/2+.04);car.add(lip)}
 if(p.signature==='abarth500'){const stripeMat=new THREE.MeshStandardMaterial({color:0xc51422,roughness:.38}),stripe=new THREE.Mesh(new THREE.BoxGeometry(p.w*.82,.035,p.l*.72),stripeMat);stripe.position.set(0,ride+p.body+.04,-.05);car.add(stripe);const side=new THREE.Mesh(new THREE.BoxGeometry(.035,.08,p.l*.62),stripeMat);side.position.set(-p.w*.51,ride+p.body*.34,-.08);car.add(side.clone());side.position.x=p.w*.51;car.add(side)}
 if(p.signature==='abarth124'){const black=new THREE.MeshStandardMaterial({color:0x111111,roughness:.48}),hoodPanel=new THREE.Mesh(new THREE.BoxGeometry(p.w*.7,.04,1.25),black);hoodPanel.position.set(0,ride+p.body+.05,p.l*.21);car.add(hoodPanel);const red=new THREE.MeshStandardMaterial({color:0xc51422,roughness:.35}),splitter=new THREE.Mesh(new THREE.BoxGeometry(p.w*.9,.055,.18),red);splitter.position.set(0,ride+.05,p.l/2+.12);car.add(splitter);const roll2=new THREE.Mesh(new THREE.TorusGeometry(.34,.035,8,18),dark);roll2.position.set(-.35,ride+p.body+.26,-.72);roll2.rotation.x=Math.PI/2;car.add(roll2);const roll3=roll2.clone();roll3.position.x=.35;car.add(roll3)}
 if(['tesla-s','civic','golf'].includes(p.signature)){const smooth=new THREE.Mesh(new THREE.BoxGeometry(p.w*.9,.045,p.l*.42),glass);smooth.position.set(0,ride+p.body+.2,-.08);car.add(smooth)}
 if(['mustang','camaro','wide-muscle'].includes(p.signature)){const scoop=new THREE.Mesh(new THREE.BoxGeometry(p.w*.32,.08,.48),dark);scoop.position.set(0,ride+p.body+.11,p.l*.22);car.add(scoop)}
 if(p.signature==='italian-roadster'){const roll=new THREE.Mesh(new THREE.TorusGeometry(.34,.035,8,18),dark);roll.position.set(0,ride+p.body+.26,-.72);roll.rotation.x=Math.PI/2;car.add(roll)}
 for(const x of [-p.w*.27,p.w*.27]){const exhaust=new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,.22,12),dark);exhaust.position.set(x,ride+.1,-p.l/2-.08);exhaust.rotation.x=Math.PI/2;car.add(exhaust)}
 const grille=new THREE.Mesh(new THREE.BoxGeometry(p.w*.55,.2,.035),dark);grille.position.set(0,ride+p.body*.42,p.l/2+.01);car.add(grille);
 const headMat=new THREE.MeshStandardMaterial({color:0xe8f5ff,emissive:0xbadfff,emissiveIntensity:3}),tailMat=new THREE.MeshStandardMaterial({color:0xff3030,emissive:0xff0000,emissiveIntensity:2});car.userData.headLights=[];car.userData.brakeLights=[];for(const x of [-p.w*.31,p.w*.31]){const roundLights=['911','beetle','mini'].includes(p.signature),h=new THREE.Mesh(roundLights?new THREE.SphereGeometry(.13,16,8):new THREE.BoxGeometry(p.w*.2,.1,.035),headMat.clone());h.position.set(x,ride+p.body*.72,p.l/2+.025);if(roundLights)h.scale.z=.35;car.add(h);car.userData.headLights.push(h);const t=new THREE.Mesh(new THREE.BoxGeometry(p.w*.19,.11,.035),tailMat.clone());t.position.set(x,ride+p.body*.68,-p.l/2-.025);car.add(t);car.userData.brakeLights.push(t)}
 const wheelGeo=new THREE.CylinderGeometry(p.wheel,p.wheel,.3,24),wheelMat=new THREE.MeshStandardMaterial({color:0x080909,roughness:.62}),rimMat=new THREE.MeshStandardMaterial({color:0x8c9295,metalness:.9,roughness:.22});car.userData.wheels=[];const axle=p.l*(p.style==='muscle' ? .32 : .31);
[[-p.w/2-.02,ride+.08,axle],[p.w/2+.02,ride+.08,axle],[-p.w/2-.02,ride+.08,-axle],[p.w/2+.02,ride+.08,-axle]].forEach((pos,index)=>{const steerPivot=new THREE.Group(),axlePivot=new THREE.Group(),spinPivot=new THREE.Group(),w=new THREE.Mesh(wheelGeo,wheelMat),rim=new THREE.Mesh(new THREE.CylinderGeometry(p.wheel*.57,p.wheel*.57,.305,12),rimMat);axlePivot.rotation.z=Math.PI/2;w.castShadow=true;spinPivot.add(w,rim);axlePivot.add(spinPivot);steerPivot.add(axlePivot);steerPivot.position.set(...pos);car.add(steerPivot);car.userData.wheels.push({steer:steerPivot,spin:spinPivot,front:index<2})});
 car.userData.isPlayer=playerCar;car.userData.profile=p.style;return car;
}

function seededRandom(seed){let s=seed;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296}}
function addCollider(x,z,r,w=null,d=null){colliders.push({x,z,r,w,d})}
function clearForScenery(x,z,r=7){return !trackSamples.length||nearestTrack(new THREE.Vector3(x,0,z)).distance>roadWidth*1.05+r}
function addBox(parent,x,y,z,w,h,d,mat,rot=0,solid=false){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);m.rotation.y=rot;m.castShadow=true;m.receiveShadow=true;parent.add(m);if(solid)addCollider(x,z,Math.hypot(w,d)*.5,w,d);return m}
function addTree(parent,x,z,scale,theme){if(!clearForScenery(x,z,1.8*scale))return;const trunkMat=new THREE.MeshStandardMaterial({color:theme==='alps'?0x5a4735:0x4a3525,roughness:.9}),leafMat=new THREE.MeshStandardMaterial({color:theme==='alps'?0x223f31:0x2f5635,roughness:1}),trunk=new THREE.Mesh(new THREE.CylinderGeometry(.16*scale,.32*scale,2.1*scale,7),trunkMat),crown=new THREE.Mesh(new THREE.ConeGeometry(1.25*scale,3.6*scale,8),leafMat);trunk.position.set(x,1.05*scale,z);crown.position.set(x,3.25*scale,z);trunk.castShadow=crown.castShadow=true;parent.add(trunk,crown);addCollider(x,z,1.15*scale)}
function addRock(parent,x,z,scale,color=0x5d5a51){if(!clearForScenery(x,z,scale*1.2))return;const r=new THREE.Mesh(new THREE.DodecahedronGeometry(scale,0),new THREE.MeshStandardMaterial({color,roughness:1}));r.position.set(x,scale*.45,z);r.scale.y=.45+Math.random()*.35;r.rotation.set(Math.random(),Math.random()*Math.PI,Math.random());r.castShadow=r.receiveShadow=true;parent.add(r);addCollider(x,z,scale*1.05)}
function addCityBuilding(parent,x,z,w,d,h,rand){if(!clearForScenery(x,z,Math.hypot(w,d)*.5+3))return;const mat=new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.58+rand()*.08,.14,.18+rand()*.16),emissive:rand()>.45?0x10263a:0,emissiveIntensity:.9,roughness:.72,metalness:.18}),b=addBox(parent,x,h/2,z,w,h,d,mat,rand()*Math.PI*.08,true);const glass=new THREE.MeshStandardMaterial({color:rand()>.5?0x35d9ff:0xff4fd8,emissive:rand()>.5?0x1281a8:0x8f1d74,emissiveIntensity:1.2,roughness:.35});for(let yy=3;yy<h-2;yy+=5)for(const sx of [-1,1])if(rand()>.28)addBox(parent,x+sx*w*.51,yy,z,.08,1.1,d*.62,glass)}
function addTokyoTower(parent,x,z){if(!clearForScenery(x,z,16))return;const red=new THREE.MeshStandardMaterial({color:0xd83b2d,emissive:0x4a0904,emissiveIntensity:.7,roughness:.45}),white=new THREE.MeshStandardMaterial({color:0xf3eee4,emissive:0x44382f,emissiveIntensity:.35,roughness:.5});for(let i=0;i<8;i++){const mat=i%2?white:red,leg=new THREE.Mesh(new THREE.CylinderGeometry(1.6-i*.12,2.8-i*.18,8,4),mat);leg.position.set(x,4+i*8,z);leg.rotation.y=Math.PI/4;leg.castShadow=true;parent.add(leg)}addBox(parent,x,21,z,18,.8,18,red);addBox(parent,x,45,z,10,.7,10,white);const tip=new THREE.Mesh(new THREE.ConeGeometry(3,20,4),red);tip.position.set(x,74,z);tip.rotation.y=Math.PI/4;parent.add(tip);addCollider(x,z,12)}
function addTokyoSkytree(parent,x,z){if(!clearForScenery(x,z,12))return;const steel=new THREE.MeshStandardMaterial({color:0xcfd7dc,emissive:0x41525e,emissiveIntensity:.6,metalness:.35,roughness:.35}),glow=new THREE.MeshStandardMaterial({color:0x8feaff,emissive:0x35d9ff,emissiveIntensity:2.6});const shaft=new THREE.Mesh(new THREE.CylinderGeometry(2.2,4.2,112,12),steel);shaft.position.set(x,56,z);shaft.castShadow=true;parent.add(shaft);for(const y of [34,66,92]){const ring=new THREE.Mesh(new THREE.TorusGeometry(4.9,.25,8,24),glow);ring.position.set(x,y,z);ring.rotation.x=Math.PI/2;parent.add(ring)}const tip=new THREE.Mesh(new THREE.ConeGeometry(1.3,28,10),steel);tip.position.set(x,126,z);parent.add(tip);addCollider(x,z,7)}
function addScrambleCrossing(parent,x,z){const white=new THREE.MeshStandardMaterial({color:0xf4f1e8,roughness:.7}),asphalt=new THREE.MeshStandardMaterial({color:0x181b1d,roughness:.9});addBox(parent,x,.145,z,46,.05,46,asphalt);for(let i=-4;i<=4;i++){addBox(parent,x+i*3.5,.22,z,1.35,.06,40,white);addBox(parent,x,.23,z+i*3.5,40,.06,1.35,white)}for(const rot of [Math.PI/4,-Math.PI/4])for(let i=-4;i<=4;i++)addBox(parent,x+i*3.1,.24,z,1.05,.06,54,white,rot)}
function addCleanCrosswalk(parent,x,z){const white=new THREE.MeshStandardMaterial({color:0xf7f4e8,roughness:.65});for(let i=-2;i<=2;i++){addBox(parent,x-15+i*2.2,.36,z,1.2,.04,14,white);addBox(parent,x+15+i*2.2,.36,z,1.2,.04,14,white);addBox(parent,x,.37,z-15+i*2.2,14,.04,1.2,white);addBox(parent,x,.37,z+15+i*2.2,14,.04,1.2,white)}}
function addStreetLight(parent,x,z){const pole=new THREE.MeshStandardMaterial({color:0x35383b,roughness:.45,metalness:.3}),lamp=new THREE.MeshStandardMaterial({color:0xfff0bd,emissive:0xffcf73,emissiveIntensity:1.2});addBox(parent,x,2.2,z,.22,4.4,.22,pole,0,true);addBox(parent,x,4.55,z,.9,.22,.9,lamp)}
function addElevatedRoad(parent,z){const concrete=new THREE.MeshStandardMaterial({color:0x55585b,roughness:.85}),rail=new THREE.MeshStandardMaterial({color:0x9aa0a4,roughness:.45,metalness:.25});addBox(parent,0,7,z,440,.7,9,concrete);for(let x=-210;x<=210;x+=28)addBox(parent,x,3.5,z,1.2,7,1.2,concrete,0,true);for(const side of [-1,1])addBox(parent,0,7.7,z+side*4.8,440,.55,.35,rail)}
function addBillboard(parent,x,z,textColor=0xffb02e){const frame=new THREE.MeshStandardMaterial({color:0x111315,roughness:.55,metalness:.25}),glow=new THREE.MeshStandardMaterial({color:textColor,emissive:textColor,emissiveIntensity:2.2});addBox(parent,x,5,z,18,6,.35,frame,0,true);addBox(parent,x,5,z-.22,15,3.6,.08,glow)}
function addTextSign(parent,x,y,z,label,rot=0){
 const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');canvas.width=512;canvas.height=160;
 ctx.fillStyle='#111820';ctx.fillRect(0,0,512,160);ctx.strokeStyle='#ffb02e';ctx.lineWidth=12;ctx.strokeRect(8,8,496,144);
 ctx.fillStyle='#ffffff';ctx.font='bold 46px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,256,82);
 const texture=new THREE.CanvasTexture(canvas),mat=new THREE.MeshBasicMaterial({map:texture}),panel=new THREE.Mesh(new THREE.PlaneGeometry(18,5.6),mat);
 panel.position.set(x,y,z);panel.rotation.y=rot;parent.add(panel);
 const poleMat=new THREE.MeshStandardMaterial({color:0x202428,roughness:.55,metalness:.2});
 for(const dx of [-7,7])addBox(parent,x+Math.cos(rot)*dx,y-3,z-Math.sin(rot)*dx,.35,6,.35,poleMat,rot,false);
}
function addFloatingLabel(parent,label){
 const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');canvas.width=256;canvas.height=96;
 ctx.fillStyle='#090b0ddd';ctx.fillRect(18,18,220,60);ctx.strokeStyle='#ff3030';ctx.lineWidth=6;ctx.strokeRect(18,18,220,60);
 ctx.fillStyle='#ffffff';ctx.font='bold 44px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,128,50);
 const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(canvas),transparent:true,depthTest:false}));
 sprite.position.set(0,2.65,0);sprite.scale.set(4.4,1.65,1);parent.add(sprite);
}
function addGrandstand(parent,x,z,rot=0){const steel=new THREE.MeshStandardMaterial({color:0x8f969b,roughness:.45,metalness:.4}),seat=new THREE.MeshStandardMaterial({color:0x20252a,roughness:.7}),roof=new THREE.MeshStandardMaterial({color:0xbcc4c9,roughness:.6,metalness:.25});for(let i=0;i<5;i++)addBox(parent,x,1+i*.65,z-i*1.3,28,.28,1.1,seat,rot,true);addBox(parent,x,4.9,z-3.2,31,.35,7,roof,rot);for(const px of [-13,13])addBox(parent,x+px,2.4,z-3,1,4.8,1,steel,rot,true)}
function addLodge(parent,x,z,rot=0){if(!clearForScenery(x,z,7))return;const wood=new THREE.MeshStandardMaterial({color:0x6b4a2f,roughness:.9}),roof=new THREE.MeshStandardMaterial({color:0x263035,roughness:.85}),snow=new THREE.MeshStandardMaterial({color:0xe8eef0,roughness:.7});addBox(parent,x,1.2,z,7,2.4,5,wood,rot,true);const r=new THREE.Mesh(new THREE.ConeGeometry(4.6,2.2,4),roof);r.position.set(x,3.4,z);r.rotation.y=rot+Math.PI/4;r.scale.z=.75;r.castShadow=true;parent.add(r);addBox(parent,x,4.6,z,5.2,.25,3.1,snow,rot)}
function addPalm(parent,x,z,scale=1){if(!clearForScenery(x,z,2.2*scale))return;const trunkMat=new THREE.MeshStandardMaterial({color:0x8a623f,roughness:.9}),leafMat=new THREE.MeshStandardMaterial({color:0x2f6a3a,roughness:1}),trunk=new THREE.Mesh(new THREE.CylinderGeometry(.18*scale,.28*scale,5.6*scale,7),trunkMat);trunk.position.set(x,2.8*scale,z);trunk.rotation.z=(Math.random()-.5)*.18;parent.add(trunk);for(let i=0;i<7;i++){const leaf=new THREE.Mesh(new THREE.BoxGeometry(.22*scale,.08*scale,3.2*scale),leafMat);leaf.position.set(x,5.7*scale,z);leaf.rotation.y=i/7*Math.PI*2;leaf.rotation.x=.35;parent.add(leaf)}addCollider(x,z,1.1*scale)}
function addMalibuHouse(parent,x,z,rot=0){if(!clearForScenery(x,z,8))return;const wall=new THREE.MeshStandardMaterial({color:0xd8c7a1,roughness:.75}),glass=new THREE.MeshStandardMaterial({color:0x7ec7df,emissive:0x1b5f73,emissiveIntensity:.45,roughness:.22}),roof=new THREE.MeshStandardMaterial({color:0x9a5632,roughness:.8});addBox(parent,x,1.3,z,8,2.6,5,wall,rot,true);addBox(parent,x,2.55,z-2.65,7,.9,.12,glass,rot);addBox(parent,x,3.1,z,9,.45,5.8,roof,rot)}
function addDesertScrub(parent,x,z,scale){if(!clearForScenery(x,z,1.5*scale))return;const mat=new THREE.MeshStandardMaterial({color:0x6f7142,roughness:1}),base=new THREE.Mesh(new THREE.CylinderGeometry(.08*scale,.13*scale,1.5*scale,5),mat);base.position.set(x,.75*scale,z);parent.add(base);for(const side of [-1,1]){const arm=new THREE.Mesh(new THREE.CylinderGeometry(.05*scale,.07*scale,.9*scale,5),mat);arm.position.set(x+side*.34*scale,.9*scale,z);arm.rotation.z=side*.9;parent.add(arm)}addCollider(x,z,.75*scale)}
function boxBetween(a,b,width,material){const mid=a.clone().add(b).multiplyScalar(.5),length=a.distanceTo(b),mesh=new THREE.Mesh(new THREE.BoxGeometry(width,.22,length),material);mesh.position.set(mid.x,.08,mid.z);mesh.rotation.y=Math.atan2(b.x-a.x,b.z-a.z);mesh.receiveShadow=true;return mesh}
function rampBetween(a,b,width,material,h1=0,h2=7){const mid=a.clone().add(b).multiplyScalar(.5),length=a.distanceTo(b),mesh=new THREE.Mesh(new THREE.BoxGeometry(width,.34,length),material);mesh.position.set(mid.x,(h1+h2)/2,mid.z);mesh.rotation.y=Math.atan2(b.x-a.x,b.z-a.z);mesh.rotation.x=Math.atan2(h1-h2,length);mesh.receiveShadow=true;mesh.castShadow=true;return mesh}
function roadPad(x,z,width,material){const pad=new THREE.Mesh(new THREE.CylinderGeometry(width*.56,width*.56,.24,28),material);pad.position.set(x,.105,z);pad.receiveShadow=true;return pad}
function addTrackLine(points,steps=80){for(let i=0;i<=steps;i++){const t=i/steps,a=points[0],b=points[points.length-1];trackSamples.push(new THREE.Vector3(a[0]+(b[0]-a[0])*t,.12,a[1]+(b[1]-a[1])*t))}}
function addDriveSurface(x,z,w,d,h){driveSurfaces.push({type:'flat',x,z,w,d,h})}
function addDriveRamp(x,z,w,d,h1,h2,axis='z'){driveSurfaces.push({type:'ramp',x,z,w,d,h1,h2,axis})}
function roadHeightAt(x,z){
 let height=0;
 for(const s of driveSurfaces){
  const dx=x-s.x,dz=z-s.z;if(Math.abs(dx)>s.w/2||Math.abs(dz)>s.d/2)continue;
  if(s.type==='flat')height=Math.max(height,s.h);
  else{const t=THREE.MathUtils.clamp(((s.axis==='x'?dx:dz)+(s.axis==='x'?s.w:s.d)/2)/(s.axis==='x'?s.w:s.d),0,1);height=Math.max(height,s.h1+(s.h2-s.h1)*t)}
 }
 return height;
}
function addParkingGarage(parent,roadMat,lineMat,edgeMat){
 const concrete=new THREE.MeshStandardMaterial({color:0x7b8082,roughness:.82}),dark=new THREE.MeshStandardMaterial({color:0x25292c,roughness:.88}),rail=new THREE.MeshStandardMaterial({color:0xd5dadd,roughness:.5,metalness:.15}),gx=-195,gz=195,w=78,d=86;
 for(const h of [0,4,8]){addBox(parent,gx,h+.18,gz,w,.36,d,concrete);addDriveSurface(gx,gz,w,d,h);for(const z of [gz-d/2+5,gz+d/2-5])addBox(parent,gx,h+.48,z,w-8,.12,.7,lineMat);for(const x of [gx-w/2+4,gx+w/2-4])addBox(parent,x,h+.55,gz,.7,.35,d-8,rail)}
 const rampA=rampBetween(new THREE.Vector3(gx-25,0,gz-28),new THREE.Vector3(gx-25,0,gz+28),13,dark,0,4);parent.add(rampA);addDriveRamp(gx-25,gz,15,60,0,4,'z');
 const rampB=rampBetween(new THREE.Vector3(gx+25,0,gz+28),new THREE.Vector3(gx+25,0,gz-28),13,dark,4,8);parent.add(rampB);addDriveRamp(gx+25,gz,15,60,8,4,'z');
 addBox(parent,gx-31,.16,gz+65,28,.18,42,roadMat);addDriveSurface(gx-31,gz+65,28,42,0);
 const bridge=new THREE.Mesh(new THREE.BoxGeometry(240,.34,13),dark);bridge.position.set(-40,8.25,gz);bridge.receiveShadow=true;parent.add(bridge);addDriveSurface(-40,gz,240,15,8);
 const down=rampBetween(new THREE.Vector3(80,0,gz),new THREE.Vector3(135,0,gz),13,dark,8,0);parent.add(down);addDriveRamp(107.5,gz,58,15,8,0,'x');
 for(let x=-150;x<=70;x+=36)addBox(parent,x,4.1,gz,1.2,8,1.2,concrete,0,false);
 for(const z of [gz-7.4,gz+7.4])addBox(parent,-40,8.85,z,240,.5,.35,rail);
 addBox(parent,142,.18,gz,26,.22,18,roadMat);addDriveSurface(142,gz,26,18,0);
 addTextSign(parent,gx-31,5.8,gz+88,'PARKING GARAGE',0);
 addTrackLine([[gx-31,gz+86],[gx-31,gz+44]],16);addTrackLine([[gx-25,gz-28],[gx-25,gz+28]],24);addTrackLine([[gx+25,gz+28],[gx+25,gz-28]],24);addTrackLine([[gx,gz],[135,gz]],80);
}
function cityTrafficPoint(route,t){
 const routes={
  outer:[[-260,-260],[260,-260],[260,260],[-260,260]],
  inner:[[-130,-130],[130,-130],[130,130],[-130,130]],
  downtown:[[-260,0],[0,0],[260,0],[260,130],[0,130],[-260,130]],
  avenue:[[0,-260],[0,-130],[0,0],[0,130],[0,260],[130,260],[130,130],[130,0],[130,-130],[130,-260]],
  west:[[-130,-260],[-130,-130],[-130,0],[-130,130],[-130,260],[-260,260],[-260,130],[-260,0],[-260,-130],[-260,-260]]
 };
 const pts=routes[route]||routes.outer,distances=[],total=pts.reduce((sum,p,i)=>{const n=pts[(i+1)%pts.length],d=Math.hypot(n[0]-p[0],n[1]-p[1]);distances[i]=d;return sum+d},0);let travel=(t%1)*total,seg=0;
 while(travel>distances[seg])travel-=distances[seg++];
 const a=pts[seg],b=pts[(seg+1)%pts.length],local=travel/distances[seg],x=a[0]+(b[0]-a[0])*local,z=a[1]+(b[1]-a[1])*local,yaw=Math.atan2(b[0]-a[0],b[1]-a[1]);
 return{x,z,yaw};
}
function spawnTraffic(){
 trafficCars=[];if(course.drag||course.theme==='test')return;
 const colors=[0x2767a8,0xb51f2a,0xe0e0df,0x20252a,0xf0c048,0x185c4b,0x8e969b,0xc86b24,0x6f42c1,0xd6d6d6],routes=['outer','outer','inner','inner','downtown','downtown','avenue','avenue','west','west'];
 for(let i=0;i<10;i++){const car=createCar(colors[i],false);car.scale.setScalar(.9);car.userData.traffic={route:routes[i],t:i/routes.length,speed:.015+(i%4)*.003,lane:i%2?2.6:-2.6};world.add(car);trafficCars.push(car)}
}
function updateTraffic(dt){
 if(course.drag)return;
 for(const car of trafficCars){
  const data=car.userData.traffic;data.t=(data.t+data.speed*dt)%1;const p=cityTrafficPoint(data.route,data.t),sideX=Math.cos(p.yaw)*data.lane,sideZ=-Math.sin(p.yaw)*data.lane;
  car.position.set(p.x+sideX,.32+roadHeightAt(p.x,p.z),p.z+sideZ);car.rotation.y=p.yaw;
  car.userData.wheels?.forEach(w=>{w.spin.rotation.y-=data.speed*90*dt;if(w.front)w.steer.rotation.y=0});
 }
}
function buildWorld(id){
cpuRaceLive=false;
course=courses[id];scene.background=new THREE.Color(course.sky);scene.fog=new THREE.Fog(course.sky,course.drag?900:180,course.drag?5200:700);applyWeather?.(currentWeather);world.clear();trackSamples=[];colliders=[];driveSurfaces=[];trafficCars=[];portal=null;
if(id==='city')completeAchievement('visited_city','Achievement: city unlocked');
if(id==='test')completeAchievement('visited_test_track','Achievement: test track unlocked');
if(id==='drag')completeAchievement('visited_drag_strip','Achievement: drag strip unlocked');
 const worldSize=course.drag?6200:1100,groundDetail=course.drag?1:48,ground=new THREE.Mesh(new THREE.PlaneGeometry(worldSize,worldSize,groundDetail,groundDetail),new THREE.MeshStandardMaterial({color:course.ground,roughness:1}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;world.add(ground);
 const roadMat=new THREE.MeshStandardMaterial({color:course.road,roughness:.86,metalness:.04}),edgeMat=new THREE.MeshStandardMaterial({color:course.accent,roughness:.65}),lineMat=new THREE.MeshStandardMaterial({color:0xf1f0e8,roughness:.7});
 const addRoad=(points,closed,width=roadWidth,primary=false,mat=roadMat,dashed=true,height=0)=>{const roadCurve=new THREE.CatmullRomCurve3(points.map(([x,z])=>new THREE.Vector3(x,.12,z)),closed,'catmullrom',.25),segments=course.drag?70:primary?200:80;for(let i=0;i<segments;i++){const end=closed?(i+1)/segments:Math.min(1,(i+1)/segments),a=roadCurve.getPointAt(i/segments),b=roadCurve.getPointAt(end);trackSamples.push(a);const road=boxBetween(a,b,width,mat);road.position.y=.08+height;world.add(road);if(dashed&&(!course.drag||i%3===0)&&i%7<4){const dash=boxBetween(a,b,.13,lineMat);dash.position.y=.34+height;dash.scale.y=.18;world.add(dash)}if(primary&&(!course.drag||i%5===0)&&i%8===0){const tangent=roadCurve.getTangentAt(i/segments),side=new THREE.Vector3(-tangent.z,0,tangent.x);for(const sign of [-1,1]){const p=a.clone().add(side.clone().multiplyScalar(sign*(width/2+.34))),marker=new THREE.Mesh(new THREE.BoxGeometry(.2,.16,1.5),edgeMat);marker.position.set(p.x,.2+height,p.z);marker.rotation.y=Math.atan2(tangent.x,tangent.z);world.add(marker)}}}for(const [x,z] of points){const pad=roadPad(x,z,width,mat);pad.position.y+=height;world.add(pad)}return roadCurve};
 curve=addRoad(course.points,!course.drag,course.drag?19:roadWidth,true);for(const branch of course.branches||[])addRoad(branch,false,10,false);const dirtMat=new THREE.MeshStandardMaterial({color:course.theme==='malibu'?0xb88755:0x8b7448,roughness:1});for(const trail of course.trails||[])addRoad(trail,false,7,false,dirtMat,false);
 const rand=seededRandom({city:27,drag:63}[id]||1),theme=course.theme;
 if(course.drag){const dragStart=course.points[0][1],coneMat=new THREE.MeshStandardMaterial({color:0xff7b1c,roughness:.55}),barrierMat=new THREE.MeshStandardMaterial({color:0xd9dde0,roughness:.52}),rubberMat=new THREE.MeshStandardMaterial({color:0x050607,roughness:.92}),grassMat=new THREE.MeshStandardMaterial({color:0x48683e,roughness:1}),paddockMat=new THREE.MeshStandardMaterial({color:0x777d80,roughness:.82}),treeYellow=new THREE.MeshStandardMaterial({color:0xffd43b,emissive:0xffb000,emissiveIntensity:2.4}),treeGreen=new THREE.MeshStandardMaterial({color:0x44ff5c,emissive:0x18ff34,emissiveIntensity:2.8}),lampMat=new THREE.MeshStandardMaterial({color:0xffc861,emissive:0xffa529,emissiveIntensity:1.5});for(const x of [-42,42])addBox(world,x,.08,300,38,.08,5600,grassMat);for(const x of [-68,68])addBox(world,x,.09,0,24,.08,700,paddockMat);for(const x of [-13.5,13.5])for(let z=dragStart;z<course.points[1][1];z+=360)addBox(world,x,.55,z,1,.9,230,barrierMat,0,true);for(const x of [-4.7,4.7])addBox(world,x,.31,300,1.2,.05,5000,rubberMat);for(const z of [-40,-28,-16,-4])for(const x of [-3.8,3.8])addBox(world,x,.33,z,1.2,.04,5.2,rubberMat);for(const side of [-1,1]){addGrandstand(world,side*38,-70,0);addBillboard(world,side*42,210,side>0?0xff3030:0x35d9ff)}for(const [x,mat] of [[-2.2,treeYellow],[0,treeYellow],[2.2,treeGreen]])for(let y=1.3;y<5.5;y+=1.05)addBox(world,x,y,-92,.72,.72,.18,mat);for(const [distance,label] of [[402.3,'1/4 MILE'],[1609.3,'1 MILE']]){const z=dragStart+distance,gate=new THREE.Group(),mat=new THREE.MeshStandardMaterial({color:distance<500?0xffb02e:0xffffff,emissive:distance<500?0x5b3100:0x333333});for(const x of [-10,10]){const post=new THREE.Mesh(new THREE.BoxGeometry(.25,4,.25),mat);post.position.set(x,2,z);gate.add(post);addCollider(x,z,1.2)}const bar=new THREE.Mesh(new THREE.BoxGeometry(20,.25,.25),mat);bar.position.set(0,4,z);gate.add(bar);world.add(gate)}for(let z=dragStart+120;z<course.points[1][1];z+=520)for(const x of [-9.7,9.7])addBox(world,x,3,z,.45,2.2,.45,lampMat);for(let z=dragStart+55;z<course.points[1][1];z+=260)for(const x of [-12.4,12.4])addBox(world,x,.35,z,.7,.7,.7,coneMat,0,true);for(let z=-220;z<420;z+=180){addBox(world,-56,1.1,z,10,2.2,18,new THREE.MeshStandardMaterial({color:0xbfc6ca,roughness:.65}),0,true);addBox(world,56,1.1,z+60,10,2.2,18,new THREE.MeshStandardMaterial({color:0xbfc6ca,roughness:.65}),0,true)}}
 else if(theme==='city'){const sidewalkMat=new THREE.MeshStandardMaterial({color:0x6d7376,roughness:.82}),laneMat=new THREE.MeshStandardMaterial({color:0xf5f1df,roughness:.65}),parkMat=new THREE.MeshStandardMaterial({color:0x3c7545,roughness:1}),glassMat=new THREE.MeshStandardMaterial({color:0x9ec8d8,roughness:.28,metalness:.08}),signMat=new THREE.MeshStandardMaterial({color:0xffcc42,emissive:0xffa600,emissiveIntensity:.65,roughness:.42});for(const x of [-260,-130,0,130,260])for(const z of [-260,-130,0,130,260]){addCleanCrosswalk(world,x,z);addBox(world,x,.18,z,18,.12,18,roadMat)}for(const z of [-260,-130,0,130,260])for(const x of [-195,-65,65,195])addBox(world,x,.36,z,42,.04,.55,laneMat);for(const x of [-260,-130,0,130,260])for(const z of [-195,-65,65,195])addBox(world,x,.37,z,.55,.04,42,laneMat);for(const x of [-195,-65,65,195])for(const z of [-195,-65,65,195]){addBox(world,x,.16,z,82,.16,82,sidewalkMat);if(x===65&&z===65){addBox(world,x,.24,z,70,.12,70,parkMat);for(let i=0;i<14;i++)addTree(world,x-28+rand()*56,z-28+rand()*56,.42+rand()*.45,'city');continue}if(z===195&&x>=-195&&x<=65){continue}const h=22+rand()*58,w=26+rand()*18,d=26+rand()*18,mat=new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.58+rand()*.06,.12,.42+rand()*.18),roughness:.64,metalness:.08});addBox(world,x,h/2,z,w,h,d,mat,0,true);for(let yy=5;yy<h-4;yy+=7){addBox(world,x-w*.51,yy,z,.08,2.2,d*.62,glassMat);addBox(world,x+w*.51,yy,z,.08,2.2,d*.62,glassMat);addBox(world,x,yy,z-d*.51,w*.62,2.2,.08,glassMat)}if(rand()>.55)addBox(world,x,6,z+d*.52,w*.55,2,.18,signMat)}for(const x of [-260,-130,0,130,260])for(const z of [-260,-130,0,130,260]){addStreetLight(world,x+18,z+18);addStreetLight(world,x-18,z-18)}for(const x of [-235,235])for(const z of [-190,0,190])addBillboard(world,x,z,0xffcc42);addParkingGarage(world,roadMat,lineMat,edgeMat)}
 else if(theme==='test'){
  const coneMat=new THREE.MeshStandardMaterial({color:0xff7b1c,roughness:.55}),blue=new THREE.MeshStandardMaterial({color:0x35d9ff,emissive:0x0b5d70,emissiveIntensity:1.2}),red=new THREE.MeshStandardMaterial({color:0xff3030,emissive:0x5a0000,emissiveIntensity:1}),white=new THREE.MeshStandardMaterial({color:0xf5f1df,roughness:.65}),kerbRed=new THREE.MeshStandardMaterial({color:0xd82929,roughness:.72}),kerbWhite=new THREE.MeshStandardMaterial({color:0xf4f4ee,roughness:.72}),grassRunoff=new THREE.MeshStandardMaterial({color:0x4d7b4b,roughness:1}),gravel=new THREE.MeshStandardMaterial({color:0x9c8b67,roughness:1}),pitMat=new THREE.MeshStandardMaterial({color:0x30363a,roughness:.86});
  addBox(world,-70,.13,-286,540,.08,38,gravel);addBox(world,260,.13,-262,170,.08,44,gravel);addBox(world,342,.13,126,210,.08,52,gravel);addBox(world,-370,.13,-28,132,.08,48,gravel);
  addBox(world,-210,.16,-286,330,.12,16,pitMat);addBox(world,-210,.37,-274,330,.08,1.2,white);addTextSign(world,-342,5.5,-304,'PIT LANE',0);addGrandstand(world,-150,-314,Math.PI/2);addGrandstand(world,30,-314,Math.PI/2);
  for(let x=-360;x<=260;x+=40){addBox(world,x,.35,-242,7,.12,1.1,(Math.floor(x/40)%2?kerbRed:kerbWhite));addBox(world,x,.35,-258,7,.12,1.1,(Math.floor(x/40)%2?kerbWhite:kerbRed))}
  const kerbs=[[-445,-175,0],[-385,-80,.7],[-95,130,-.7],[-8,32,.8],[138,-18,-.7],[72,-102,.5],[250,150,.2],[365,35,-.2]];
  for(const [x,z,rot] of kerbs)for(let i=-3;i<=3;i++)addBox(world,x+i*3*Math.cos(rot),.36,z+i*3*Math.sin(rot),5,.1,1.1,i%2?kerbRed:kerbWhite,rot);
  for(const [x,z,text,rot] of [[-320,-214,'300',0],[-250,-214,'200',0],[-180,-214,'100',0],[315,-165,'BRAKE',.55],[330,95,'FAST SWEEPER',Math.PI/2],[-70,170,'ESSES',-.7],[30,-65,'CHICANE',-.5],[-430,-112,'HAIRPIN',-1.2]])addTextSign(world,x,5,z,text,rot);
  for(const x of [-365,-330,-295])addBox(world,x,.38,-205,1,.08,10,blue);
  for(const x of [15,42,69,96]){addBox(world,x,.35,-72,.75,.7,.75,coneMat,0,true);addBox(world,x,.35,-122,.75,.7,.75,coneMat,0,true)}
  for(let i=0;i<80;i++){const x=-500+rand()*1000,z=-330+rand()*660;if(clearForScenery(x,z,12))addBox(world,x,.09,z,8+rand()*18,.08,8+rand()*18,rand()>.72?grassRunoff:gravel,rand()*Math.PI)}
  for(let i=0;i<28;i++){const x=-500+rand()*1000,z=-330+rand()*660;if(clearForScenery(x,z,16))addRock(world,x,z,.5+rand()*1.1,0x59605c)}
 }
 else if(theme==='malibu'){const oceanMat=new THREE.MeshStandardMaterial({color:0x2d87aa,roughness:.42,metalness:.08}),sandMat=new THREE.MeshStandardMaterial({color:0xd4bd83,roughness:1}),chaparral=new THREE.MeshStandardMaterial({color:0x6f7142,roughness:1}),cliffMat=new THREE.MeshStandardMaterial({color:0x9a704b,roughness:1});addBox(world,-310,.04,0,190,.08,950,oceanMat);addBox(world,-205,.08,0,32,.08,900,sandMat);for(let i=0;i<120;i++){const x=-170+rand()*390,z=-235+rand()*470;if(rand()>.62)addPalm(world,x,z,.55+rand()*.7);else if(rand()>.42)addMalibuHouse(world,x,z,rand()*Math.PI);else addDesertScrub(world,x,z,.55+rand()*1.2)}for(let i=0;i<32;i++){const a=i/32*Math.PI*2,r=385+rand()*90,h=35+rand()*85,m=new THREE.Mesh(new THREE.ConeGeometry(28+rand()*42,h,7),cliffMat);m.position.set(Math.cos(a)*r,h/2-2,Math.sin(a)*r);m.rotation.y=rand()*Math.PI;world.add(m);addCollider(m.position.x,m.position.z,26)}for(let i=0;i<70;i++)addRock(world,-80+rand()*360,-230+rand()*460,.7+rand()*2.4,0x8e694a);for(let i=0;i<80;i++){const x=-120+rand()*340,z=-230+rand()*460;if(clearForScenery(x,z,4))addBox(world,x,.18,z,1+rand()*2,.18,1+rand()*2,chaparral,rand()*Math.PI)}}
 else{for(let i=0;i<210;i++){const angle=rand()*Math.PI*2,r=130+rand()*360,x=Math.cos(angle)*r,z=Math.sin(angle)*r;if(rand()>.72)addTree(world,x,z,.65+rand()*1.25,'mountain');else if(rand()>.44)addDesertScrub(world,x,z,.7+rand()*1.6);else addRock(world,x,z,.8+rand()*3,0x6f664f)}const peakMat=new THREE.MeshStandardMaterial({color:0x786d58,roughness:1}),snowMat=new THREE.MeshStandardMaterial({color:0xdfe6e2,roughness:.85});for(let i=0;i<34;i++){const a=i/34*Math.PI*2,r=375+rand()*105,h=55+rand()*95,mountain=new THREE.Mesh(new THREE.ConeGeometry(32+rand()*48,h,7),peakMat);mountain.position.set(Math.cos(a)*r,h/2-2,Math.sin(a)*r);mountain.rotation.y=rand()*Math.PI;world.add(mountain);addCollider(mountain.position.x,mountain.position.z,30);if(rand()>.35){const cap=new THREE.Mesh(new THREE.ConeGeometry(12+rand()*18,h*.18,7),snowMat);cap.position.set(mountain.position.x,h*.9,mountain.position.z);cap.rotation.y=mountain.rotation.y;world.add(cap)}}for(let i=0;i<12;i++){const x=-240+rand()*480,z=-240+rand()*480;if(clearForScenery(x,z,18))addBox(world,x,.12,z,24,.18,18,new THREE.MeshStandardMaterial({color:0x3b5e82,roughness:.55,metalness:.05}),rand()*Math.PI)}}
 if(player)world.add(player);
 if(course.drag){cpuCar=createCar(0xff3030,false,cpuOpponent);cpuCar.name='CPU';addFloatingLabel(cpuCar,'CPU');world.add(cpuCar)}else cpuCar=null;
 spawnTraffic();resetPlayer();resetCPU();
}

player=createCar(0xffa51f,true);world.add(player);const motion={speed:0,yaw:0,steer:0,progress:0,lastProgress:0,raceTime:0,racing:false,topSpeed:0,distance:0};let cpuRaceLive=false,currentWeather='day',raceResultShown=false,parkingStillTime=0;const smokePuffs=[],smokeMat=new THREE.MeshBasicMaterial({color:0xd8d8d8,transparent:true,opacity:.28,depthWrite:false});
const dragFinishMeters=1609.3,raceStats={player60:null,cpu60:null,playerMile:null,cpuMile:null,playerMileSpeed:0,cpuMileSpeed:0};
function resetRaceStats(){raceStats.player60=null;raceStats.cpu60=null;raceStats.playerMile=null;raceStats.cpuMile=null;raceStats.playerMileSpeed=0;raceStats.cpuMileSpeed=0;raceResultShown=false;document.querySelector('#raceResults')?.classList.remove('open')}
const cameraModes=['CHASE','FAR CHASE','HOOD','CINEMATIC','REAR VIEW'];let cameraMode=0;const cameraControl={yaw:0,pitch:.25,zoom:1,drag:false,lastX:0,lastY:0,manual:false};
function resetCameraAngle(){
 const defaults=[{yaw:0,pitch:.25,zoom:1},{yaw:0,pitch:.33,zoom:1},{yaw:0,pitch:.06,zoom:1},{yaw:-.72,pitch:.22,zoom:1},{yaw:0,pitch:.22,zoom:1}][cameraMode]||{yaw:0,pitch:.25,zoom:1};
 cameraControl.yaw=defaults.yaw;cameraControl.pitch=defaults.pitch;cameraControl.zoom=defaults.zoom;cameraControl.manual=false;cameraControl.drag=false;
}
function cycleCamera(){cameraMode=(cameraMode+1)%cameraModes.length;resetCameraAngle();document.querySelector('#cameraButton').textContent=`CAMERA: ${cameraModes[cameraMode]}`}
canvas.addEventListener('pointerdown',e=>{cameraControl.drag=true;cameraControl.lastX=e.clientX;cameraControl.lastY=e.clientY;cameraControl.manual=true;canvas.setPointerCapture?.(e.pointerId)});
addEventListener('pointerup',e=>{cameraControl.drag=false;canvas.releasePointerCapture?.(e.pointerId)});
addEventListener('pointermove',e=>{if(!cameraControl.drag)return;const dx=e.clientX-cameraControl.lastX,dy=e.clientY-cameraControl.lastY;cameraControl.lastX=e.clientX;cameraControl.lastY=e.clientY;cameraControl.yaw-=dx*.006;cameraControl.pitch=THREE.MathUtils.clamp(cameraControl.pitch-dy*.004,-.18,1.05)});
canvas.addEventListener('wheel',e=>{e.preventDefault();cameraControl.zoom=THREE.MathUtils.clamp(cameraControl.zoom+Math.sign(e.deltaY)*.08,.62,1.75)},{passive:false});
canvas.addEventListener('contextmenu',e=>e.preventDefault());
let audioCtx,audioGain,audioOsc1,audioOsc2,audioFilter,radioOn=false,radioNodes=[],radioBeatTimer=null,radioStep=0,lastGear=1,lastShiftAt=0;const powertrainText=`${selected.brand||''} ${selected.name||''} ${selected.carClass||''} ${selected.fuel||''} ${selected.engine||''}`.toLowerCase(),engineLiters=num(powertrainText.match(/([\d.]+)l/)?.[1],2),cylinders=num(powertrainText.match(/(?:v|i|flat-)?(\d{1,2})/)?.[1],engineLiters>=4?8:4);
function engineSoundProfile(){
 const text=powertrainText,hp=specs.powerHp,top=specs.topMph;
 if(/electric|battery|motor| ev\b/.test(text))return{kind:'ev',label:'EV WHINE',osc1:'sine',osc2:'triangle',filter:4200,base:85,range:1180,gain:.045,shift:false};
 if(/hypercar|supercar|v10|v12|w16|ferrari|lamborghini|mclaren|bugatti|pagani|koenigsegg/.test(text)||hp>=650||top>=195)return{kind:'supercar',label:'SHARP SUPERCAR',osc1:'sawtooth',osc2:'triangle',filter:2100,base:720,range:6400,gain:.12,shift:true};
 if(/v8|muscle|mustang|camaro|challenger|charger|corvette/.test(text)||engineLiters>=4)return{kind:'v8',label:'DEEP V8 RUMBLE',osc1:'sawtooth',osc2:'sawtooth',filter:950,base:560,range:5000,gain:.15,shift:true};
 if(/i3|i4|flat-4|1\.[0-9]l|2\.[0-4]l|hatch|economy|compact/.test(text)||engineLiters<=2.4)return{kind:'small',label:'BUZZY SMALL ENGINE',osc1:'square',osc2:'sawtooth',filter:1600,base:850,range:6200,gain:.09,shift:true};
 return{kind:'standard',label:'SPORT ENGINE',osc1:'sawtooth',osc2:'sine',filter:1350,base:700,range:5600,gain:.105,shift:true};
}
const engineProfile=engineSoundProfile(),isElectric=engineProfile.kind==='ev';
const radioPlayer=document.querySelector('#radioPlayer');
function ensureAudioContext(){if(audioCtx){if(audioCtx.state==='suspended')audioCtx.resume();return audioCtx}const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return null;audioCtx=new Audio();return audioCtx}
function startAudio(){if(audioOsc1){if(audioCtx?.state==='suspended')audioCtx.resume();return}if(!ensureAudioContext())return;audioGain=audioCtx.createGain();audioFilter=audioCtx.createBiquadFilter();audioFilter.type='lowpass';audioFilter.frequency.value=engineProfile.filter;audioOsc1=audioCtx.createOscillator();audioOsc2=audioCtx.createOscillator();audioOsc1.type=engineProfile.osc1;audioOsc2.type=engineProfile.osc2;audioOsc1.connect(audioFilter);audioOsc2.connect(audioFilter);audioFilter.connect(audioGain);audioGain.connect(audioCtx.destination);audioGain.gain.value=.0001;audioOsc1.start();audioOsc2.start()}
function playShiftNoise(){
 if(!audioCtx||!engineProfile.shift)return;
 const now=audioCtx.currentTime,blip=audioCtx.createOscillator(),gain=audioCtx.createGain(),filter=audioCtx.createBiquadFilter();
 blip.type=engineProfile.kind==='v8'?'sawtooth':'square';blip.frequency.setValueAtTime(engineProfile.kind==='v8'?170:230,now);blip.frequency.exponentialRampToValueAtTime(engineProfile.kind==='v8'?70:100,now+.12);
 filter.type='bandpass';filter.frequency.value=engineProfile.kind==='v8'?500:820;filter.Q.value=2.4;
 gain.gain.setValueAtTime(.0001,now);gain.gain.exponentialRampToValueAtTime(engineProfile.kind==='v8'?.2:.13,now+.018);gain.gain.exponentialRampToValueAtTime(.0001,now+.16);
 blip.connect(filter);filter.connect(gain);gain.connect(audioCtx.destination);blip.start(now);blip.stop(now+.18);
}
function stopRadio(){clearInterval(radioBeatTimer);radioBeatTimer=null;radioPlayer.pause();for(const node of radioNodes){try{node.stop?.()}catch(error){}try{node.disconnect?.()}catch(error){}}radioNodes=[]}
function startRadio(){
 if(!ensureAudioContext())return;stopRadio();radioOn=true;radioStep=0;
 const master=audioCtx.createGain(),filter=audioCtx.createBiquadFilter(),bass=audioCtx.createOscillator(),lead=audioCtx.createOscillator(),harmony=audioCtx.createOscillator();
 master.gain.value=.09;filter.type='lowpass';filter.frequency.value=1650;filter.Q.value=.8;
 bass.type='triangle';lead.type='sawtooth';harmony.type='sine';
 bass.connect(master);lead.connect(filter);harmony.connect(filter);filter.connect(master);master.connect(audioCtx.destination);
 bass.start();lead.start();harmony.start();radioNodes=[bass,lead,harmony,filter,master];
 const chords=[[130.8,196,261.6,329.6],[146.8,220,293.7,349.2],[164.8,246.9,329.6,392],[196,261.6,329.6,440]];
 document.querySelector('#radioAlbum').textContent='INFINITE RADIO';document.querySelector('#radioTrack').textContent='Built-in driving music';
 radioBeatTimer=setInterval(()=>{if(!radioOn)return;const now=audioCtx.currentTime,chord=chords[Math.floor(radioStep/8)%chords.length],note=chord[radioStep%chord.length];bass.frequency.setTargetAtTime(chord[0]/2,now,.04);lead.frequency.setTargetAtTime(note,now,.035);harmony.frequency.setTargetAtTime(note*1.5,now,.05);master.gain.setTargetAtTime(.16,now,.02);master.gain.setTargetAtTime(.08,now+.16,.05);radioStep++},260);
}
function setRadioButton(){const btn=document.querySelector('#radioButton');btn.textContent=radioOn?'RADIO: ON':'RADIO: OFF';btn.classList.toggle('active',radioOn)}
function toggleRadio(){radioOn=!radioOn;if(radioOn)startRadio();else{stopRadio();document.querySelector('#radioAlbum').textContent='OFF';document.querySelector('#radioTrack').textContent='Click RADIO to play built-in music'}setRadioButton()}
function updateAudio(throttle){
 if(!audioCtx)return;const ratio=Math.min(Math.abs(motion.speed)/(specs.topMph*.44704),1),now=audioCtx.currentTime;
 if(isElectric){audioOsc1.frequency.setTargetAtTime(engineProfile.base+ratio*engineProfile.range+throttle*80,now,.04);audioOsc2.frequency.setTargetAtTime(engineProfile.base*1.8+ratio*engineProfile.range*1.35,now,.05);audioGain.gain.setTargetAtTime(.016+throttle*engineProfile.gain,now,.08);return}
 const gears=6,gear=Math.max(1,Math.min(gears,Math.floor(ratio*gears)+1)),gearProgress=(ratio*gears)%1,idle=engineLiters>=4?650:850,range=engineLiters>=4?6100:7600;
 if(gear!==lastGear&&motion.speed>7&&throttle&&now-lastShiftAt>.28){playShiftNoise();lastShiftAt=now}
 lastGear=gear;
 const rpm=engineProfile.base+gearProgress*engineProfile.range+throttle*420,firing=rpm/60*Math.max(2,cylinders/2);
 audioFilter.frequency.setTargetAtTime(engineProfile.filter,now,.06);
 audioOsc1.frequency.setTargetAtTime(firing,now,.045);audioOsc2.frequency.setTargetAtTime(firing*.5,now,.055);
 audioGain.gain.setTargetAtTime(.018+throttle*engineProfile.gain,now,.06);
}
function updateCarEffects(dt,brake,left,right){
 const braking=brake&&Math.abs(motion.speed)>2,night=currentWeather==='night'||currentWeather==='rain';
 player.userData.brakeLights?.forEach(l=>l.material.emissiveIntensity=braking?7:2);
 player.userData.headLights?.forEach(l=>l.material.emissiveIntensity=night?6:3);
 if((braking||Math.abs(motion.steer)>.36)&&Math.abs(motion.speed)>12&&smokePuffs.length<38){
  const back=new THREE.Vector3(-Math.sin(motion.yaw)*1.8,0,-Math.cos(motion.yaw)*1.8),side=(Math.random()-.5)*1.6,p=new THREE.Mesh(new THREE.SphereGeometry(.35+Math.random()*.25,8,6),smokeMat.clone());
  p.position.copy(player.position).add(back).add(new THREE.Vector3(Math.cos(motion.yaw)*side,.15,-Math.sin(motion.yaw)*side));p.userData.life=.75;world.add(p);smokePuffs.push(p);
 }
 for(let i=smokePuffs.length-1;i>=0;i--){const s=smokePuffs[i];s.userData.life-=dt;s.scale.multiplyScalar(1+dt*1.8);s.position.y+=dt*.7;s.material.opacity=Math.max(0,s.userData.life*.28);if(s.userData.life<=0){world.remove(s);smokePuffs.splice(i,1)}}
}
function resetPlayer(){if(!curve)return;if(course.drag){player.position.set(-5,.3,-115);motion.yaw=0;player.rotation.y=0}else{const p=curve.getPointAt(.01),t=curve.getTangentAt(.01);player.position.set(p.x,.3,p.z);motion.yaw=Math.atan2(t.x,t.z);player.rotation.y=motion.yaw}motion.speed=0;motion.progress=.01;motion.lastProgress=.01;motion.raceTime=0;motion.topSpeed=0;motion.distance=0;resetCPU();resetRaceStats()}
function resetCPU(){cpuMotion={speed:0,distance:0,topSpeed:0};if(!cpuCar||!course.drag)return;cpuCar.position.set(5,.3,-115);cpuCar.rotation.set(0,0,0)}
function checkWorldAchievements(dt){
 if(course.theme!=='city')return;
 const surfaceHeight=roadHeightAt(player.position.x,player.position.z),mph=Math.abs(motion.speed)*2.23694;
 if(surfaceHeight>2&&mph>8)completeAchievement('drive_ramp','Achievement: drove the parking garage ramp');
 const inGarage=player.position.x>-234&&player.position.x<-156&&player.position.z>152&&player.position.z<238&&surfaceHeight>=0;
 if(inGarage&&mph<1.5)parkingStillTime+=dt;else parkingStillTime=0;
 if(parkingStillTime>1.15)completeAchievement('park_garage','Achievement: parked in the parking garage');
}
function nearestTrack(position){let best=Infinity,index=0;for(let i=0;i<trackSamples.length;i++){const dx=position.x-trackSamples[i].x,dz=position.z-trackSamples[i].z,d=dx*dx+dz*dz;if(d<best){best=d;index=i}}return{distance:Math.sqrt(best),progress:index/trackSamples.length}}
function resolveCollisions(){
 const carRadius=1.65;
 for(let pass=0;pass<3;pass++)for(const c of colliders){
  let nx=0,nz=0,push=0,hit=false;
  if(c.w&&c.d){
   const halfW=c.w*.5+carRadius,halfD=c.d*.5+carRadius,dx=player.position.x-c.x,dz=player.position.z-c.z,ox=halfW-Math.abs(dx),oz=halfD-Math.abs(dz);
   if(ox>0&&oz>0){hit=true;if(ox<oz){nx=Math.sign(dx)||1;nz=0;push=ox+.08}else{nx=0;nz=Math.sign(dz)||1;push=oz+.08}}
  }else{
   const dx=player.position.x-c.x,dz=player.position.z-c.z,dist=Math.hypot(dx,dz),min=carRadius+c.r;
   if(dist<min){hit=true;nx=dist>.001?dx/dist:-Math.sin(motion.yaw);nz=dist>.001?dz/dist:-Math.cos(motion.yaw);push=min-dist+.08}
  }
  if(hit){
   player.position.x+=nx*push;player.position.z+=nz*push;
   const forwardX=Math.sin(motion.yaw),forwardZ=Math.cos(motion.yaw),into=forwardX*nx+forwardZ*nz;
   if(motion.speed*into<0)motion.speed*=.08;else motion.speed*=.65;
  }
 }
}
function resolveTrafficCollisions(){
 if(course.drag)return;
 const px=player.position.x,pz=player.position.z;
 for(const car of trafficCars){
  const dx=px-car.position.x,dz=pz-car.position.z,dist=Math.hypot(dx,dz),min=3.2;
  if(dist<min&&dist>.001){
   const nx=dx/dist,nz=dz/dist,push=min-dist+.05;player.position.x+=nx*push;player.position.z+=nz*push;
   const forwardX=Math.sin(motion.yaw),forwardZ=Math.cos(motion.yaw),hit=forwardX*nx+forwardZ*nz;motion.speed*=hit<0?.18:.55;
   car.userData.traffic.t-=car.userData.traffic.speed*.35;
  }
 }
}
function dragForceStep(state,carSpecs,dt,throttle=1){
 const g=9.81,power=carSpecs.powerHp*745.7,mass=Math.max(650,carSpecs.massKg),maxSpeed=carSpecs.topMph*.44704,highSpeedAid=1+Math.min(Math.abs(state.speed)/89.4,1)*.95,grip=(.75+carSpecs.handling/100*.65)*highSpeedAid,rolling=mass*g*.015,usablePower=power*.88,rho=1.225,calibratedCdA=THREE.MathUtils.clamp((usablePower/Math.max(maxSpeed,1)-mass*g*.015)/(.5*rho*maxSpeed*maxSpeed),.08,1.4),drag=.5*rho*calibratedCdA*state.speed*Math.abs(state.speed),traction=grip*mass*g*(carSpecs.drive==='AWD'?1.08:.92),engineForce=Math.min(usablePower/Math.max(Math.abs(state.speed),5),traction);
 const force=throttle*engineForce-Math.sign(state.speed||1)*(drag+rolling);
 state.speed=THREE.MathUtils.clamp(state.speed+force/mass*dt,0,maxSpeed);
 state.distance+=state.speed*dt;state.topSpeed=Math.max(state.topSpeed,state.speed*2.23694);
 return engineForce;
}
function updateCPU(dt){
 if(!course.drag||!cpuCar||!cpuRaceLive)return;
 const opponentSpecs=specsFor(cpuOpponent);dragForceStep(cpuMotion,opponentSpecs,dt,1);
 cpuCar.position.x=5;cpuCar.position.z+=cpuMotion.speed*dt;cpuCar.position.y=THREE.MathUtils.lerp(cpuCar.position.y,.3+roadHeightAt(cpuCar.position.x,cpuCar.position.z),Math.min(1,dt*8));cpuCar.rotation.y=0;
 if(cpuCar.position.z>2350)cpuCar.position.z-=4000;else if(cpuCar.position.z<-2050)cpuCar.position.z+=4000;
 cpuCar.userData.wheels?.forEach(w=>{w.spin.rotation.y-=cpuMotion.speed*dt/.39;if(w.front)w.steer.rotation.y=0});
}
function checkRaceMilestones(){
 if(!course.drag||!cpuRaceLive||raceResultShown)return;
 if(!raceStats.player60&&Math.abs(motion.speed)*2.23694>=60)raceStats.player60=motion.raceTime;
 if(!raceStats.cpu60&&cpuMotion.speed*2.23694>=60)raceStats.cpu60=motion.raceTime;
 if(!raceStats.playerMile&&motion.distance>=dragFinishMeters){raceStats.playerMile=motion.raceTime;raceStats.playerMileSpeed=Math.abs(motion.speed)*2.23694;completeAchievement('finished_one_mile','Achievement: finished a 1 mile drag')}
 if(!raceStats.cpuMile&&cpuMotion.distance>=dragFinishMeters){raceStats.cpuMile=motion.raceTime;raceStats.cpuMileSpeed=cpuMotion.speed*2.23694}
 if(raceStats.playerMile&&raceStats.cpuMile)showRaceResults();
}
function showRaceResults(){
 raceResultShown=true;cpuRaceLive=false;
 const playerWin=raceStats.playerMile<=raceStats.cpuMile,winner=playerWin?'YOU WIN':'CPU WINS',gap=Math.abs(motion.distance-cpuMotion.distance),details=[
  `Your 0–60: ${raceStats.player60?formatTime(raceStats.player60):'N/A'}`,
  `CPU 0–60: ${raceStats.cpu60?formatTime(raceStats.cpu60):'N/A'}`,
  `Your 1 mile: ${formatTime(raceStats.playerMile)} @ ${Math.round(raceStats.playerMileSpeed)} MPH`,
  `CPU 1 mile: ${formatTime(raceStats.cpuMile)} @ ${Math.round(raceStats.cpuMileSpeed)} MPH`,
  `Distance gap right now: ${Math.round(gap)} M`,
  `Top speeds: You ${Math.round(motion.topSpeed)} MPH / CPU ${Math.round(cpuMotion.topSpeed)} MPH`
 ].join('\n');
 if(playerWin){awardInficoins('Race win');completeAchievement('first_drag_win','Achievement: first drag win')}
 document.querySelector('#resultWinner').textContent=winner;document.querySelector('#resultDetails').textContent=details;document.querySelector('#raceResults').classList.add('open');
}
function restartDragRace(){document.querySelector('#courseSelect').value='drag';buildWorld('drag');motion.racing=false;cpuRaceLive=false;startCountdown('DRAG RACE',()=>{motion.racing=true;cpuRaceLive=true})}
function pickRandomCpu(){const brands=Object.keys(cpuCatalog).filter(b=>cpuCatalog[b]?.length),brand=brands[Math.floor(Math.random()*brands.length)],cars=cpuCatalog[brand],car=cars[Math.floor(Math.random()*cars.length)];cpuBrand=brand;cpuOpponent=fullCar(brand,car);document.querySelector('#courseSelect').value='drag';buildWorld('drag');updateCompareCard();setCpuPreviewImage();startCountdown('RANDOM CPU',()=>{motion.racing=true;cpuRaceLive=true})}
function updatePhysics(dt){
 const track=nearestTrack(player.position),offroad=!course.drag&&track.distance>roadWidth*.53,throttle=(keys.KeyW||keys.ArrowUp)?1:0,brake=(keys.KeyS||keys.ArrowDown)?1:0,left=(keys.KeyA||keys.ArrowLeft)?1:0,right=(keys.KeyD||keys.ArrowRight)?1:0,handbrake=keys.Space?1:0;
 const g=9.81,power=specs.powerHp*745.7,mass=Math.max(650,specs.massKg),maxSpeed=specs.topMph*.44704,highSpeedAid=1+Math.min(Math.abs(motion.speed)/89.4,1)*.95,grip=(.75+specs.handling/100*.65)*highSpeedAid*(offroad?.62:1),rolling=mass*g*(offroad?.052:.015),usablePower=power*.88,rho=1.225,calibratedCdA=THREE.MathUtils.clamp((usablePower/Math.max(maxSpeed,1)-mass*g*.015)/(.5*rho*maxSpeed*maxSpeed),.08,1.4),drag=.5*rho*calibratedCdA*motion.speed*Math.abs(motion.speed),traction=grip*mass*g*(specs.drive==='AWD'?1.08:.92),engineForce=Math.min(usablePower/Math.max(Math.abs(motion.speed),5),traction);
 let force=throttle*engineForce-Math.sign(motion.speed||1)*(drag+rolling);
 if(brake&&motion.speed>.45)force-=mass*(5+specs.braking*.065);
 else if(brake)force-=engineForce*.48;
 if(throttle&&motion.speed<-.45)force+=mass*(5+specs.braking*.045);
 if(!throttle&&!brake&&Math.abs(motion.speed)<.35)motion.speed=0;else motion.speed+=force/mass*dt;
 const reverseMax=Math.min(18,Math.max(9,maxSpeed*.18));motion.speed=THREE.MathUtils.clamp(motion.speed,-reverseMax,maxSpeed);
 const speedRatio=Math.min(Math.abs(motion.speed)/Math.max(maxSpeed,1),1),steerInput=left-right,fastAssist=Math.min(Math.abs(motion.speed)/89.4,1),steerLimit=.72-.16*speedRatio+.12*fastAssist,steerTarget=steerInput*steerLimit,steerRate=steerInput?15.5:26;motion.steer=THREE.MathUtils.lerp(motion.steer,steerTarget,Math.min(1,dt*steerRate));if(!steerInput&&Math.abs(motion.steer)<.018)motion.steer=0;const yawIdeal=motion.speed/(2.55+.5*speedRatio)*Math.tan(motion.steer),yawGrip=grip*g*(2.15+.75*fastAssist)/Math.max(Math.abs(motion.speed),4.2);motion.yaw+=THREE.MathUtils.clamp(yawIdeal,-yawGrip,yawGrip)*dt*(handbrake?1.25:1);player.rotation.y=motion.yaw;player.rotation.z=THREE.MathUtils.lerp(player.rotation.z,-motion.steer*Math.min(Math.abs(motion.speed)/42,1)*.032,dt*(steerInput?7:11));player.position.x+=Math.sin(motion.yaw)*motion.speed*dt;player.position.z+=Math.cos(motion.yaw)*motion.speed*dt;player.position.y=THREE.MathUtils.lerp(player.position.y,.3+roadHeightAt(player.position.x,player.position.z),Math.min(1,dt*8));resolveCollisions();resolveTrafficCollisions();if(portal&&Math.hypot(player.position.x-portal.x,player.position.z-portal.z)<portal.r){document.querySelector('#courseSelect').value=portal.target;motion.raceTime=0;motion.racing=true;buildWorld(portal.target);return}if(course.drag&&player.position.z>2350){player.position.z-=4000;camera.position.z-=4000}else if(course.drag&&player.position.z<-2050){player.position.z+=4000;camera.position.z+=4000}
 player.userData.wheels.forEach(w=>{w.spin.rotation.y-=motion.speed*dt/.39;if(w.front)w.steer.rotation.y=motion.steer});motion.lastProgress=motion.progress;motion.progress=track.progress;motion.distance+=Math.abs(motion.speed)*dt;motion.topSpeed=Math.max(motion.topSpeed,Math.abs(motion.speed)*2.23694);if(motion.topSpeed>=60)completeAchievement('hit_60_mph','Achievement: reached 60 MPH');if(motion.topSpeed>=150)completeAchievement('hit_150_mph','Achievement: reached 150 MPH');if(motion.topSpeed>=200)completeAchievement('hit_200_mph','Achievement: reached 200 MPH');checkWorldAchievements(dt);updateAudio(throttle);updateCarEffects(dt,brake,left,right);
 if(motion.racing)motion.raceTime+=dt;document.querySelector('#speed').textContent=Math.round(Math.abs(motion.speed)*2.23694);document.querySelector('#raceTime').textContent=formatTime(motion.raceTime);
 document.querySelector('#lap').textContent=course.drag?`${Math.round(motion.distance)} M`:'FREE ROAM';document.querySelector('#lapLabel').textContent=course.drag?'DISTANCE':'MODE';document.querySelector('#position').textContent=course.drag?`CPU ${Math.round(cpuMotion.speed*2.23694)} MPH`:`${Math.round(motion.topSpeed)} MPH`;document.querySelector('#physicsReadout').innerHTML=`${selected.physicsEstimated?'ESTIMATED':'PUBLISHED'} Â· ${engineProfile.label}<br>${Math.round(specs.powerHp)} HP Â· ${(engineForce/1000).toFixed(1)} KN FORCE<br>${grip.toFixed(2)} GRIP Â· ${offroad?'OFF ROAD':'ON ROAD'}${course.drag?`<br>CPU: ${cpuOpponent.brand} ${cpuOpponent.name} · ${Math.round(cpuMotion.distance)} M`:''}`;
}
function updateCamera(dt){
 const carForward=new THREE.Vector3(Math.sin(motion.yaw),0,Math.cos(motion.yaw)),orbitYaw=motion.yaw+cameraControl.yaw,orbitForward=new THREE.Vector3(Math.sin(orbitYaw),0,Math.cos(orbitYaw)),orbitRight=new THREE.Vector3(Math.cos(orbitYaw),0,-Math.sin(orbitYaw));
 let target,look,smooth=.001;
 if(cameraMode===2){
  const lookYaw=motion.yaw+cameraControl.yaw,lookDir=new THREE.Vector3(Math.sin(lookYaw),0,Math.cos(lookYaw));
  target=player.position.clone().addScaledVector(carForward,1.35).add(new THREE.Vector3(0,1.25,0));
  look=target.clone().addScaledVector(lookDir,30).add(new THREE.Vector3(0,cameraControl.pitch*8,0));smooth=.00001;
 }else if(cameraMode===4){
  target=player.position.clone().addScaledVector(carForward,8.5*cameraControl.zoom).add(new THREE.Vector3(0,3.9+(cameraControl.pitch-.22)*4.5,0));
  look=player.position.clone().addScaledVector(carForward,-8).add(new THREE.Vector3(0,1.15,0));smooth=.0005;
 }else{
  const baseDistance=cameraMode===1?16:cameraMode===3?11:9,baseHeight=cameraMode===1?7.5:cameraMode===3?4.2:4.6,distance=baseDistance*cameraControl.zoom,height=baseHeight+(cameraControl.pitch-.25)*5.2;
  target=player.position.clone().addScaledVector(orbitForward,-distance).add(new THREE.Vector3(0,height,0));
  if(cameraMode===3&&!cameraControl.manual)target.addScaledVector(orbitRight,7);
  look=player.position.clone().addScaledVector(carForward,cameraMode===1?7:5).add(new THREE.Vector3(0,1.1+cameraControl.pitch*1.4,0));
 }
 camera.position.lerp(target,1-Math.pow(smooth,dt));camera.lookAt(look);
}
function formatTime(t){const m=Math.floor(t/60),s=Math.floor(t%60),ms=Math.floor(t%1*1000);return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}.${String(ms).padStart(3,'0')}`}
function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix()}addEventListener('resize',resize);resize();
function updateCompareCard(){
 const cpu=specsFor(cpuOpponent),text=`YOU: ${selected.brand} ${selected.name}
${Math.round(specs.powerHp)} HP · ${specs.topMph} MPH · ${specs.zero}s 0–60
CPU: ${cpuOpponent.brand} ${cpuOpponent.name}
${Math.round(cpu.powerHp)} HP · ${cpu.topMph} MPH · ${cpu.zero}s 0–60`;
 document.querySelector('#compareText').textContent=text;
}
function applyWeather(name=currentWeather){
 currentWeather=name;document.body.classList.toggle('rainy',name==='rain');
 const settings={day:{sky:course.sky,hemi:3.2,sun:3.6,exposure:1.28,fog:course.sky},sunset:{sky:0xd08a52,hemi:2.2,sun:2.7,exposure:1.12,fog:0xc07950},night:{sky:0x070b16,hemi:.8,sun:.45,exposure:.82,fog:0x070b16},rain:{sky:0x66717a,hemi:1.4,sun:.8,exposure:.9,fog:0x56616b}}[name]||{};
 scene.background=new THREE.Color(settings.sky);if(scene.fog)scene.fog.color=new THREE.Color(settings.fog);hemi.intensity=settings.hemi;sun.intensity=settings.sun;renderer.toneMappingExposure=settings.exposure;
}
function updateGauges(){
 const mph=Math.round(Math.abs(motion.speed)*2.23694),ratio=Math.min(mph/Math.max(specs.topMph,1),1),rpm=Math.round((isElectric?900:800)+ratio*(isElectric?9000:7200));
 document.querySelector('#gaugeSpeed').textContent=mph;document.querySelector('#gaugeRpm').textContent=rpm;
 document.querySelector('#speedNeedle').style.transform=`rotate(${-130+ratio*260}deg)`;document.querySelector('#rpmNeedle').style.transform=`rotate(${-130+Math.min(rpm/(isElectric?10000:8000),1)*260}deg)`;
}
function updateMinimap(){
 const canvas=document.querySelector('#minimap'),ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height,scale=course.drag?.035:.28;ctx.clearRect(0,0,w,h);ctx.fillStyle='#07090a';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#ffffff35';ctx.lineWidth=2;ctx.beginPath();
 trackSamples.forEach((p,i)=>{const x=w/2+(p.x-player.position.x)*scale,z=h/2+(p.z-player.position.z)*scale;if(i)ctx.lineTo(x,z);else ctx.moveTo(x,z)});ctx.stroke();
 for(const car of trafficCars){const x=w/2+(car.position.x-player.position.x)*scale,z=h/2+(car.position.z-player.position.z)*scale;ctx.fillStyle='#8f969b';ctx.fillRect(x-2,z-2,4,4)}
 if(cpuCar){const x=w/2+(cpuCar.position.x-player.position.x)*scale,z=h/2+(cpuCar.position.z-player.position.z)*scale;ctx.fillStyle='#ff3030';ctx.beginPath();ctx.arc(x,z,4,0,Math.PI*2);ctx.fill()}
 ctx.fillStyle='#ffb02e';ctx.beginPath();ctx.arc(w/2,h/2,5,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font='bold 10px Inter';ctx.fillText(course.drag?'DRAG':course.theme==='test'?'TEST':'CITY',8,16);
}
function renderCpuPicker(){
 const search=(document.querySelector('#cpuSearch')?.value||'').toLowerCase(),brandBox=document.querySelector('#cpuBrands'),modelBox=document.querySelector('#cpuModels');if(!brandBox||!modelBox)return;
 const brands=Object.keys(cpuCatalog).sort(),visibleBrands=brands.filter(brand=>brand.toLowerCase().includes(search)||cpuCatalog[brand].some(car=>car.name.toLowerCase().includes(search)));
 if(!visibleBrands.includes(cpuBrand)&&visibleBrands.length)cpuBrand=visibleBrands[0];
 brandBox.innerHTML='';modelBox.innerHTML='';
 for(const brand of visibleBrands){const btn=document.createElement('button');btn.textContent=brand;btn.className=brand===cpuBrand?'active':'';btn.onclick=()=>{cpuBrand=brand;renderCpuPicker()};brandBox.appendChild(btn)}
 const cars=(cpuCatalog[cpuBrand]||[]).filter(car=>!search||cpuBrand.toLowerCase().includes(search)||car.name.toLowerCase().includes(search));
 for(const car of cars){const btn=document.createElement('button');btn.textContent=car.name;btn.className=cpuOpponent.brand===cpuBrand&&cpuOpponent.name===car.name?'active':'';btn.onclick=()=>{cpuOpponent=fullCar(cpuBrand,car);document.querySelector('#cpuPicked').textContent=`${cpuBrand} ${car.name}`;setCpuPreviewImage();updateCompareCard();if(course.drag)buildWorld('drag');renderCpuPicker()};modelBox.appendChild(btn)}
 document.querySelector('#cpuPicked').textContent=`${cpuOpponent.brand} ${cpuOpponent.name}`;
 setCpuPreviewImage();
}
function openCpuPicker(){document.querySelector('#cpuPicker')?.classList.add('open');renderCpuPicker()}
function closeCpuPicker(){document.querySelector('#cpuPicker')?.classList.remove('open')}
document.querySelector('#courseSelect').addEventListener('change',e=>{motion.raceTime=0;motion.racing=true;buildWorld(e.target.value);updateCompareCard();e.target.blur()});buildWorld('city');updateCompareCard();
document.querySelector('#cameraButton').addEventListener('click',cycleCamera);
document.querySelector('#radioButton').addEventListener('click',toggleRadio);
document.querySelector('#cpuRaceButton').addEventListener('click',openCpuPicker);
document.querySelector('#randomCpuButton').addEventListener('click',pickRandomCpu);
document.querySelector('#restartRaceButton').addEventListener('click',restartDragRace);
document.querySelector('#weatherSelect').addEventListener('change',e=>applyWeather(e.target.value));
document.querySelector('#cpuClose').addEventListener('click',closeCpuPicker);
document.querySelector('#cpuSearch').addEventListener('input',renderCpuPicker);
document.querySelector('#cpuStart').addEventListener('click',()=>{document.querySelector('#courseSelect').value='drag';buildWorld('drag');motion.racing=false;cpuRaceLive=false;closeCpuPicker();startCountdown('DRAG RACE',()=>{motion.racing=true;cpuRaceLive=true})});
document.querySelector('#closeResults').addEventListener('click',()=>document.querySelector('#raceResults').classList.remove('open'));
document.querySelector('#resultRestart').addEventListener('click',()=>{document.querySelector('#raceResults').classList.remove('open');restartDragRace()});
const countdown=document.querySelector('#countdown'),countText=countdown.querySelector('strong'),countLabel=countdown.querySelector('span');let countdownTimer=null;
function startCountdown(label,done){
 clearInterval(countdownTimer);Object.keys(keys).forEach(k=>keys[k]=false);motion.racing=false;cpuRaceLive=false;resetPlayer();
 let count=3;countText.textContent=count;countLabel.textContent=label;countdown.classList.remove('hidden');
 countdownTimer=setInterval(()=>{count--;if(count>0)countText.textContent=count;else if(count===0){countText.textContent='GO';countLabel.textContent='LAUNCH';done?.()}else{clearInterval(countdownTimer);countdown.classList.add('hidden')}},700);
}
startCountdown('OPEN ROAD',()=>{motion.racing=true});
setTimeout(()=>document.querySelector('#simLoading')?.classList.add('hidden'),650);
function animate(){requestAnimationFrame(animate);const dt=Math.min(clock.getDelta(),.033);updateTraffic(dt);if(motion.racing){updatePhysics(dt);updateCPU(dt);checkRaceMilestones()}updateGauges();updateMinimap();updateCamera(dt);renderer.render(scene,camera)}animate();

