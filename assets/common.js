var CFG={formspree:'YOUR_FORM_ID',wa:'910000000000',to:'info@kavidhan.com'};
var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.getElementById('y').textContent=new Date().getFullYear();
var t=document.querySelector('.tog'),m=document.getElementById('menu');
t.addEventListener('click',function(){var o=m.classList.toggle('open');t.setAttribute('aria-expanded',o)});
document.querySelectorAll('#menu a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');t.setAttribute('aria-expanded','false')})});

document.getElementById('waf').href='https://wa.me/'+CFG.wa;
// newsletter
var nl=document.getElementById('nl');if(nl)nl.addEventListener('submit',function(e){e.preventDefault();var m=this.querySelector('input').value;location.href='mailto:'+CFG.to+'?subject='+encodeURIComponent('Subscribe')+'&body='+encodeURIComponent('Please subscribe: '+m)});
// cookie banner
var ck=document.getElementById('ck');
try{if(!localStorage.getItem('kdgs_ck'))ck.hidden=false}catch(e){ck.hidden=false}
document.getElementById('ckb').onclick=function(){ck.hidden=true;try{localStorage.setItem('kdgs_ck','1')}catch(e){}};
// back to top
var tp=document.getElementById('top2');
window.addEventListener('scroll',function(){tp.hidden=window.scrollY<700},{passive:true});
tp.onclick=function(){window.scrollTo({top:0,behavior:rm?'auto':'smooth'})};

// language switcher (Google Translate loads only when a non-English language is chosen)
(function(){
var LB={en:'India (English)',ta:'தமிழ் (Tamil)',hi:'हिन्दी (Hindi)',te:'తెలుగు (Telugu)',kn:'ಕನ್ನಡ (Kannada)',ml:'മലയാളം (Malayalam)'};
var b=document.getElementById('langb'),menu=document.getElementById('langm');if(!b||!menu)return;
var m=document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-z-]+)/),c=m&&LB[m[1]]?m[1]:'en';
document.getElementById('langl').textContent=LB[c];
menu.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-current',x.dataset.l===c)});
function shut(){menu.hidden=true;b.setAttribute('aria-expanded','false')}
function clearC(){var p='=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';document.cookie='googtrans'+p;document.cookie='googtrans'+p+';domain='+location.hostname;document.cookie='googtrans'+p+';domain=.'+location.hostname}
b.addEventListener('click',function(e){e.stopPropagation();var o=menu.hidden;menu.hidden=!o;b.setAttribute('aria-expanded',o)});
document.addEventListener('click',shut);
document.addEventListener('keydown',function(e){if(e.key==='Escape')shut()});
menu.addEventListener('click',function(e){var t=e.target.closest('button');if(!t)return;clearC();if(t.dataset.l!=='en')document.cookie='googtrans=/en/'+t.dataset.l+';path=/';location.reload()});
if(c!=='en'){
 var g=document.createElement('div');g.id='gt';g.style.display='none';document.body.appendChild(g);
 window.gtInit=function(){new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false},'gt')};
 var s=document.createElement('script');s.src='https://translate.google.com/translate_a/element.js?cb=gtInit';document.head.appendChild(s);
}
})();
