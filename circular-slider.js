new Swiper(".slider", {

  });
  var deg = 0;
var img = document.querySelector(".circular-slider__img");
console.log(img);
img.onclick = function(){
  goleft();
};
  function goleft(id){
  
    var id = setInterval(rotate, 40);
    function rotate(){
      img.style.transform = 'rotate(-59deg)'
      // console.log(deg)
      // img.style.WebkitTransform = "rotate("+deg+"deg)";
      // deg = (deg == 360)?0:deg+1;
      // if (deg == 0) clearInterval(id);
    };
  };
  function goright(id){
  
    var id = setInterval(rotate, 40);
    function rotate(){
      img.style.transform = 'rotate(59deg)'
      // console.log(deg)
      // img.style.WebkitTransform = "rotate("+deg+"deg)";
      // deg = (deg == 360)?0:deg+1;
      // if (deg == 0) clearInterval(id);
    };
  };


  document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;
var yDown = null;
 
function getTouches(evt) {
return evt.touches || // чистый API JS
evt.originalEvent.touches; // jQuery
}
 
function handleTouchStart(evt) {
const firstTouch = getTouches(evt)[0];
xDown = firstTouch.clientX;
yDown = firstTouch.clientY;
};
 
function handleTouchMove(evt) {
if ( ! xDown || ! yDown ) {
return;
}
 
var xUp = evt.touches[0].clientX;
var yUp = evt.touches[0].clientY;
 
var xDiff = xDown - xUp;
var yDiff = yDown - yUp;
 
if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/* отлавливаем разницу в движении */
if ( xDiff > 0 ) {
  goleft();
} else {
  goright()
}
}

xDown = null;
yDown = null;
};