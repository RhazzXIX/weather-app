import './styles/style.css';
import gitHub from './images/GitHub-Mark-64px.png';
import magnify from './images/magnify.svg';
import currentWeather from './scripts/current-weather';
import create from './scripts/card';

(function() {
  const body = document.querySelector('body');
  const searchBtn = body.querySelector('img#search');
  const github = body.querySelector('img#gitHub');
  const input = body.querySelector('input#city');
  const main = body.querySelector('main');

  github.src = gitHub;
  function checkForm(e) {
    e.stopPropagation();
    console.log(e);
    if (input.value) e.preventDefault();
  }
  searchBtn.addEventListener('click', checkForm);
  searchBtn.src = magnify;

  currentWeather.setLocation('narra');
  // currentWeather.toggleUnits();
  
  currentWeather.layWeatherData()
    .then(weatherData => {
      const post = create.weatherCard(weatherData);
      if(main.querySelector('div#card')) {
        const currentCard = main.querySelector('div#card');
        main.removeChild(currentCard);
      }
      main.appendChild(post.card);
    })
    .catch(err => console.log(err));

}) ()

