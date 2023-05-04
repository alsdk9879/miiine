// main-slide
const mainSlider = new Swiper(".main-slide", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// aside-menu-slide
const asideMenuSlider = new Swiper(".aside-menu-slide", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});