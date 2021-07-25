new Swiper(".slider", {

  });
  $('.circular-slider__img').on('swipeleft', function(e) { 
    if ($(".circular-slider__img").css('transform') == 'none') {
      $(".circular-slider__img").css({'transform': 'rotate(-60deg)'})
    }
    // $(".circular-slider__img").removeClass('rotate-left').addClass('rotate');
});
  $('.circular-slider__img').on('swiperight', function(e) { 
    if ($(".circular-slider__img").css('transform') == 'none') {
      $(".circular-slider__img").css({'transform': 'rotate(60deg)'})
    }
});
