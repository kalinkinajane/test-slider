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