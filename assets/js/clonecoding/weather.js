const btnWeather = document.querySelector('.btn-weather');

btnWeather.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(success);
});

const success = (position) => {
  console.log(position)
}