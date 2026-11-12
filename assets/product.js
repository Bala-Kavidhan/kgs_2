(function(){
// screenshot lightbox
var lb=document.createElement('div');lb.className='lb';lb.hidden=true;
lb.innerHTML='<button type="button" aria-label="Close">&times;</button><img alt="">';
document.body.appendChild(lb);
var im=lb.querySelector('img');
function close(){lb.hidden=true}
lb.addEventListener('click',close);
document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
document.querySelectorAll('.sc img').forEach(function(i){i.style.cursor='zoom-in';i.addEventListener('click',function(){im.src=i.currentSrc||i.src;im.alt=i.alt;lb.hidden=false})});
// highlight current section in the sub-navigation
var links=[].slice.call(document.querySelectorAll('.subnav a'));
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;
  links.forEach(function(a){a.setAttribute('aria-current',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-35% 0px -60% 0px'});
 links.forEach(function(a){var s=document.querySelector(a.getAttribute('href'));if(s)io.observe(s)});
}
})();
