(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('site-nav');
  if(t&&n){
    var close=function(){n.classList.remove('open');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open menu');};
    t.addEventListener('click',function(){
      var o=n.classList.toggle('open');t.setAttribute('aria-expanded',String(o));t.setAttribute('aria-label',o?'Close menu':'Open menu');
    });
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){close();t.focus();}});
    document.addEventListener('click',function(e){if(n.classList.contains('open')&&!n.contains(e.target)&&!t.contains(e.target))close();});
    n.addEventListener('click',function(e){if(e.target.closest('a'))close();});
    window.addEventListener('resize',function(){if(window.innerWidth>820)close();});
  }
  var items=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    items.forEach(function(i){io.observe(i);});
  }else{items.forEach(function(i){i.classList.add('in');});}
  var y=document.querySelectorAll('.year');y.forEach(function(s){s.textContent=new Date().getFullYear();});
})();
