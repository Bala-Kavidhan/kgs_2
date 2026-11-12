/* Services + Industries: tabbed lists on index.html and the shared detail page (detail.html) */
(function(){
var IC={
face:'<path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3"/><circle cx="12" cy="11" r="3"/><path d="M7 17c1-2.2 2.8-3 5-3s4 .8 5 3"/>',
cal:'<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
pay:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M16 15h2"/>',
shield:'<path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
mon:'<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
phone:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M11 18h2"/>',
pin:'<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.5"/>',
lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
chart:'<path d="M4 20V4M4 20h16M8 16v-5M12 16V8M16 16v-3"/>',
list:'<path d="M5 6h14M5 12h14M5 18h9"/>',
bell:'<path d="M6 16v-5a6 6 0 0112 0v5l2 2H4zM10 21h4"/>',
users:'<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M16 5a3 3 0 010 6M18 14c2 .7 3 2.6 3 6"/>',
clock:'<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>',
bld:'<path d="M3 21V9l7-5v17M10 21V12l11 3v6"/><path d="M6 11h1M6 14h1M6 17h1M14 17h1M17 18h1"/>',
srv:'<rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><path d="M8 7h.01M8 17h.01"/>',
cloud:'<path d="M7 18a4.5 4.5 0 010-9 6 6 0 0111.5 1.5A3.8 3.8 0 0118 18z"/>',
code:'<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>'
};

var PRD={
 people360:['Kavidhan People360','product-people360.html','Attendance, leave and payroll on one multi-tenant platform.'],
 attendance:['Employee Attendance App','product-attendance.html','A mobile app for check-in, dashboard and leave.'],
 access:['Access Control','product-access.html','Biometric readers, controllers and electronic locks.'],
 tracker:['Tools Tracker','product-tracker.html','GPS tracking for tools and equipment.']
};
var STEPS_I=[['Listen','We learn how your sector and your sites work.'],['Propose','We recommend the right mix of products and services.'],['Deploy','We install, configure and train your team.'],['Support','We stay on for monitoring, updates and improvements.']];

/* s=slug n=name t=tag d=summary b=bullets r=illustration rows h1=page headline ov=overview f=cards st=steps c=chips rel=related q=faq
   rel keys: p:<product>  s:<service slug>  i:<industry slug> */
var SERVICES=[
{s:'software',n:'Software & app development',t:'ENGINEERING',h1:'Software and apps built around the way you work.',
 d:'Web, Flutter and React Native applications with secure APIs and clean admin dashboards.',
 b:['Web applications and admin dashboards','Flutter and React Native mobile apps','Secure APIs and integrations','Support and updates after launch'],
 r:[['Web apps','Built to fit'],['Mobile apps','Flutter / React Native'],['APIs','Secure'],['Dashboards','Clean']],
 ov:['We design and build business software that people actually enjoy using: web applications, mobile apps, and the APIs and dashboards that connect them.','Our own products, such as Kavidhan People360, are built with the same approach, so you work with a team that has delivered multi-tenant platforms.'],
 f:[['mon','Web applications and dashboards','Clear admin screens for managing data, approvals and reports.'],['phone','Mobile apps','Flutter and React Native apps that run well on phones.'],['lock','Secure APIs','Authentication, access control and clean interfaces between systems.'],['srv','Integrations','Connect new software to the devices, databases and tools you already use.']],
 st:[['Understand the problem','We start with how your team actually works.'],['Design the solution','Screens, data and architecture are agreed before we build.'],['Build and test','Regular builds you can review as we go.'],['Launch and support','We deploy, train your team and stay on for support.']],
 c:['Node.js','Flutter','React Native','Python','SQL Server','MySQL'],
 rel:['p:people360','p:attendance','i:education'],
 q:[['Do you build for web and mobile?','Yes. We build web applications and mobile apps with Flutter and React Native.'],['Can you work with our existing systems?','Yes. We integrate with existing databases, devices and tools.']]},
{s:'ai',n:'AI & face recognition',t:'AI & BIOMETRICS',h1:'Identity verification that works with the devices you own.',
 d:'Biometric identity verification and attendance that plugs into the devices you already own.',
 b:['Face-recognition attendance','Biometric identity verification','Works with devices you already own','Connects to your HR and access systems'],
 r:[['Attendance','Face-verified'],['Identity','Biometric'],['Devices','Existing hardware'],['Records','Logged']],
 ov:['Paper registers and shared cards are easy to fake and slow to audit. Face recognition and biometrics tie every record to the actual person.','We build the software layer that connects to the devices you already have, so you do not have to start from scratch.'],
 f:[['face','Face-recognition attendance','Record attendance by recognising the person, not a card or a signature.'],['shield','Identity verification','Confirm who someone is before they check in or gain entry.'],['srv','Device integration','Plug into biometric terminals you already own.'],['list','Auditable records','Every event is logged and ready to report on.']],
 st:[['Review devices and goals','We check the hardware you have and what you need to achieve.'],['Integrate','We connect recognition and verification to your systems.'],['Pilot','A small rollout to test accuracy and workflow.'],['Roll out and support','Full deployment with training and ongoing support.']],
 c:['Face recognition','Biometric devices','Python','Node.js'],
 rel:['p:people360','p:access','i:healthcare'],
 q:[['Do we need to buy new devices?','Not necessarily. The software is designed to work with devices you already own. Share the models and we will confirm compatibility.'],['How is biometric data handled?','We agree storage and privacy requirements with you before launch.']]},
{s:'iot',n:'IoT & building automation',t:'IOT',h1:'One app for your building systems.',
 d:'BACnet and Modbus integration that brings HVAC and access control into one monitored app.',
 b:['BACnet and Modbus integration','HVAC monitoring','Access control in the same app','Central monitoring dashboard'],
 r:[['HVAC','Monitored'],['Access','Integrated'],['Protocols','BACnet / Modbus'],['Dashboard','One app']],
 ov:['Buildings run on separate systems that rarely talk to each other. We connect them through standard protocols so your team can see and manage them in one place.','We understand the equipment as well as the software, which keeps integrations practical.'],
 f:[['bld','BACnet and Modbus integration','Connect controllers and equipment that speak standard building protocols.'],['mon','Central monitoring','See the status of your systems in a single dashboard.'],['lock','Access control','Bring door and entry control into the same application.'],['bell','Alerts','Be told when something needs attention.']],
 st:[['Survey your systems','We map equipment, protocols and what you need to monitor.'],['Connect','We integrate BACnet and Modbus devices.'],['Build the dashboard','One app shows status and access together.'],['Commission and support','We test with you, hand over and keep supporting.']],
 c:['BACnet','Modbus','HVAC','Access control','Dashboards'],
 rel:['p:access','i:realestate','i:construction'],
 q:[['Which protocols do you support?','BACnet and Modbus. Tell us your equipment and we will confirm what can be connected.'],['Can access control be included?','Yes. Access control can sit in the same monitored application.']]},
{s:'cloud',n:'Cloud & data migration',t:'CLOUD',h1:'Move to the cloud without stopping the business.',
 d:'Move databases and platforms to the cloud, including MySQL to Azure SQL, without disrupting operations.',
 b:['Database migration, including MySQL to Azure SQL','Platform moves to the cloud','Planning and testing before cut-over','Minimal disruption to operations'],
 r:[['Source','MySQL'],['Target','Azure SQL'],['Testing','Before cut-over'],['Disruption','Minimised']],
 ov:['Migrating a live database is risky when it is rushed. We plan the move, test it, and cut over in a way that keeps your operations running.','We have experience moving MySQL databases to Azure SQL and can advise on the right target for your platform.'],
 f:[['srv','Database migration','Move data between platforms with checks at every stage.'],['cloud','Platform migration','Re-host or modernise applications in the cloud.'],['shield','Safe cut-over','A rehearsed switch-over with a way back if needed.'],['list','Validation','Verify that the data matches before you switch.']],
 st:[['Assess','We review your database, platform and dependencies.'],['Plan','We choose the target and agree a cut-over plan.'],['Migrate and test','We move the data and validate it.'],['Cut over and support','We switch with minimal disruption, then monitor.']],
 c:['Microsoft Azure','Azure SQL','MySQL','SQL Server'],
 rel:['s:support','s:software'],
 q:[['Will our system go offline during migration?','We plan the cut-over to keep disruption to a minimum and agree the timing with you in advance.'],['Do you only migrate to Azure?','Azure SQL is our main experience. Tell us your situation and we will advise.']]},
{s:'gps',n:'GPS & asset tracking',t:'GPS',h1:'Know where your tools and teams are.',
 d:'Live location tracking for tools, equipment and field teams.',
 b:['Live location on a map','Tools, equipment and field teams','Check-out and return history','Reports you can export'],
 r:[['Location','Live'],['Assets','Mapped'],['History','Logged'],['Reports','Exportable']],
 ov:['Tools and equipment go missing between jobs, and field teams are hard to coordinate without knowing where everyone is.','Our tracking solutions give every asset a location and a history, so supervisors can stop guessing.'],
 f:[['pin','Live location','See tracked tools, equipment and teams on a map.'],['list','History','A record of movements, check-outs and returns.'],['phone','Mobile for field teams','Simple screens made for use on site.'],['chart','Reports','Export what you need for audits and planning.']],
 st:[['Define what to track','Tools, equipment or people; we agree the approach.'],['Set up tracking','Connect devices and the mobile app.'],['Go live','Teams use it in the field and the map updates.'],['Review and report','Check history and export reports.']],
 c:['GPS','Maps','Mobile app','Web dashboard'],
 rel:['p:tracker','i:construction'],
 q:[['What can be tracked?','Tools, equipment and field teams. Tell us what you have and we will recommend how to track it.'],['Is there a mobile app?','Yes. Our tracking products are mobile-first for field teams.']]},
{s:'support',n:'Managed support',t:'SUPPORT',h1:'Keep your systems performing after launch.',
 d:'Monitoring, updates and security so your systems keep performing after launch.',
 b:['Monitoring','Updates and patches','Security','Responsive support from the team that built it'],
 r:[['Monitoring','Ongoing'],['Updates','Applied'],['Security','Maintained'],['Support','Responsive']],
 ov:['Launch is the start, not the end. Systems need monitoring, updates and security attention to keep performing.','We stay on as your technology partner so your team can focus on the business instead of the servers.'],
 f:[['mon','Monitoring','We watch your systems so problems are found early.'],['code','Updates','Keep software current and compatible.'],['shield','Security','Regular security attention and fixes.'],['users','Support','A team that knows your system answers your questions.']],
 st:[['Onboard your systems','We learn your setup and put monitoring in place.'],['Monitor','We watch for faults and slow-downs.'],['Update and secure','We apply updates and security fixes.'],['Report and improve','Regular summaries and improvements.']],
 c:['Monitoring','Updates','Security','Support'],
 rel:['s:cloud','s:software'],
 q:[['Do you support systems you did not build?','Often yes. Share the details and we will tell you what we can take on.'],['How do we reach support?','Through the contact details on our site; we will agree response expectations with you.']]}
];

var INDUSTRIES=[
{s:'manufacturing',n:'Manufacturing',t:'INDUSTRY',h1:'Smarter shifts, controlled plants, fewer lost tools.',
 d:'Shift attendance, plant access and tool control for production teams.',
 b:['Shift-based attendance with biometrics','Controlled access to plant areas','Tool and equipment tracking','Payroll-ready attendance data'],
 r:[['Attendance','By shift'],['Plant access','Controlled'],['Tools','Tracked'],['Payroll','Ready']],
 ov:['Factories depend on the right people being in the right place on the right shift. Manual registers make that hard to prove.','We combine attendance, access control and tool tracking so supervisors can see what is happening on the floor.'],
 f:[['face','Biometric shift attendance','Record attendance per shift and feed it into payroll.'],['lock','Plant access control','Limit who can enter restricted areas.'],['pin','Tool tracking','Know where equipment is between lines and sites.'],['pay','Payroll','Turn attendance and leave into payslips.']],
 rel:['p:people360','p:access','p:tracker'],
 q:[['Does it handle multiple shifts?','Yes. Attendance and leave rules can be configured around your shift patterns.'],['Can we limit access to certain areas?','Yes, through access control with biometric or card readers.']]},
{s:'realestate',n:'Real estate & facilities',t:'INDUSTRY',h1:'One view of every door, system and site.',
 d:'Access control and building automation for properties and facility teams.',
 b:['Entry control across buildings','HVAC and building monitoring','Access logs for every entry','Multi-site management'],
 r:[['Entry','Controlled'],['HVAC','Monitored'],['Access logs','Searchable'],['Sites','Multi-site']],
 ov:['Facility teams look after many buildings with many separate systems. Bringing them together saves time and makes problems easier to spot.','We connect access control and building systems into one monitored application.'],
 f:[['lock','Access control','Manage who can enter each building and area.'],['bld','Building automation','Monitor HVAC through BACnet and Modbus.'],['list','Access logs','A searchable record of entries.'],['pin','Multi-site view','Oversee several properties from one place.']],
 rel:['p:access','s:iot','s:support'],
 q:[['Can we manage several properties?','Yes. Multi-site management is part of our access control product.'],['Can HVAC and access share one app?','Yes. That is what our IoT and building automation service is for.']]},
{s:'construction',n:'Construction & MEP',t:'INDUSTRY',h1:'From the site gate to the plant room, connected.',
 d:'Site attendance, tool tracking and building-systems integration for contractors.',
 b:['Site-wise attendance for crews','GPS tracking for tools and equipment','BACnet and Modbus integration','Mobile-first tools for site teams'],
 r:[['Crew attendance','By site'],['Tools','GPS tracked'],['Systems','BACnet / Modbus'],['Field app','Mobile-first']],
 ov:['Construction and MEP teams work across many sites with tools and people constantly on the move. Losing track of either costs time and money.','We provide attendance, tool tracking and building-systems integration that suit field work.'],
 f:[['users','Crew attendance','Record who is on which site, every day.'],['pin','Tool tracking','See where equipment is and who has it.'],['bld','Systems integration','Connect HVAC and building controls.'],['phone','Field-ready apps','Simple mobile tools for site teams.']],
 rel:['p:tracker','p:attendance','s:iot'],
 q:[['Can we track attendance per site?','Yes. Attendance can be organised by site and team.'],['Can you integrate MEP systems?','Yes, through BACnet and Modbus integration.']]},
{s:'education',n:'Education',t:'INDUSTRY',h1:'Simpler attendance and safer campuses.',
 d:'Attendance and campus access for schools, colleges and institutes.',
 b:['Staff attendance with biometrics','Campus entry control','Leave management for staff','Custom apps for your institution'],
 r:[['Staff attendance','Biometric'],['Campus entry','Controlled'],['Leave','Managed'],['Apps','Custom']],
 ov:['Institutes manage many staff, buildings and entry points, often with paper registers and manual leave records.','We bring attendance, leave and campus access into systems that are simple for staff and administrators to use.'],
 f:[['face','Staff attendance','Biometric attendance for teaching and non-teaching staff.'],['cal','Leave management','Requests and approvals without paperwork.'],['lock','Campus access','Control entry to buildings and restricted rooms.'],['code','Custom apps','Software built around how your institution works.']],
 rel:['p:people360','p:access','s:software'],
 q:[['Can it work for a small institute?','Yes. We tailor the solution to the size of your organisation.'],['Can you build something custom?','Yes. We build custom web and mobile applications.']]},
{s:'healthcare',n:'Healthcare',t:'INDUSTRY',h1:'Reliable staffing records and controlled access.',
 d:'Staff attendance and controlled access for clinics and hospitals.',
 b:['Attendance across rotating shifts','Restricted-area access control','Leave and payroll automation','Secure, role-based systems'],
 r:[['Shifts','Rotating'],['Restricted areas','Controlled'],['Leave and payroll','Automated'],['Access','Role-based']],
 ov:['Clinics and hospitals run around the clock with rotating shifts, and some areas must stay restricted.','We provide attendance, leave and payroll tools plus access control, with role-based permissions throughout.'],
 f:[['clock','Shift attendance','Handle rotating and night shifts.'],['lock','Restricted areas','Control who can enter sensitive areas.'],['pay','Leave and payroll','Automate approvals and payslips.'],['shield','Role-based access','Give each person only the access they need.']],
 rel:['p:people360','p:access','s:ai'],
 q:[['Does it support rotating shifts?','Yes. Shift rules are configured around your roster.'],['Can access be restricted by role?','Yes. Access rules are defined per person or role.']]},
{s:'retail',n:'Retail & services',t:'INDUSTRY',h1:'One view of your people across every branch.',
 d:'Attendance and workforce tools for multi-branch businesses.',
 b:['Attendance across branches','Employee mobile check-in','Leave and payroll','Central admin for owners'],
 r:[['Branches','Multi-site'],['Check-in','Mobile'],['Payroll','Automated'],['Admin','Central']],
 ov:['Businesses with several branches need to know who is working where, without calling each manager.','We give owners one admin view while staff check in simply from their phones or on-site devices.'],
 f:[['pin','Multi-branch attendance','See attendance for every location in one place.'],['phone','Mobile check-in','Employees check in from the app.'],['pay','Leave and payroll','Approvals and payslips in one system.'],['users','Central administration','Owners and managers see what they need.']],
 rel:['p:people360','p:attendance'],
 q:[['Can it handle many branches?','Yes. Multi-tenant administration lets you manage branches centrally.'],['Do staff need special devices?','Staff can check in from the mobile app. Biometric devices are optional.']]},
{s:'hospitality',n:'Hospitality',t:'INDUSTRY',h1:'Keep every shift, door and system running smoothly.',
 d:'Shift attendance, access and building systems for hotels and venues.',
 b:['Shift-based staff attendance','Back-of-house access control','HVAC and building monitoring','Multi-property management'],
 r:[['Staff shifts','Tracked'],['Back-of-house','Controlled'],['HVAC','Monitored'],['Properties','Multi-site']],
 ov:['Hotels and venues operate long hours with large shift-based teams and many areas that guests should not enter.','We combine staff attendance, access control and building monitoring in tools that suit busy properties.'],
 f:[['clock','Shift attendance','Record attendance across long operating hours.'],['lock','Back-of-house access','Control staff-only areas.'],['bld','Building monitoring','Keep an eye on HVAC and systems.'],['pin','Multi-property view','Manage several properties together.']],
 rel:['p:people360','p:access','s:iot'],
 q:[['Can we manage several properties?','Yes. Multi-site and multi-tenant management is supported.'],['Can staff-only areas be restricted?','Yes, with access control.']]},
{s:'public',n:'Public sector',t:'INDUSTRY',h1:'Dependable systems for public service.',
 d:'Attendance, access control and custom software for government and public bodies.',
 b:['Biometric attendance for offices','Controlled entry to buildings','Custom applications and dashboards','Secure, role-based access'],
 r:[['Attendance','Biometric'],['Entry','Controlled'],['Applications','Custom'],['Access','Role-based']],
 ov:['Public bodies need records that are accurate, auditable and easy to review.','We provide attendance, access control and custom applications designed around clear roles and reliable reporting.'],
 f:[['face','Biometric attendance','Reliable attendance records for offices.'],['lock','Building access','Control entry to offices and secure areas.'],['code','Custom applications','Software built for your process.'],['shield','Role-based access','Clear permissions for every user.']],
 rel:['p:people360','p:access','s:software'],
 q:[['Can you build custom applications?','Yes. We build web and mobile applications around your process.'],['Are reports auditable?','Attendance and access events are logged and can be reported on.']]}
];
INDUSTRIES.forEach(function(x){x.st=STEPS_I;x.c=x.c||['Attendance','Access control','Tracking','Custom software']});

var CFG={service:{list:SERVICES,key:'services',label:'Services'},industry:{list:INDUSTRIES,key:'industries',label:'Industries'}};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function href(type,slug){return 'detail.html?type='+type+'&s='+slug}
function find(type,slug){return CFG[type].list.filter(function(x){return x.s===slug})[0]}
function resolve(key){
 var p=key.split(':'),k=p[0],s=p[1];
 if(k==='p')return PRD[s];
 var type=k==='s'?'service':'industry',x=find(type,s);
 return [x.n,href(type,s),x.d];
}
var rmo=window.rm||false;

/* ---------- cards + centre preview on index.html ---------- */
var SV_ICON={software:'code',ai:'face',iot:'bld',cloud:'cloud',gps:'pin',support:'shield'};
var IN_ICON={manufacturing:'chart',realestate:'bld',construction:'pin',education:'users',healthcare:'shield',retail:'pay',hospitality:'clock',public:'lock'};
var fine=!!(window.matchMedia&&window.matchMedia('(hover:hover) and (pointer:fine)').matches);
var pv=null,pvFrom=null,timer=null,armed=true;

function buildPV(){
 pv=document.createElement('div');pv.className='pv';pv.setAttribute('aria-hidden','true');
 pv.innerHTML='<div class="pv-card" role="dialog" aria-modal="true" aria-labelledby="pvt"><button type="button" class="pv-x" aria-label="Close">&times;</button><div class="pv-l"><svg viewBox="0 0 24 24" aria-hidden="true"></svg><p class="pv-tag"></p><h3 id="pvt"></h3></div><div class="pv-r"><p class="pv-d"></p><ul class="ticks"></ul><div class="pv-a"><a class="btn vio arrow" id="pvgo" href="#">View more</a><a class="pv-alt" href="#contact">Talk to an expert</a></div></div></div>';
 document.body.appendChild(pv);
 pv.addEventListener('click',function(e){if(e.target===pv||e.target.closest('.pv-x')||e.target.closest('.pv-alt'))closePV()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')closePV()});
}
function openPV(type,x,icon,from){
 if(!pv)buildPV();
 clearTimeout(timer);
 pvFrom=from||null;
 pv.querySelector('.pv-l svg').innerHTML=IC[icon];
 pv.querySelector('.pv-tag').textContent=x.t;
 pv.querySelector('#pvt').textContent=x.n;
 pv.querySelector('.pv-d').textContent=x.d;
 pv.querySelector('.ticks').innerHTML=x.b.map(function(i){return '<li>'+esc(i)+'</li>'}).join('');
 pv.querySelector('#pvgo').setAttribute('href',href(type,x.s));
 pv.classList.add('on');pv.setAttribute('aria-hidden','false');
 document.documentElement.style.overflow='hidden';
 setTimeout(function(){var g=pv.querySelector('#pvgo');if(g)g.focus({preventScroll:true})},60);
}
function closePV(){
 if(!pv||!pv.classList.contains('on'))return;
 pv.classList.remove('on');pv.setAttribute('aria-hidden','true');
 document.documentElement.style.overflow='';
 armed=false;
 if(pvFrom&&pvFrom.focus)pvFrom.focus({preventScroll:true});
}
function cards(type,listId){
 var cfg=CFG[type],el=document.getElementById(listId);if(!el)return null;
 var icons=type==='service'?SV_ICON:IN_ICON,byS={};
 cfg.list.forEach(function(x){byS[x.s]=x});
 el.innerHTML=cfg.list.map(function(x){
  var h=href(type,x.s);
  return type==='service'
   ?'<a class="card" href="'+h+'" data-s="'+x.s+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+IC[icons[x.s]]+'</svg><h3>'+esc(x.n)+'</h3><p>'+esc(x.d)+'</p><span class="more arrow">Learn more</span></a>'
   :'<a href="'+h+'" data-s="'+x.s+'">'+esc(x.n)+'</a>';
 }).join('');
 [].forEach.call(el.children,function(c){
  var x=byS[c.getAttribute('data-s')];
  c.addEventListener('click',function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.button)return;e.preventDefault();openPV(type,x,icons[x.s],c)});
  if(fine){
   c.addEventListener('pointerenter',function(){if(!armed)return;clearTimeout(timer);timer=setTimeout(function(){openPV(type,x,icons[x.s],null)},450)});
   c.addEventListener('pointerleave',function(){clearTimeout(timer);armed=true});
  }
 });
 return {open:function(slug){
  var x=byS[slug];if(!x)return false;
  el.scrollIntoView({behavior:window.rm?'auto':'smooth',block:'center'});
  setTimeout(function(){openPV(type,x,icons[slug],null)},window.rm?0:450);return true}};
}
window.addEventListener('scroll',function(){clearTimeout(timer)},{passive:true});
var T={services:cards('service','slist'),industries:cards('industry','ilist')};
if(T.services||T.industries){
 var fromHash=function(){var m=location.hash.match(/^#(services|industries)-(\w+)/);return m&&T[m[1]]?T[m[1]].open(m[2]):false};
 window.addEventListener('hashchange',fromHash);
 [].forEach.call(document.querySelectorAll('a[href^="#services-"],a[href^="#industries-"]'),function(a){
  a.addEventListener('click',function(e){e.preventDefault();var h=a.getAttribute('href');try{history.pushState(null,'',h)}catch(x){location.hash=h}fromHash()})});
 setTimeout(fromHash,60);
}

/* ---------- detail page ---------- */
function detail(){
 var app=document.getElementById('app');if(!app)return;
 var q=new URLSearchParams(location.search),type=q.get('type')==='industry'?'industry':'service',cfg=CFG[type],list=cfg.list,k=-1;
 list.forEach(function(x,i){if(x.s===q.get('s'))k=i});
 if(k<0){location.replace('index.html#'+cfg.key);return}
 var x=list[k],prev=list[(k+list.length-1)%list.length],next=list[(k+1)%list.length];
 var isI=type==='industry',helpTitle=isI?'How we help':'What we deliver';
 document.title=x.n+' | Kavidhan Global Solutions';
 var md=document.querySelector('meta[name=description]');if(md)md.setAttribute('content',x.d);
 var cards=x.f.map(function(c){return '<article class="card flat"><svg viewBox="0 0 24 24" aria-hidden="true">'+IC[c[0]]+'</svg><h3>'+esc(c[1])+'</h3><p>'+esc(c[2])+'</p></article>'}).join('');
 var steps=x.st.map(function(s){return '<li><strong>'+esc(s[0])+'</strong><span>'+esc(s[1])+'</span></li>'}).join('');
 var chips=x.c.map(function(c){return '<li>'+esc(c)+'</li>'}).join('');
 var rel=x.rel.map(resolve).map(function(r){return '<div class="doc"><div><h3>'+esc(r[0])+'</h3><p>'+esc(r[2])+'</p></div><a class="btn vio" href="'+r[1]+'">View</a></div>'}).join('');
 var faq=x.q.map(function(i){return '<details><summary>'+esc(i[0])+'</summary><p>'+esc(i[1])+'</p></details>'}).join('');
 var ticks=x.b.map(function(i){return '<li>'+esc(i)+'</li>'}).join('');
 var svg='<svg viewBox="0 0 500 600" fill="none" stroke="#a78bfa" stroke-width="1.5" aria-hidden="true"><path d="M500 60H380l-40 40v80l-50 50H160"/><path d="M500 200h-90l-30 30v120l-60 60H220v90"/><path d="M500 330h-40l-30 30v150h-80l-40 40H250"/><circle cx="160" cy="230" r="6"/><circle cx="220" cy="510" r="6"/><circle cx="380" cy="100" r="6"/><circle cx="340" cy="180" r="6"/></svg>';
 app.innerHTML=
 '<section class="pg-hero">'+svg+'<div class="wrap"><p class="crumb"><a href="index.html">Home</a><span>/</span><a href="index.html#'+cfg.key+'-'+x.s+'">'+cfg.label+'</a><span>/</span>'+esc(x.n)+'</p><span class="badge">'+esc(x.t)+'</span><h1>'+esc(x.h1)+'</h1><p class="lead">'+esc(x.d)+'</p><div class="cta"><a href="index.html#contact" class="btn gold">Talk to an expert</a><a href="#related" class="btn ghost">Related products and services</a></div></div></section>'+
 '<div class="subnav" role="navigation" aria-label="On this page"><div class="wrap"><a href="#overview">Overview</a><a href="#help">'+helpTitle+'</a><a href="#how">How it works</a><a href="#related">Related</a><a href="#faq">FAQ</a></div></div>'+
 '<section id="overview"><div class="wrap"><div class="head"><p class="eyebrow">Overview</p><h2>'+esc(x.n)+'</h2></div><div class="split"><div class="prose">'+x.ov.map(function(p){return '<p>'+esc(p)+'</p>'}).join('')+'</div><ul class="ticks">'+ticks+'</ul></div></div></section>'+
 '<section id="help" class="paper"><div class="wrap"><div class="head"><p class="eyebrow">'+helpTitle+'</p><h2>'+(isI?'Solutions for '+esc(x.n):'What you get')+'</h2></div><div class="grid3">'+cards+'</div></div></section>'+
 '<section id="how" class="dark"><div class="wrap"><div class="head"><p class="eyebrow" style="color:var(--gold)">How it works</p><h2>From first call to live system</h2></div><ul class="flow">'+steps+'</ul><ul class="chips">'+chips+'</ul></div></section>'+
 '<section id="related" class="paper"><div class="wrap"><div class="head"><p class="eyebrow">Related</p><h2>Where to go next</h2></div><div class="docs">'+rel+'</div></div></section>'+
 '<section id="faq"><div class="wrap"><div class="head"><p class="eyebrow">FAQ</p><h2>Common questions</h2></div>'+faq+'</div></section>'+
 '<div class="wrap"><div class="pn"><a href="'+href(type,prev.s)+'"><small>Previous</small>&#8249; '+esc(prev.n)+'</a><a href="'+href(type,next.s)+'" style="text-align:right"><small>Next</small>'+esc(next.n)+' &#8250;</a></div></div>'+
 '<div class="band"><div class="wrap"><h2>Talk to us about '+esc(x.n.toLowerCase())+'</h2><a href="index.html#contact" class="btn gold">Talk to an expert</a></div></div>';
 var links=[].slice.call(app.querySelectorAll('.subnav a'));
 if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;links.forEach(function(a){a.setAttribute('aria-current',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-35% 0px -60% 0px'});
  links.forEach(function(a){var s=app.querySelector(a.getAttribute('href'));if(s)io.observe(s)});
 }
}
detail();
})();
