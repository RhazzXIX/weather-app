import './styles/style.css'
import currentWeather from './scripts/current-weather';

const body = document.querySelector('body');

currentWeather.setLocation('taguig');

currentWeather.layWeatherData()
  .then(weather => console.log(weather))
  .catch(err => console.log(err))