let scrollAnimationElm = document.querySelectorAll('.sa');
let scrollAnimationFunc = function() {
  for(let i = 0; i < scrollAnimationElm.length; i++) {
    let triggerMargin = 150;
    let elm = scrollAnimationElm[i];
    let showPos = 0;
    if (elm.dataset.sa_trigger) {
      showPos = document.querySelector(elm.dataset.sa_trigger).getBoundingClientRect().top + triggerMargin;} else {
        showPos = elm.getBoundingClientRect().top + triggerMargin;
      }
    if(window.innerHeight > showPos) {
      elm.classList.add('show');
      }
    }       
  }

window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll',scrollAnimationFunc);