import "./styles/style.css";
import gitHub from "./images/GitHub-Mark-64px.png";
import magnify from "./images/magnify.svg";
import currentWeather from "./scripts/current-weather";
import create from "./scripts/card";

(function () {
  const body = document.querySelector("body");
  const input = body.querySelector("input#city");
  const main = body.querySelector("main");
  const form = body.querySelector("form");
  let cityInput;

  const github = body.querySelector("img#gitHub");
  github.src = gitHub;

  const searchBtn = body.querySelector("img#search");
  searchBtn.src = magnify;

  function clearForm() {
    input.value ='';
  }

  function postCard(weatherData) {
    const post = create.weatherCard(weatherData);
    if (main.querySelector("div#card")) {
      const currentCard = main.querySelector("div#card");
      main.removeChild(currentCard);
    }
    main.appendChild(post.card);
  }

  async function getWeather (city) {
    try {
      currentWeather.setLocation(city)
      return  currentWeather.layWeatherData()
    } catch (err) { 
      console.log(err);
      return err
    };
  }
  
  async function facilitateSubmission() {
    try {
      const weather = await getWeather(cityInput);
      postCard(weather); 
      clearForm();
    } catch (err) {
      console.log(err);
    }
  }

  function submitForm(e) {
    e.stopPropagation();
    console.log(e);
    if (input.value) { 
      e.preventDefault();
      cityInput = input.value;
      facilitateSubmission();
    };
  }

  cityInput = 'Switzerland';
  facilitateSubmission();

  form.addEventListener("submit", submitForm);
})();
