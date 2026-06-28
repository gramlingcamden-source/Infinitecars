const catalog = {
  "Abarth":[car("695 Competizione",2023,"Hot Hatch",140,72,74,6.7,180,"Brembo 4-piston","1.4L turbo I4","Premium gasoline","FWD","5-speed auto","2,579 lb")],
  "Acura":[car("NSX Type S",2022,"Supercar",191,91,91,2.9,600,"Carbon-ceramic","3.5L twin-turbo V6 hybrid","Premium gasoline","AWD","9-speed DCT","3,878 lb"),car("Integra Type S",2024,"Sport Compact",167,84,82,5.1,320,"Brembo 4-piston","2.0L turbo I4","Premium gasoline","FWD","6-speed manual","3,219 lb")],
  "Alfa Romeo":[car("Giulia Quadrifoglio",2024,"Sport Sedan",191,89,88,3.8,505,"Carbon-ceramic optional","2.9L twin-turbo V6","Premium gasoline","RWD","8-speed auto","3,806 lb"),car("33 Stradale",2025,"Supercar",207,93,93,3.0,620,"Carbon-ceramic","3.0L twin-turbo V6","Premium gasoline","RWD","8-speed DCT","3,307 lb")],
  "Alpine":[car("A110 R",2024,"Sports Car",177,94,87,3.9,300,"Brembo performance","1.8L turbo I4","Premium gasoline","RWD","7-speed DCT","2,385 lb")],
  "Aston Martin":[car("Valkyrie",2024,"Hypercar",250,99,99,2.5,1160,"Carbon-ceramic racing","6.5L V12 hybrid","Premium gasoline","RWD","7-speed sequential","2,271 lb","Formula One engineering, liberated for the road."),car("Valhalla",2025,"Supercar",217,96,96,2.5,998,"Carbon-ceramic","4.0L twin-turbo V8 hybrid","Premium gasoline","AWD","8-speed DCT","3,417 lb"),car("DB12",2024,"Grand Tourer",202,86,88,3.5,671,"Carbon-ceramic optional","4.0L twin-turbo V8","Premium gasoline","RWD","8-speed auto","3,715 lb")],
  "Audi":[car("R8 GT",2023,"Supercar",199,93,92,3.4,602,"Carbon-ceramic","5.2L naturally aspirated V10","Premium gasoline","RWD","7-speed DCT","3,516 lb"),car("RS 6 Avant",2024,"Super Wagon",190,83,91,3.3,621,"Carbon-ceramic optional","4.0L twin-turbo V8","Premium gasoline","AWD","8-speed auto","4,608 lb")],
  "Bentley":[car("Continental GT Speed",2024,"Grand Tourer",208,78,91,3.5,650,"Carbon-ceramic","6.0L twin-turbo W12","Premium gasoline","AWD","8-speed DCT","5,011 lb")],
  "BMW":[car("M3 CS",2024,"Sport Sedan",188,91,91,3.2,543,"Carbon-ceramic optional","3.0L twin-turbo I6","Premium gasoline","AWD","8-speed auto","3,915 lb"),car("M5",2025,"Super Sedan",190,84,94,3.4,717,"Compound performance","4.4L twin-turbo V8 hybrid","Premium gasoline","AWD","8-speed auto","5,390 lb")],
  "Bugatti":[car("Chiron Super Sport",2022,"Hypercar",273,91,99,2.4,1578,"Carbon-ceramic","8.0L quad-turbo W16","Premium gasoline","AWD","7-speed DCT","4,398 lb")],
  "Cadillac":[car("CT5-V Blackwing",2024,"Sport Sedan",205,88,90,3.4,668,"Brembo performance","6.2L supercharged V8","Premium gasoline","RWD","6-speed manual","4,123 lb")],
  "Chevrolet":[car("Corvette Z06",2024,"Supercar",195,95,93,2.6,670,"Brembo carbon-ceramic","5.5L naturally aspirated V8","Premium gasoline","RWD","8-speed DCT","3,434 lb"),car("Camaro ZL1",2024,"Muscle Car",198,86,86,3.5,650,"Brembo 6-piston","6.2L supercharged V8","Premium gasoline","RWD","10-speed auto","3,907 lb")],
  "Dodge":[car("Challenger SRT Demon 170",2023,"Muscle Car",215,70,82,1.7,1025,"Brembo performance","6.2L supercharged V8","E85 ethanol","RWD","8-speed auto","4,280 lb")],
  "Ferrari":[car("SF90 XX Stradale",2024,"Hypercar",199,98,99,2.3,1016,"Carbon-ceramic","4.0L twin-turbo V8 hybrid","Premium gasoline","AWD","8-speed DCT","3,439 lb"),car("812 Competizione",2023,"Supercar",211,93,95,2.9,819,"Carbon-ceramic","6.5L naturally aspirated V12","Premium gasoline","RWD","7-speed DCT","3,278 lb")],
  "Ford":[car("Mustang GTD",2025,"Supercar",202,96,95,3.0,815,"Carbon-ceramic","5.2L supercharged V8","Premium gasoline","RWD","8-speed DCT","3,600 lb"),car("GT",2022,"Supercar",216,94,94,3.0,660,"Carbon-ceramic","3.5L twin-turbo V6","Premium gasoline","RWD","7-speed DCT","3,054 lb")],
  "Genesis":[car("G70 3.3T",2024,"Sport Sedan",168,80,82,4.5,365,"Brembo performance","3.3L twin-turbo V6","Premium gasoline","AWD","8-speed auto","3,887 lb")],
  "Honda":[car("Civic Type R",2024,"Hot Hatch",171,91,84,4.9,315,"Brembo 4-piston","2.0L turbo I4","Premium gasoline","FWD","6-speed manual","3,188 lb"),car("S2000",2009,"Roadster",150,90,74,5.4,237,"Ventilated disc","2.2L naturally aspirated I4","Premium gasoline","RWD","6-speed manual","2,855 lb")],
  "Hyundai":[car("Ioniq 5 N",2024,"Performance EV",162,88,91,3.3,641,"N performance regenerative","Dual electric motors","Electric","AWD","Single-speed","4,861 lb")],
  "Jaguar":[car("F-Type R 75",2024,"Sports Car",186,84,86,3.5,575,"Super performance","5.0L supercharged V8","Premium gasoline","AWD","8-speed auto","3,935 lb")],
  "Koenigsegg":[car("Jesko Absolut",2025,"Hypercar",330,97,99,2.5,1600,"Carbon-ceramic","5.0L twin-turbo V8","E85 ethanol","RWD","9-speed multi-clutch","3,064 lb")],
  "Lamborghini":[car("Revuelto",2024,"Hypercar",217,96,98,2.5,1001,"Carbon-ceramic","6.5L V12 hybrid","Premium gasoline","AWD","8-speed DCT","3,907 lb"),car("Huracán STO",2023,"Supercar",193,97,94,3.0,631,"Carbon-ceramic","5.2L naturally aspirated V10","Premium gasoline","RWD","7-speed DCT","2,952 lb")],
  "Lexus":[car("LFA",2012,"Supercar",202,92,90,3.6,552,"Carbon-ceramic","4.8L naturally aspirated V10","Premium gasoline","RWD","6-speed automated","3,483 lb")],
  "Lotus":[car("Emira V6",2024,"Sports Car",180,93,84,4.2,400,"AP Racing 4-piston","3.5L supercharged V6","Premium gasoline","RWD","6-speed manual","3,212 lb")],
  "Maserati":[car("MC20",2024,"Supercar",202,92,92,2.9,621,"Carbon-ceramic optional","3.0L twin-turbo V6","Premium gasoline","RWD","8-speed DCT","3,307 lb")],
  "Mazda":[car("RX-7 Spirit R",2002,"Sports Car",155,91,75,4.8,276,"Ventilated disc","1.3L twin-turbo rotary","Premium gasoline","RWD","5-speed manual","2,800 lb"),car("MX-5 Miata",2024,"Roadster",135,89,72,5.7,181,"Ventilated disc","2.0L naturally aspirated I4","Premium gasoline","RWD","6-speed manual","2,341 lb")],
  "McLaren":[car("750S",2024,"Supercar",206,97,96,2.7,740,"Carbon-ceramic","4.0L twin-turbo V8","Premium gasoline","RWD","7-speed DCT","3,062 lb")],
  "Mercedes-AMG":[car("AMG ONE",2024,"Hypercar",219,99,99,2.9,1049,"Carbon-ceramic","1.6L turbo V6 hybrid","Premium gasoline","AWD","7-speed automated","3,737 lb"),car("GT 63 S E Performance",2025,"Grand Tourer",198,88,96,2.7,805,"Carbon-ceramic","4.0L twin-turbo V8 hybrid","Premium gasoline","AWD","9-speed auto","4,674 lb")],
  "Nissan":[car("GT-R Nismo",2024,"Supercar",196,91,93,2.5,600,"Brembo carbon-ceramic","3.8L twin-turbo V6","Premium gasoline","AWD","6-speed DCT","3,865 lb"),car("Z Nismo",2024,"Sports Car",155,83,83,4.3,420,"Akebono performance","3.0L twin-turbo V6","Premium gasoline","RWD","9-speed auto","3,704 lb")],
  "Pagani":[car("Utopia",2024,"Hypercar",217,96,98,2.8,852,"Brembo carbon-ceramic","6.0L twin-turbo V12","Premium gasoline","RWD","7-speed manual","2,822 lb")],
  "Porsche":[car("911 GT3 RS",2024,"Track Car",184,100,96,3.0,518,"Carbon-ceramic optional","4.0L naturally aspirated flat-6","Premium gasoline","RWD","7-speed PDK","3,268 lb"),car("Taycan Turbo GT",2025,"Performance EV",190,92,99,2.1,1019,"Carbon-ceramic","Dual electric motors","Electric","AWD","2-speed rear","5,101 lb")],
  "Rimac":[car("Nevera",2024,"Electric Hypercar",258,95,100,1.7,1914,"Carbon-ceramic regenerative","Four electric motors","Electric","AWD","Single-speed","4,740 lb")],
  "Subaru":[car("WRX STI S209",2019,"Rally Sedan",162,89,84,4.4,341,"Brembo 6-piston","2.5L turbo flat-4","Premium gasoline","AWD","6-speed manual","3,485 lb")],
  "Tesla":[car("Model S Plaid",2024,"Performance EV",200,82,93,1.99,1020,"Regenerative disc","Tri electric motors","Electric","AWD","Single-speed","4,766 lb")],
  "Toyota":[car("GR Supra 3.0",2024,"Sports Car",155,87,85,3.9,382,"Brembo 4-piston","3.0L turbo I6","Premium gasoline","RWD","8-speed auto","3,400 lb"),car("GR86",2024,"Sports Car",140,90,76,5.4,228,"Ventilated disc","2.4L naturally aspirated flat-4","Premium gasoline","RWD","6-speed manual","2,811 lb")],
  "Volkswagen":[car("Golf R",2024,"Hot Hatch",155,85,84,4.5,315,"Performance disc","2.0L turbo I4","Premium gasoline","AWD","7-speed DCT","3,481 lb")],
  "Volvo":[car("S60 Polestar Engineered",2024,"Sport Sedan",155,79,88,4.1,455,"Brembo performance","2.0L turbo I4 hybrid","Premium gasoline","AWD","8-speed auto","4,442 lb")]
};

function car(name,year,type,top,handling,braking,zero,hp,brakes,engine,fuel,drive,trans,weight,tagline){return{name,year,type,top,handling,braking,zero,hp,brakes,engine,fuel,drive,trans,weight,tagline:tagline||"A defining machine from a marque built around motion."}}

function archiveCar(name,source="Infinite Cars seed archive"){return{name,year:"—",type:"Archive Entry",top:null,handling:null,braking:null,zero:null,hp:null,brakes:null,engine:null,fuel:null,drive:"—",trans:"—",weight:"—",archive:true,record:{make:null,model:name,generation:null,trim:null,years:[],verification:"index-only",source},tagline:"Infinite Cars automatically averages the available generation and trim records for this model family."}}
Object.entries(window.archiveCatalog||{}).forEach(([brand,names])=>{
  catalog[brand] ||= [];
  const existing=new Set(catalog[brand].map(c=>c.name.toLowerCase()));
  names.split('|').forEach(name=>{if(!existing.has(name.toLowerCase())){const entry=archiveCar(name);entry.record.make=brand;catalog[brand].push(entry)}});
});

const els={brands:document.querySelector('#brandList'),models:document.querySelector('#modelList'),search:document.querySelector('#searchInput'),classFilter:document.querySelector('#classFilter'),stats:document.querySelector('#statsStrip'),specs:document.querySelector('#specGrid')};
let state={brand:null,index:null,average:null};
const averageRequests=new Set();
let currentDisplayCar=null;
function hideLoading(){document.querySelector('#loadingScreen')?.classList.add('hidden')}
function setupWelcomeScreen(){
  const welcome=document.querySelector('#welcomeScreen'),start=document.querySelector('#startGameButton');
  if(!welcome)return;
  if(localStorage.getItem('infiniteCarsStarted')==='yes')welcome.classList.add('hidden');
  start?.addEventListener('click',()=>{localStorage.setItem('infiniteCarsStarted','yes');welcome.classList.add('hidden');document.querySelector('.main-stage')?.scrollTo({top:0,behavior:'smooth'})});
}
function getFavorites(){try{return JSON.parse(localStorage.getItem('infiniteCarsFavorites')||'[]')}catch(error){return[]}}
function saveFavorites(items){localStorage.setItem('infiniteCarsFavorites',JSON.stringify(items))}
function favoriteKey(brand,name){return `${brand}|${name}`}
function isFavorite(brand,name){return getFavorites().some(f=>f.key===favoriteKey(brand,name))}
function addFavorite(brand,name){
  const key=favoriteKey(brand,name);let favs=getFavorites();
  if(!favs.some(f=>f.key===key)){favs.unshift({key,brand,name});saveFavorites(favs.slice(0,80))}
}
function getCoins(){return Math.max(0,Math.floor(Number(localStorage.getItem('infiniteCarsCoins')||'0')||0))}
function setCoins(value){localStorage.setItem('infiniteCarsCoins',String(Math.max(0,Math.floor(value))));renderCoins()}
function renderCoins(){const el=document.querySelector('#coinBalance');if(el)el.textContent=getCoins().toLocaleString()}
function getAchievements(){try{return JSON.parse(localStorage.getItem('infiniteCarsAchievements')||'{}')}catch(error){return{}}}
function saveAchievements(items){localStorage.setItem('infiniteCarsAchievements',JSON.stringify(items))}
function achievementCarKey(brand=state.brand,name=state.index!==null&&state.brand?catalog[state.brand][state.index]?.name:null){return brand&&name?favoriteKey(brand,name):'no-car-selected'}
function getCarAchievements(brand=state.brand,name=state.index!==null&&state.brand?catalog[state.brand][state.index]?.name:null){const store=getAchievements(),key=achievementCarKey(brand,name);return store[key]||{}}
function saveCarAchievement(key,label,brand=state.brand,name=state.index!==null&&state.brand?catalog[state.brand][state.index]?.name:null){
  const store=getAchievements(),carKey=achievementCarKey(brand,name);store[carKey]||={};
  if(store[carKey][key])return false;
  store[carKey][key]={label,earnedAt:Date.now()};saveAchievements(store);return true;
}
function completeAchievement(key,label){
  if(!saveCarAchievement(key,label))return;
  setCoins(getCoins()+100);renderAchievements();
}
const achievementDefs=[
  {key:'visited_city',name:'City Driver',desc:'Load into the free roam city.'},
  {key:'visited_drag_strip',name:'Drag Strip Unlocked',desc:'Visit the pro drag strip.'},
  {key:'visited_test_track',name:'Test Track Unlocked',desc:'Visit the test track.'},
  {key:'hit_60_mph',name:'First Pull',desc:'Reach 60 mph.',speed:60},
  {key:'hit_150_mph',name:'Very Fast',desc:'Reach 150 mph.',speed:150},
  {key:'hit_200_mph',name:'200 MPH Club',desc:'Reach 200 mph.',speed:200},
  {key:'finished_one_mile',name:'Mile Marker',desc:'Finish a full 1-mile drag race.'},
  {key:'first_drag_win',name:'Drag Winner',desc:'Win a drag race against the CPU.'},
  {key:'drive_ramp',name:'Ramp Driver',desc:'Drive up the city parking-garage ramp.'},
  {key:'park_garage',name:'Parked It',desc:'Stop your car inside the parking garage.'},
  {key:'first_favorite',name:'Saved Ride',desc:'Save your first favorite car.'},
  {key:'first_upgrade',name:'First Upgrade',desc:'Buy your first performance upgrade.'}
];
function renderAchievements(){
  const list=document.querySelector('#achievementList'),summary=document.querySelector('#achievementSummary');if(!list)return;
  if(!state.brand||state.index===null){if(summary)summary.textContent='Pick a car to see that car’s achievements.';list.innerHTML='<div class="achievement-card locked"><b>LOCKED</b><div><strong>No car selected</strong><span>Achievements reset for every car, so choose a car first.</span><small>Each car has its own checklist.</small></div></div>';return}
  const base=catalog[state.brand][state.index],display=currentDisplayCar||base,top=Number(display.top)||0,earned=getCarAchievements(state.brand,base.name),known=new Set(achievementDefs.map(a=>a.key)),extra=Object.entries(earned).filter(([key])=>!known.has(key)).map(([key,value])=>({key,name:value.label||key,desc:'Bonus achievement'})),available=achievementDefs.filter(a=>!a.speed||top>=a.speed),all=[...available,...extra],done=all.filter(a=>earned[a.key]).length;
  if(summary)summary.textContent=`${state.brand} ${base.name}: ${done}/${all.length} completed. Achievements reset for every car.`;
  list.innerHTML=all.map(item=>{
    const got=earned[item.key],date=got?.earnedAt?new Date(got.earnedAt).toLocaleDateString():'Locked';
    return `<div class="achievement-card ${got?'earned':'locked'}"><b>${got?'✓':'LOCKED'}</b><div><strong>${item.name}</strong><span>${item.desc}</span><small>${got?`Earned ${date} · +100 Inficoins`:'Reward: 100 Inficoins'}</small></div></div>`;
  }).join('');
}
function getUpgradeStore(){try{return JSON.parse(localStorage.getItem('infiniteCarsUpgrades')||'{}')}catch(error){return{}}}
function saveUpgradeStore(store){localStorage.setItem('infiniteCarsUpgrades',JSON.stringify(store))}
function getCarUpgrades(brand,name){const store=getUpgradeStore(),key=favoriteKey(brand,name);return{engine:0,turbo:0,tires:0,brakes:0,weight:0,...(store[key]||{})}}
function saveCarUpgrades(brand,name,levels){const store=getUpgradeStore();store[favoriteKey(brand,name)]=levels;saveUpgradeStore(store)}
const upgradeDefs=[
  {key:'engine',name:'Engine Tune',desc:'+8% horsepower each level'},
  {key:'turbo',name:'Turbo',desc:'+10% horsepower and more top speed each level'},
  {key:'tires',name:'Tires',desc:'+3 handling and better grip each level'},
  {key:'brakes',name:'Brakes',desc:'+4 braking each level'},
  {key:'weight',name:'Weight Reduction',desc:'Makes the car lighter and quicker each level'}
];
function upgradeCost(level){return 200+level*150}
function carClassFor(car,brand=''){
  const text=`${brand} ${car.name||''} ${car.type||''} ${car.fuel||''} ${car.engine||''}`.toLowerCase(),top=Number(car.top)||0,hp=Number(car.hp)||0,year=Number(car.year)||0;
  if(/electric|ev|battery/.test(text))return 'EV';
  if(/truck|pickup|wrangler|bronco|land cruiser|defender|range rover|jeep|off-road|suv|crossover/.test(text))return 'Off-road';
  if(/muscle|mustang|camaro|challenger|charger|corvette/.test(text)&&hp>=400)return 'Muscle';
  if(year&&year<1995)return 'Classic';
  if(/hypercar/.test(text)||top>=220||hp>=900)return 'Hypercar';
  if(/supercar/.test(text)||top>=185||hp>=550)return 'Supercar';
  if(/sports|sport|roadster|spider|coupe|type r|nismo|amg|m\\d|rs |gt/.test(text)||top>=145||hp>=250)return 'Sports';
  return 'Economy';
}
function selectedClass(){return els.classFilter?.value||''}
function carMatchesClass(car,brand=state.brand){const cls=selectedClass();return !cls||carClassFor(car,brand)===cls}
function carsForBrand(brand){
  const q=(els.search?.value||'').toLowerCase(),cls=selectedClass();
  return catalog[brand].map((car,index)=>({car,index,className:carClassFor(car,brand)})).filter(item=>{
    const searchMatch=!q||brand.toLowerCase().includes(q)||item.car.name.toLowerCase().includes(q);
    const classMatch=!cls||item.className===cls;
    return searchMatch&&classMatch;
  });
}
function applyUpgradeEffects(car,brand=state.brand){
  if(!car)return car;const levels=getCarUpgrades(brand,car.name),upgraded={...car,upgrades:levels,upgradeKey:favoriteKey(brand,car.name)};
  const hp=Number(upgraded.hp),top=Number(upgraded.top),zero=Number(upgraded.zero),handling=Number(upgraded.handling),braking=Number(upgraded.braking),weightNumber=parseFloat(String(upgraded.weight||'').replace(/,/g,''));
  const powerMult=1+levels.engine*.08+levels.turbo*.10,weightMult=Math.max(.82,1-levels.weight*.035);
  if(Number.isFinite(hp))upgraded.hp=Math.round(hp*powerMult);
  if(Number.isFinite(top))upgraded.top=Math.round(top*(1+levels.turbo*.018+levels.engine*.006));
  if(Number.isFinite(zero))upgraded.zero=Math.max(1.4,Math.round((zero/(1+levels.engine*.055+levels.turbo*.06+levels.tires*.025+levels.weight*.045))*10)/10);
  if(Number.isFinite(handling))upgraded.handling=Math.min(100,Math.round(handling+levels.tires*3+levels.weight));
  if(Number.isFinite(braking))upgraded.braking=Math.min(100,Math.round(braking+levels.brakes*4+levels.tires));
  if(Number.isFinite(weightNumber)&&weightNumber>300){const unit=/kg/i.test(String(upgraded.weight||''))?'kg':'lb';upgraded.weight=`${Math.round(weightNumber*weightMult).toLocaleString()} ${unit}`}
  upgraded.upgradeSummary=Object.entries(levels).filter(([,v])=>v>0).map(([k,v])=>`${k} ${v}`).join(', ')||'Stock';
  return upgraded;
}
function renderUpgrades(){
  const list=document.querySelector('#upgradeList');if(!list)return;renderCoins();
  if(!state.brand||state.index===null){list.innerHTML='<div class="upgrade-note">Pick a car first, then you can spend Inficoins on upgrades.</div>';return}
  const base=catalog[state.brand][state.index],levels=getCarUpgrades(state.brand,base.name),coins=getCoins();
  list.innerHTML=upgradeDefs.map(def=>{
    const level=Math.min(5,levels[def.key]||0),cost=upgradeCost(level),maxed=level>=5,canBuy=coins>=cost&&!maxed,bars=Array.from({length:5},(_,i)=>`<i class="${i<level?'on':''}"></i>`).join('');
    return `<div class="upgrade-card"><b>${def.name}</b><small>${def.desc}</small><div class="upgrade-level">${bars}</div><small>Level ${level}/5 ${maxed?'Â· MAXED':`Â· Next: ${cost} Inficoins`}</small><button data-upgrade="${def.key}" ${canBuy?'':'disabled'}>${maxed?'MAXED':coins>=cost?'BUY UPGRADE':'NEED MORE COINS'}</button></div>`
  }).join('')+`<div class="upgrade-note">Upgrading automatically saves ${state.brand} ${base.name} in Favorites. Upgrades are saved forever on this browser.</div>`;
}
function renderFavorites(){
  const box=document.querySelector('#favoritesList'),side=document.querySelector('#sidebarFavorites'),count=document.querySelector('#favoriteCount'),favs=getFavorites();
  if(count)count.textContent=favs.length;
  if(box){box.className=favs.length?'favorite-list':'favorite-empty';box.innerHTML=favs.length?favs.map((f,i)=>`<button class="favorite-card" data-favorite="${i}"><b>${f.name}</b><span>${f.brand}</span></button>`).join(''):'No favorites yet. Pick a car and press ☆ FAVORITE.'}
  if(side){side.className=favs.length?'sidebar-favorite-list':'sidebar-favorite-empty';side.innerHTML=favs.length?favs.slice(0,12).map((f,i)=>`<button data-favorite="${i}">${f.name}<span>${f.brand}</span></button>`).join(''):'No saved cars yet.'}
}
function updateFavoriteButton(){
  const btn=document.querySelector('#favoriteButton');if(!btn)return;btn.disabled=!state.brand||state.index===null;
  const saved=state.brand&&state.index!==null&&isFavorite(state.brand,catalog[state.brand][state.index].name);btn.classList.toggle('saved',!!saved);btn.textContent=saved?'★ SAVED':'☆ FAVORITE';
}
const imageCache=new Map();
const externalGenerationCache=new Map();
const averageProfileCache=new Map();
let imageRequest=0;
const localPhotoOverrides={
  "Abarth 695 Competizione":{src:"assets/abarth-695-competizione.png",page:"assets/abarth-695-competizione.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Abarth 695":{src:"assets/abarth-695.png",page:"assets/abarth-695.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Abarth 124 Spider":{src:"assets/abarth-124-spider.png",page:"assets/abarth-124-spider.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Abarth 595 Competizione":{src:"assets/abarth-595-competizione.png",page:"assets/abarth-595-competizione.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Abarth 595":{src:"assets/abarth-595.png",page:"assets/abarth-595.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Abarth 500":{src:"assets/abarth-500.png",page:"assets/abarth-500.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Abarth Punto Evo":{src:"assets/abarth-punto-evo.png",page:"assets/abarth-punto-evo.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Abarth Ritmo 130 TC":{src:"assets/abarth-ritmo-130-tc.png",page:"assets/abarth-ritmo-130-tc.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Acura NSX Type S":{src:"assets/acura-nsx.png",page:"assets/acura-nsx.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Acura Integra Type S":{src:"assets/acura-integra-type-s.png",page:"assets/acura-integra-type-s.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Alfa Romeo Giulia Quadrifoglio":{src:"assets/alfa-romeo-giulia-quadrifoglio.png",page:"assets/alfa-romeo-giulia-quadrifoglio.png",credit:"PHOTO: CUSTOM IMAGE"},
  "Lucid Air Sapphire":{src:"assets/lucid-air-sapphire.png",page:"assets/lucid-air-sapphire.png",credit:"PHOTO: CUSTOM IMAGE"}
};
const noImageSubjects=new Set(['ac10245']);
function normalizedSubjectKey(value){return String(value||'').toLowerCase().replace(/[^a-z0-9]/g,'')}
const syncedMakes=new Set();
const orderedBrands=Object.keys(catalog).sort((a,b)=>a.startsWith('NON-')?1:b.startsWith('NON-')?-1:a.localeCompare(b));

async function lookupWikipediaPhoto(subject){
  const params=new URLSearchParams({action:'query',format:'json',origin:'*',generator:'search',gsrsearch:`${subject} automobile`,gsrnamespace:'0',gsrlimit:'5',prop:'pageimages|info',inprop:'url',piprop:'thumbnail|name',pithumbsize:'1600'});
  const response=await fetch(`https://en.wikipedia.org/w/api.php?${params}`);if(!response.ok)return null;
  const pages=Object.values((await response.json()).query?.pages||{}).sort((a,b)=>(a.index??99)-(b.index??99));
  const page=pages.find(p=>p.thumbnail?.source);return page?{src:page.thumbnail.source,page:page.fullurl,credit:'PHOTO: WIKIPEDIA ↗'}:null;
}

async function lookupCommonsPhoto(subject){
  const params=new URLSearchParams({action:'query',format:'json',origin:'*',generator:'search',gsrsearch:`${subject} car`,gsrnamespace:'6',gsrlimit:'8',prop:'imageinfo',iiprop:'url',iiurlwidth:'1600'});
  const response=await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);if(!response.ok)return null;
  const pages=Object.values((await response.json()).query?.pages||{}).sort((a,b)=>(a.index??99)-(b.index??99));
  const page=pages.find(p=>p.imageinfo?.[0]?.thumburl&&/\.(jpe?g|png|webp)$/i.test(p.imageinfo[0].url||''));
  return page?{src:page.imageinfo[0].thumburl,page:page.imageinfo[0].descriptionurl,credit:'PHOTO: WIKIMEDIA COMMONS ↗'}:null;
}

async function syncOfficialModels(brand){
  if(syncedMakes.has(brand)||brand.startsWith('NON-'))return;
  syncedMakes.add(brand);
  const status=document.querySelector('#syncStatus');status.textContent='CHECKING NHTSA…';status.classList.add('syncing');
  try{
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
    const response=await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${encodeURIComponent(brand)}?format=json`,{signal:controller.signal});clearTimeout(timer);
    if(!response.ok)throw new Error('unavailable');
    const data=await response.json(),existing=new Set(catalog[brand].map(c=>c.name.toLowerCase()));let added=0;
    for(const row of data.Results||[]){const name=(row.Model_Name||'').trim();if(name&&!existing.has(name.toLowerCase())){const entry=archiveCar(name,'NHTSA vPIC');entry.record.make=brand;catalog[brand].push(entry);existing.add(name.toLowerCase());added++}}
    catalog[brand].sort((a,b)=>(a.archive?1:0)-(b.archive?1:0)||a.name.localeCompare(b.name));
    status.textContent=added?`NHTSA +${added} MODELS`:'NHTSA CHECKED';updateArchiveProgress();renderCar();
  }catch(error){status.textContent='LOCAL ARCHIVE';}
  finally{status.classList.remove('syncing')}
}

async function updateCarImage(c){
  const request=++imageRequest;
  const visual=document.querySelector('#carVisual'),img=document.querySelector('#carImage'),source=document.querySelector('#photoSource');
  const subject=state.brand.startsWith('NON-')?c.name:`${state.brand} ${c.name}${c.fromGeneration?` ${c.label}`:''}`;
  source.classList.remove('visible');visual.classList.remove('no-image');visual.classList.add('loading');img.style.display='';
  try{
    if(state.brand==='AC'&&!['Cobra','Cobra GT Roadster'].includes(c.name))throw new Error('No image override');
    if(noImageSubjects.has(normalizedSubjectKey(subject)))throw new Error('No image override');
    let result=localPhotoOverrides[subject]||imageCache.get(subject);
    if(!result){
      for(const provider of [lookupWikipediaPhoto,lookupCommonsPhoto]){try{result=await provider(subject);if(result)break}catch(error){}}
      if(!result)throw new Error('No sourced photo found');imageCache.set(subject,result);
    }
    if(request!==imageRequest)return;
    await new Promise((resolve,reject)=>{const preload=new Image();preload.onload=resolve;preload.onerror=reject;preload.src=result.src});
    if(request!==imageRequest)return;
    img.src=result.src;img.alt=`Full view of ${subject}`;source.href=result.page;source.textContent=result.credit;source.classList.add('visible');
  }catch(error){
    if(request!==imageRequest)return;
    img.removeAttribute('src');img.alt='';visual.classList.add('no-image');
  }finally{if(request===imageRequest)visual.classList.remove('loading')}
}

function renderBrands(filter=""){
  const q=filter.toLowerCase(),cls=selectedClass();
  const visible=orderedBrands.filter(b=>{
    const classMatches=catalog[b].filter(c=>!cls||carClassFor(c,b)===cls);
    if(!classMatches.length)return false;
    return !q||b.toLowerCase().includes(q)||classMatches.some(c=>c.name.toLowerCase().includes(q));
  });
  els.brands.innerHTML=visible.map(b=>{
    const cars=carsForBrand(b),match=cars[0]?.index??-1,count=cls?cars.length:catalog[b].length;
    return `<button class="brand-button ${b===state.brand?'active':''} ${b.startsWith('NON-')?'special':''}" data-brand="${b}" data-match="${match}"><span>${b}</span><small>${String(count).padStart(2,'0')}</small></button>`
  }).join('');
  document.querySelector('#brandCount').textContent=visible.length;
}
function renderModelList(){
  if(!state.brand||state.index===null)return;
  const visibleModels=carsForBrand(state.brand),label=selectedClass().toUpperCase()||'MATCHING';
  els.models.innerHTML=visibleModels.length?visibleModels.map(({car,index,className})=>`<button class="model-button ${index===state.index?'active':''}" data-index="${index}"><span>${car.name}</span><span>${car.year} · ${className}</span></button>`).join(''):`<div class="generation-empty"><b>NO ${label} CARS</b>Try a different class or search.</div>`;
  document.querySelector('#modelCount').textContent=`${visibleModels.length} MODEL${visibleModels.length===1?'':'S'}`;
}

function scoreTop(mph){return Math.min(100,Math.round(mph/3.3))}
function drivingFallback(car){
  const text=`${car.name||''} ${car.type||''}`.toLowerCase();
  if(/hypercar/.test(text))return{top:230,hp:900,zero:2.8,handling:95,braking:95,weight:'3,300 lb'};
  if(/supercar|ferrari|lamborghini|mclaren|corvette/.test(text))return{top:195,hp:600,zero:3.4,handling:91,braking:92,weight:'3,450 lb'};
  if(/suv|crossover|escalade|range rover|land cruiser/.test(text))return{top:130,hp:300,zero:6.5,handling:68,braking:75,weight:'4,900 lb'};
  if(/truck|pickup|f-150|silverado|ram/.test(text))return{top:115,hp:320,zero:7.2,handling:58,braking:68,weight:'5,200 lb'};
  if(/roadster|spider|convertible|miata|mx-5/.test(text))return{top:145,hp:220,zero:5.8,handling:88,braking:80,weight:'2,700 lb'};
  if(/hatch|golf|civic|focus|fiesta/.test(text))return{top:135,hp:200,zero:6.8,handling:82,braking:78,weight:'3,000 lb'};
  return{top:155,hp:300,zero:5.8,handling:76,braking:78,weight:'3,500 lb'};
}
function generationKey(){const base=catalog[state.brand][state.index];return `${state.brand}|${base.name}`}
function renderGenerationItems(items){
  document.querySelector('#generationList').innerHTML=items.length?items.map((g,i)=>`<button class="generation-card ${state.generation?.label===g.label&&state.generation?.trim===g.trim?'active':''}" data-generation="${i}"><b>${g.label}</b><em>${g.years}</em><span>${g.trim}</span><small>${g.engine}${g.hp?` · ${g.hp} HP`:''}</small></button>`).join(''):`<div class="generation-empty"><b>NO SPECIFICATIONS FOUND</b>No generation-level record is available from the connected databases for this model yet.</div>`;
}
function carQueryJSONP(make,model){return new Promise((resolve,reject)=>{
  const callback=`infiniteCars_${Date.now()}_${Math.random().toString(36).slice(2)}`,script=document.createElement('script');let timer;
  const cleanup=()=>{clearTimeout(timer);script.remove();delete window[callback]};
  window[callback]=data=>{cleanup();resolve(data?.Trims||[])};
  script.onerror=()=>{cleanup();reject(new Error('Specification service unavailable'))};
  script.src=`https://www.carqueryapi.com/api/0.3/?callback=${callback}&cmd=getTrims&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&full_results=1`;
  timer=setTimeout(()=>{cleanup();reject(new Error('Specification lookup timed out'))},12000);document.head.appendChild(script);
})}
function normalizeExternalTrim(row){
  const number=value=>{const n=parseFloat(value);return Number.isFinite(n)&&n>0?n:null},cc=number(row.model_engine_cc),ps=number(row.model_engine_power_ps),kph=number(row.model_top_speed_kph),kg=number(row.model_weight_kg),zero=number(row.model_0_to_100_kph);
  const engine=[cc?`${(cc/1000).toFixed(1)}L`:null,row.model_engine_type,row.model_engine_cyl?`${row.model_engine_cyl}-cylinder`:null].filter(Boolean).join(' ')||'Engine specification unavailable';
  const brakes=[row.model_front_brakes,row.model_rear_brakes].filter(Boolean).join(' / ')||'Brake specification unavailable';
  return{label:row.model_generation||`${row.model_year||'Unknown'} model year`,years:String(row.model_year||'Year unavailable'),trim:row.model_trim||row.model_name||'Base trim',top:kph?Math.round(kph*.621371):null,handling:null,braking:null,zero,accelerationLabel:zero?'0-62 MPH':'ACCELERATION',hp:ps?Math.round(ps*.98632):null,brakes,engine,fuel:row.model_engine_fuel||'Fuel specification unavailable',drive:row.model_drive||'N/A',trans:row.model_transmission_type||'N/A',weight:kg?`${Math.round(kg*2.20462).toLocaleString()} lb`:'N/A',source:'CarQuery specification database',fromExternal:true}
}
function buildAverageProfile(items){
  const numeric=field=>{const values=items.map(x=>x[field]).filter(value=>value!==null&&value!==undefined&&value!=='').map(Number).filter(Number.isFinite);return values.length?Math.round((values.reduce((a,b)=>a+b,0)/values.length)*10)/10:null};
  const mode=field=>{const values=items.map(x=>x[field]).filter(x=>x&&!/unavailable|^N\/A$/i.test(x));if(!values.length)return 'Varies by generation';const counts=new Map(values.map(v=>[v,(values.filter(x=>x===v).length)]));return [...counts].sort((a,b)=>b[1]-a[1])[0][0]};
  const years=items.flatMap(x=>String(x.years||'').match(/\d{4}/g)||[]).map(Number).filter(Boolean),weights=items.map(x=>parseFloat(String(x.weight||'').replace(/,/g,''))).filter(Number.isFinite);
  return{fromAverage:true,label:'ALL GENERATIONS',years:years.length?`${Math.min(...years)}–${Math.max(...years)}`:'All available years',trim:`Average of ${items.length} trim${items.length===1?'':'s'}`,type:'Average profile',top:numeric('top'),handling:numeric('handling'),braking:numeric('braking'),zero:numeric('zero'),hp:numeric('hp'),brakes:'Varies by generation',engine:'Multiple engines across generations',fuel:mode('fuel'),drive:mode('drive'),trans:mode('trans'),weight:weights.length?`${Math.round(weights.reduce((a,b)=>a+b,0)/weights.length).toLocaleString()} lb average`:'N/A',source:'Average of available generation records',recordCount:items.length}
}
async function loadAverageProfile(base){
  const key=generationKey();if(averageProfileCache.has(key)){state.average=averageProfileCache.get(key);renderCar();return}if(averageRequests.has(key))return;averageRequests.add(key);
  let items=window.generationCatalog?.[key]||[];
  if(!items.length){try{let cached=externalGenerationCache.get(key);if(!cached){const rows=await carQueryJSONP(state.brand,base.name),seen=new Set();cached=rows.map(normalizeExternalTrim).filter(g=>{const id=`${g.years}|${g.trim}|${g.engine}`;if(seen.has(id))return false;seen.add(id);return true});externalGenerationCache.set(key,cached)}items=cached}catch(error){items=[]}}
  const profile=items.length?buildAverageProfile(items):{fromAverage:true,noData:true,label:'AVERAGE UNAVAILABLE',years:'—',trim:'No generation specifications found',type:'Archive entry',top:null,handling:null,braking:null,zero:null,hp:null,brakes:'Varies by generation',engine:'Varies by generation',fuel:'Varies by generation',drive:'Varies',trans:'Varies',weight:'N/A',source:'No generation data available',recordCount:0};averageProfileCache.set(key,profile);averageRequests.delete(key);
  if(generationKey()!==key)return;state.average=profile;renderCar();
}
async function loadExternalGenerations(base,key){
  const list=document.querySelector('#generationList');list.innerHTML='<div class="generation-empty loading-records"><b>SEARCHING SPEC DATABASE</b>Loading model years, trims, engines and performance figures…</div>';
  try{
    let items=externalGenerationCache.get(key);
    if(!items){const rows=await carQueryJSONP(state.brand,base.name),seen=new Set();items=rows.map(normalizeExternalTrim).filter(g=>{const id=`${g.years}|${g.trim}|${g.engine}`;if(seen.has(id))return false;seen.add(id);return true}).sort((a,b)=>String(b.years).localeCompare(String(a.years),undefined,{numeric:true})).slice(0,250);externalGenerationCache.set(key,items)}
    window.generationCatalog[key]=items;renderGenerationItems(items);
  }catch(error){renderGenerationItems([])}
}
function openGenerationDrawer(){
  const base=catalog[state.brand][state.index],key=generationKey(),items=window.generationCatalog?.[key]||[];
  document.querySelector('#drawerTitle').textContent=`${state.brand} ${base.name}`;
  document.querySelector('#generationDrawer').classList.add('open');document.querySelector('#drawerShade').classList.add('open');document.querySelector('#generationDrawer').setAttribute('aria-hidden','false');
  if(items.length)renderGenerationItems(items);else loadExternalGenerations(base,key);
}
function closeGenerationDrawer(){document.querySelector('#generationDrawer').classList.remove('open');document.querySelector('#drawerShade').classList.remove('open');document.querySelector('#generationDrawer').setAttribute('aria-hidden','true')}
function renderCar(){
  if(!state.brand||state.index===null){
    currentDisplayCar=null;
    imageRequest++;
    document.querySelector('#carName').textContent='Choose a car';
    document.querySelector('#carYear').textContent='—';
    document.querySelector('#carType').textContent='NO CAR SELECTED';
    document.querySelector('#carClass').textContent='CLASS: NONE';
    document.querySelector('#carTagline').textContent='Pick a manufacturer and model from the lists to load its photo, stats, and simulator profile.';
    document.querySelector('#crumbBrand').textContent='NO BRAND';
    document.querySelector('#crumbModel').textContent='NO MODEL';
    document.querySelector('#selectedBrand').textContent='SELECT A BRAND';
    document.querySelector('#editionChip').textContent='WAITING FOR SELECTION';
    document.querySelector('#storyText').textContent='No car is loaded yet. Choose a brand on the left, then pick a model.';
    document.querySelector('#driveButton').disabled=true;
    document.querySelector('#driveButton').title='Choose a car first';
    updateFavoriteButton();renderFavorites();renderUpgrades();renderAchievements();renderCoins();
    els.stats.innerHTML=[['TOP SPEED','—'],['HANDLING','—'],['BRAKING','—'],['0-60 MPH','—'],['HORSEPOWER','—']].map(s=>`<div class="stat"><div class="stat-ring" style="--score:0"><b>0</b></div><div class="stat-copy"><span>${s[0]}</span><strong>${s[1]}</strong><small>choose a car</small></div></div>`).join('');
    els.specs.innerHTML=[['BRAKES','—','choose a car'],['ENGINE','—','choose a car'],['FUEL','—','choose a car'],['DRIVETRAIN','—','choose a car'],['TRANSMISSION','—','choose a car'],['CURB WEIGHT','—','choose a car']].map(s=>`<div class="spec"><span>${s[0]}</span><b>${s[1]}</b><small>${s[2]}</small></div>`).join('');
    els.models.innerHTML='<div class="generation-empty"><b>NO BRAND SELECTED</b>Choose a manufacturer from the side list.</div>';
    document.querySelector('#modelCount').textContent='0 MODELS';
    const visual=document.querySelector('#carVisual'),img=document.querySelector('#carImage'),source=document.querySelector('#photoSource');
    img.removeAttribute('src');img.alt='';source.classList.remove('visible');visual.classList.remove('loading','swap');visual.classList.add('no-image');
    renderBrands(els.search.value);
    return;
  }
  const base=catalog[state.brand][state.index];
  let c=state.average?{...base,...state.average,name:base.name,year:state.average.years,archive:false}:base;
  c=applyUpgradeEffects(c,state.brand);
  currentDisplayCar=c;
  document.querySelector('#carName').textContent=c.name;document.querySelector('#carYear').textContent=c.year;document.querySelector('#carType').textContent=c.type.toUpperCase();document.querySelector('#carClass').textContent=`CLASS: ${carClassFor(c,state.brand).toUpperCase()}${c.upgradeSummary&&c.upgradeSummary!=='Stock'?` / ${c.upgradeSummary.toUpperCase()}`:''}`;document.querySelector('#carTagline').textContent=c.tagline;
  document.querySelector('#crumbBrand').textContent=state.brand.toUpperCase();document.querySelector('#crumbModel').textContent=c.name.toUpperCase();document.querySelector('#selectedBrand').textContent=state.brand.toUpperCase();
  document.querySelector('#editionChip').textContent=c.fromAverage?(c.noData?'AVERAGE UNAVAILABLE':`AVERAGE / ${c.recordCount} TRIMS`):c.archive?'CALCULATING AVERAGE…':state.brand.startsWith('NON-')?'CONCEPT VEHICLE':'SHOWCASE SPEC';document.querySelector('#storyText').textContent=c.fromAverage?c.noData?'No generation-level specification records were found for this model family.':'These figures are mathematical averages across the available generation and trim records. Individual cars may differ significantly.':c.archive?'Searching available generation and trim records to calculate one simplified profile…':`The ${c.year} ${c.name} represents ${state.brand}'s approach to the ${c.type.toLowerCase()}: a blend of engineering character, performance, and design intent.`;
  els.stats.classList.remove('selectable');
  const has=value=>value!==null&&value!==undefined&&value!==''&&Number.isFinite(Number(value));
  document.querySelector('#driveButton').disabled=false;document.querySelector('#driveButton').title=has(c.top)&&has(c.hp)&&has(c.zero)?'Drive with published physics':'Drive with an estimated physics profile';
  const stats=c.archive?[['TOP SPEED','…',0,'calculating average'],['HANDLING','…',0,'calculating average'],['BRAKING','…',0,'calculating average'],['0-60 MPH','…',0,'calculating average'],['HORSEPOWER','…',0,'calculating average']]:[['TOP SPEED',has(c.top)?c.top+' MPH':'N/A',has(c.top)?scoreTop(c.top):0,c.fromAverage?'generation average':'published figure'],['HANDLING',has(c.handling)?c.handling+'/100':'N/A',has(c.handling)?c.handling:0,c.fromAverage?'rated records average':'comfort + control'],['BRAKING',has(c.braking)?c.braking+'/100':'N/A',has(c.braking)?c.braking:0,c.fromAverage?'rated records average':'system rating'],[c.accelerationLabel||'0-60 MPH',has(c.zero)?c.zero+' SEC':'N/A',has(c.zero)?Math.max(25,100-c.zero*12):0,c.fromAverage?'generation average':'published acceleration'],['HORSEPOWER',has(c.hp)?c.hp+' HP':'N/A',has(c.hp)?Math.min(100,c.hp/16):0,c.fromAverage?'generation average':'peak output']];
  els.stats.innerHTML=stats.map(s=>`<div class="stat"><div class="stat-ring" style="--score:${s[2]}"><b>${Math.round(s[2])}</b></div><div class="stat-copy"><span>${s[0]}</span><strong>${s[1]}</strong><small>${s[3]}</small></div></div>`).join('');
  const specs=c.archive?[['BRAKES','Generation-specific','select a generation and trim'],['ENGINE','Generation-specific','select an engine or powertrain'],['FUEL','Powertrain-specific','gas, diesel, hybrid or electric'],['GENERATION',c.record?.generation||'Selection required','structured archive field'],['TRIM',c.record?.trim||'Selection required','structured archive field'],['MODEL YEARS',c.record?.years?.join('–')||'Selection required',c.record?.source||'archive source']]:[['BRAKES',c.brakes,'stopping system'],['ENGINE',c.engine,'power unit'],['FUEL',c.fuel,'energy source'],['DRIVETRAIN',c.drive,'driven wheels'],['TRANSMISSION',c.trans,'gearbox'],['CURB WEIGHT',c.weight,'published estimate']];
  els.specs.innerHTML=specs.map(s=>`<div class="spec"><span>${s[0]}</span><b>${s[1]}</b><small>${s[2]}</small></div>`).join('');
  els.models.innerHTML=catalog[state.brand].map((m,i)=>`<button class="model-button ${i===state.index?'active':''}" data-index="${i}"><span>${m.name}</span><span>${m.year} Â· ${carClassFor(m,state.brand)}</span></button>`).join('');
  document.querySelector('#modelCount').textContent=`${catalog[state.brand].length} MODEL${catalog[state.brand].length===1?'':'S'}`;
  document.querySelector('#carVisual img').style.filter='saturate(.88) contrast(1.04)';
  const visual=document.querySelector('#carVisual');visual.classList.remove('swap');void visual.offsetWidth;visual.classList.add('swap');renderBrands(els.search.value);renderModelList();
  updateCarImage(c);
  if(base.archive&&!state.average)loadAverageProfile(base);
  updateFavoriteButton();renderFavorites();renderUpgrades();renderAchievements();renderCoins();
}

els.brands.addEventListener('click',e=>{const b=e.target.closest('[data-brand]');if(!b)return;state={brand:b.dataset.brand,index:Math.max(0,+b.dataset.match),average:null};renderCar();syncOfficialModels(state.brand)});
els.models.addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(!b)return;state.index=+b.dataset.index;state.average=null;renderCar()});
els.search.addEventListener('input',e=>{renderBrands(e.target.value);renderModelList()});
els.classFilter?.addEventListener('change',()=>{
  if(state.brand&&state.index!==null&&!carMatchesClass(catalog[state.brand][state.index],state.brand)){
    const next=carsForBrand(state.brand)[0];
    if(next)state.index=next.index;else state={brand:null,index:null,average:null};
    state.average=null;
  }
  renderBrands(els.search.value);renderCar();
});
document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==els.search){e.preventDefault();els.search.focus()}});
document.querySelector('#homeButton')?.addEventListener('click',e=>{e.preventDefault();state={brand:null,index:null,average:null};els.search.value='';document.querySelector('.main-stage')?.scrollTo({top:0,behavior:'smooth'});renderCar()});
document.querySelector('#randomButton').addEventListener('click',()=>{state.brand=orderedBrands[Math.floor(Math.random()*orderedBrands.length)];state.index=Math.floor(Math.random()*catalog[state.brand].length);state.average=null;renderCar()});
document.querySelector('#favoriteButton').addEventListener('click',()=>{
  if(!state.brand||state.index===null)return;const car=catalog[state.brand][state.index],key=favoriteKey(state.brand,car.name);let favs=getFavorites();
  if(favs.some(f=>f.key===key))favs=favs.filter(f=>f.key!==key);else{favs.unshift({key,brand:state.brand,name:car.name});completeAchievement('first_favorite','Achievement: saved first favorite')}
  saveFavorites(favs.slice(0,80));updateFavoriteButton();renderFavorites();
});
document.querySelector('#upgradeList')?.addEventListener('click',e=>{
  const btn=e.target.closest('[data-upgrade]');if(!btn||!state.brand||state.index===null)return;
  const car=catalog[state.brand][state.index],levels=getCarUpgrades(state.brand,car.name),key=btn.dataset.upgrade,level=levels[key]||0,cost=upgradeCost(level);
  if(level>=5||getCoins()<cost)return;
  levels[key]=level+1;saveCarUpgrades(state.brand,car.name,levels);setCoins(getCoins()-cost);addFavorite(state.brand,car.name);completeAchievement('first_upgrade','Achievement: bought first upgrade');renderCar();
});
document.querySelector('#favoritesList').addEventListener('click',e=>{
  const btn=e.target.closest('[data-favorite]');if(!btn)return;const fav=getFavorites()[+btn.dataset.favorite];if(!fav||!catalog[fav.brand])return;const index=catalog[fav.brand].findIndex(c=>c.name===fav.name);if(index<0)return;state={brand:fav.brand,index,average:null};renderCar();
});
document.querySelector('#sidebarFavorites').addEventListener('click',e=>{
  const btn=e.target.closest('[data-favorite]');if(!btn)return;const fav=getFavorites()[+btn.dataset.favorite];if(!fav||!catalog[fav.brand])return;const index=catalog[fav.brand].findIndex(c=>c.name===fav.name);if(index<0)return;state={brand:fav.brand,index,average:null};renderCar();
});
document.querySelector('#driveButton').addEventListener('click',()=>{if(!currentDisplayCar)return;const required=['top','hp','zero','handling','braking'],missing=value=>value===null||value===undefined||value===''||value==='—'||value==='N/A'||!Number.isFinite(Number(value)),estimated=required.some(key=>missing(currentDisplayCar[key])),fallback=drivingFallback(currentDisplayCar),driveCar={...currentDisplayCar,brand:state.brand,carClass:carClassFor(currentDisplayCar,state.brand),physicsEstimated:estimated};for(const key of required)if(missing(driveCar[key]))driveCar[key]=fallback[key];if(!driveCar.weight||driveCar.weight==='—'||driveCar.weight==='N/A')driveCar.weight=fallback.weight;localStorage.setItem('infiniteCarsDrive',JSON.stringify(driveCar));location.href='drive.html'});
document.querySelector('#driveButton').addEventListener('click',()=>{
  if(!currentDisplayCar)return;
  const required=['top','hp','zero','handling','braking'],fallback=drivingFallback(currentDisplayCar),bad=value=>{const n=Number(value);return value===null||value===undefined||value===''||value==='â€”'||value==='—'||value==='N/A'||!Number.isFinite(n)||n<=0};
  currentDisplayCar={...currentDisplayCar,physicsEstimated:required.some(key=>bad(currentDisplayCar[key]))};
  for(const key of required)if(bad(currentDisplayCar[key]))currentDisplayCar[key]=fallback[key];
  if(!currentDisplayCar.weight||currentDisplayCar.weight==='â€”'||currentDisplayCar.weight==='—'||currentDisplayCar.weight==='N/A')currentDisplayCar.weight=fallback.weight;
},{capture:true});
document.querySelectorAll('.section-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.section-tab,.tab-panel').forEach(x=>x.classList.remove('active'));btn.classList.add('active');document.querySelector('#'+btn.dataset.panel).classList.add('active')}));
setupWelcomeScreen();renderBrands();renderCoins();renderAchievements();renderCar();setTimeout(hideLoading,450);
function updateArchiveProgress(){const totalCars=Object.values(catalog).reduce((n,cars)=>n+cars.length,0);document.querySelector('#archiveProgress').textContent=`${orderedBrands.length} makes / ${totalCars.toLocaleString()} models`}
updateArchiveProgress();
