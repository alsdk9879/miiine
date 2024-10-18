// main top slider
const weatherContSlide = new Swiper('.swiper.weather-content', {
  slidesPerView: 2,
  spaceBetween: 14,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 14,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// ajax 연동
// openWeather API KEY : 178ac4f0b3ef7684b868f2df429ea46d
function setPlayEvent(pick) {
  $.ajax({
    url: apiUrl + '/api/eventUsers/updateRaffle',
    type: 'POST',
    beforeSend: preLoading(true),
    caches: false,
    data: {
      eId: productId,
      userToken: getCookie(`token_${saveEventName}`),
      options: {
        playWeek: pick,
      },
    },
    headers: {
      userToken: getCookie(`token_${saveEventName}`),
    },
    success: function (data) {
      preLoading(false);

      /**
       * 비동기 통신이 성공했을떄 처리하고 싶은 로직
       */
      console.log('== data === : ', data);
    },
    error: function (err) {
      /**
       * 비동기 통신이 실패했을때 처리하고 싶은 로직
       */
      preLoading(false);

      alert('네트워크 오류로 서버와의 통신이 실패하였습니다.');
    },
  });
}

function getRaffle() {
  $.ajax({
    url: apiUrl + '/api/eventUsers/getRaffle',
    type: 'GET',
    caches: false,
    data: {
      eId: productId,
      userToken: getCookie(`token_${saveEventName}`),
    },
    headers: {
      userToken: getCookie(`token_${saveEventName}`),
    },
    success: function (data) {
      console.log('== data == : ', data);
    },
    error: function (err) {
      alert('네트워크 오류로 서버와의 통신이 실패하였습니다.');
    },
  });
}
