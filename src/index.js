import "./styles/style.css";
import gitHub from "./images/GitHub-Mark-64px.png";
import magnify from "./images/magnify.svg";
import currentWeather from "./scripts/current-weather";
import create from "./scripts/createDom";

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
    input.value = "";
  }

  function postCard(weatherData) {
    const post = create.weatherCard(weatherData);
    if (main.querySelector("div#card")) {
      const currentCard = main.querySelector("div#card");
      main.removeChild(currentCard);
    }
    post.unitBtn.onclick = switchUnits;
    main.appendChild(post.card);
  }

  function removeError(e) {
    e.stopPropagation();
    const currentError = body.querySelector("section#error");
    body.removeChild(currentError);
  }

  function postError(err) {
    const error = create.errorSection(err);
    body.appendChild(error);
    error.addEventListener("click", removeError);
    body.addEventListener("keypress", removeError, {once: true} ) ;
  }

  async function getWeather(city) {
    try {
      currentWeather.setLocation(city);
      return currentWeather.layWeatherData();
    } catch (err) {
      return err;
    }
  }

  async function facilitateSubmission() {
    try {
      const weather = await getWeather(cityInput);
      postCard(weather);
      clearForm();
    } catch (err) {
      postError(err);
      clearForm();
    }
  }

  function switchUnits(e) {
    e.stopPropagation();
    currentWeather.toggleUnits();
    facilitateSubmission();
  }

  function submitForm(e) {
    e.stopPropagation();
    if (input.value) {
      e.preventDefault();
      cityInput = input.value;
      facilitateSubmission();
    }
  }

  cityInput = "Switzerland";
  facilitateSubmission();

  form.addEventListener("submit", submitForm);
})();
