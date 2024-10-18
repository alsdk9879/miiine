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

// fetch()
// openWeather API KEY : 178ac4f0b3ef7684b868f2df429ea46d
const tempSection = document.querySelectorAll('.temperature');
const maxTempSection = document.querySelectorAll('.temperature .max');
const minTempSection = document.querySelectorAll('.temperature .min');
const locationSection = document.querySelector('.location');
const descSection = document.querySelector('.description');
const textSection = document.querySelectorAll('.txt');
const API_KEY = '178ac4f0b3ef7684b868f2df429ea46d';

const getWeather = (lat, lon) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // 현재 위치
      const location = json.city.name;
      locationSection.innerText = location + ', IN';

      // 현재 시간, 기온, 날씨
      const filteredData = json.list.filter((item) => {
        return item.dt_txt.includes('12:00:00');
      });
      console.log(filteredData);

      filteredData.forEach((el, index) => {
        console.log(el);

        const date = el.dt_txt; // 날짜와 시간
        const temp = el.main.temp; // 기온
        const weatherDescription = el.weather[0].description; // 날씨 설명
        // console.log(`날짜: ${date}, 기온: ${temp}°C, 날씨: ${weatherDescription}`);

        // tempSection.forEach((el, index) => {
        //   // console.log(el);
        //   el.innerText = temp + '°';
        // });

        if (tempSection[index + 1]) {
          tempSection[index + 1].innerText = `${temp}°C`;

          if (maxTempSection[index + 1]) {
            maxTempSection[index + 1].innerText = `${el.main.temp_max}°C`;
          }

          if (minTempSection[index + 1]) {
            minTempSection[index + 1].innerText = `${el.main.temp_min}°C`;
          }
        }

        if (textSection[index]) {
          // 온도를 temp 요소에 삽입
          textSection[index].innerText = `${date}°C`;
        }

        // descSection.innerText = description;
      });

      // const temperature = json.main.temp;
      // const description = json.weather[0].description;

      // tempSection.forEach((el) => {
      //   el.innerText = temperature + '°';
      // });
      // locationSection.forEach((el) => {
      //   el.innerText = location + ', IN';
      // });
      // descSection.innerText = description;
    })
    .catch((error) => console.error('Error fetching weather data:', error));
};

const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);
};

const fail = () => {
  alert('fail');
};

navigator.geolocation.getCurrentPosition(success, fail);
