// main-slide
const mainSlider = new Swiper(".main-slide", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// cont2-slide
let viewport = window.innerWidth;
let cont2Slider = undefined;

function destroySwiper() {
  if( viewport <= 768 && cont2Slider == undefined ) {
    cont2Slider = new Swiper(".cont2-slide", {
      loop: true,
      slidesPerView : 1,
      spaceBetween: 32,
      navigation: {
        nextEl: ".cont4-slider .swiper-button-next",
        prevEl: ".cont4-slider .swiper-button-prev",
      },
    });
  } else if( viewport > 768 && cont2Slider != undefined ) {
    cont2Slider.destroy();
    cont2Slider = undefined;
  }
};

window.addEventListener('resize', () => {
  viewport = window.innerWidth;
  destroySwiper();
});
destroySwiper();

// cont4-slide
let cont4Slider = undefined;

function destroySwiper2() {
  if( viewport <= 768 && cont4Slider == undefined ) {
    cont4Slider = new Swiper(".cont4-slide", {
      loop: true,
      slidesPerView : 1,
      spaceBetween: 32,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  } else if( viewport > 768 && cont4Slider != undefined ) {
    cont4Slider.destroy();
    cont4Slider = undefined;
  }
};

window.addEventListener('resize', () => {
  viewport = window.innerWidth;
  destroySwiper2();
});
destroySwiper2();