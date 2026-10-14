(function(){
  var chips=document.querySelectorAll('.filters .chip'),events=document.querySelectorAll('.event'),empty=document.getElementById('no-events'),count=document.getElementById('event-count');
  function apply(s){
    var shown=0;
    events.forEach(function(e){var m=s==='all'||e.dataset.sport===s;e.hidden=!m;if(m)shown++;});
    if(empty)empty.hidden=shown!==0;
    if(count)count.textContent=shown+(shown===1?' demonstration event shown':' demonstration events shown');
  }
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.setAttribute('aria-pressed','false');});
    c.setAttribute('aria-pressed','true');apply(c.dataset.filter);
  });});
  apply('all');
})();
