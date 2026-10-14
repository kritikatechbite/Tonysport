(function(){
  var chips=document.querySelectorAll('.filters .chip'),cards=document.querySelectorAll('[data-cat]'),empty=document.getElementById('no-articles');
  function apply(c){
    var n=0;cards.forEach(function(el){var m=c==='all'||el.dataset.cat===c;el.hidden=!m;if(m)n++;});
    if(empty)empty.hidden=n!==0;
  }
  chips.forEach(function(b){b.addEventListener('click',function(){
    chips.forEach(function(x){x.setAttribute('aria-pressed','false');});
    b.setAttribute('aria-pressed','true');apply(b.dataset.filter);
  });});
})();
(function(){
  function openHash(){var id=location.hash.slice(1);if(!id)return;var el=document.getElementById(id);if(!el)return;var d=el.querySelector('details');if(d)d.open=true;}
  window.addEventListener('hashchange',openHash);openHash();
})();
