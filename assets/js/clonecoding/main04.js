// main-slide
const mainSlider = new Swiper('.main-slide', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
    },
  },
});

// main-slide play & pause
const btnSliderPlay = document.querySelector('#main04 .main-slide .swiper-play');
btnSliderPlay.addEventListener('click', () => {
  btnSliderPlay.classList.toggle('play');

  if(btnSliderPlay.classList.contains('play')) {
    mainSlider.autoplay.start();
  } else {
    mainSlider.autoplay.stop();
  }
});

// cont2-slide
let viewport = window.innerWidth;
let cont2Slider = undefined;

function destroySwiper() {
  if( viewport <= 768 && cont2Slider == undefined ) {
    cont2Slider = new Swiper('.cont2-slide', {
      loop: true,
      slidesPerView : 1,
      spaceBetween: 32,
      navigation: {
        nextEl: '.cont4-slider .swiper-button-next',
        prevEl: '.cont4-slider .swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
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
    cont4Slider = new Swiper('.cont4-slide', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      slidesPerView : 1,
      spaceBetween: 32,
      pagination: {
        el: '.swiper-pagination',
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

// footer banner slide
const footerBannerSlider = new Swiper('.footer-banner-slide', {
  loop: true,
  autoplay: {
    delay: 8000,
  },
  slidesPerView : 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});