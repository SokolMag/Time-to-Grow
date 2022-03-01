new Swiper('.image-slider',{
  slideToClickedSlide: true,
  slidesPerView: 5,
  loop: true,
  freeMode: true,
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".image-slider"
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    426: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
