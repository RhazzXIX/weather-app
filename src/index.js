import './styles/style.css';
import gitHub from './images/GitHub-Mark-64px.png';
import magnify from './images/magnify.svg';
import currentWeather from './scripts/current-weather';

(function() {
  const body = document.querySelector('body');
  const searchBtn = body.querySelector('img#search');
  const github = body.querySelector('img#gitHub');
  const input = body.querySelector('input#city')
  github.src = gitHub;
  function checkForm(e) {
    e.stopPropagation();
    console.log(e);
    if (input.value) e.preventDefault();
  }
  searchBtn.addEventListener('click', checkForm);
  console.log(searchBtn);
  searchBtn.src = magnify;

  currentWeather.setLocation('taguig');
  
  currentWeather.layWeatherData()
    .then(weather => console.log(weather))
}) ()

