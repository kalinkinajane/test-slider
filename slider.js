(function () {
  new Swiper(".slider-one", {
    slidesPerView: 1.95,
    slideToClickedSlide: true,
    spaceBetween: 68,
    initialSlide: 2,
    mousewheel: {
      sensitivity: 1,
      invert: true,
      releaseOnEdges: true,
    },
    autoplay: {
      delay: 4000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    breakpoints: {
       320: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      550: {
        spaceBetween: 20,
      },
      728: {
        slidesPerView: 1.7,
        spaceBetween: 48,
      },
      1060: {
        slidesPerView: 1.95,
        spaceBetween: 68,
      },
    },
  });
})();

(function () {
  new Swiper(".slider-second", {
    slideToClickedSlide: true,
    initialSlide: 0,
    mousewheel: {
      sensitivity: 1,
      invert: true,
      releaseOnEdges: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      stopOnLastSlide: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      550: {
        slidesPerView: 2.6,
        spaceBetween: 20,
      },
      728: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1060: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
    },
  });
})();

(function () {
  new Swiper(".slider-third", {
    slideToClickedSlide: true,
    spaceBetween: 70,
    initialSlide: 5,
    mousewheel: {
      sensitivity: 1,
      invert: true,
      releaseOnEdges: true,
    },
    autoplay: {
      delay: 4000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },
      550: {
        slidesPerView: 1.6,
        spaceBetween: 20,
      },
      728: {
        slidesPerView: 1.7,
        spaceBetween: 40,
      },
      1060: {
        slidesPerView: 1.87,
        spaceBetween: 70,
      },
    },
  });
})();
