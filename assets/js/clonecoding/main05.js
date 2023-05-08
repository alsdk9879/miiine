// main-slide
const mainSlider = new Swiper(".main-slide", {
  loop: true,
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
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

// section3 call-plan-recommand-slide
const swiper = new Swiper(".call-plan-recommand-slide", {
  loop: true,
  slidesPerView : 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1300: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});