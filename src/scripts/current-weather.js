const currentWeather = (function () {
  let location;
  let url;
  let units = "metric";
  let error = false;
  let errorValue;

  function setUrl() {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fbb6454e4e06d89b469e57e298ab2736&units=${units}`;
  }

  function toggleUnits() {
    if (units === "metric") {
      units = "imperial";
    } else {
      units = "metric";
    }
    setUrl();
  }

  function setLocation(locationName) {
    location = locationName;
    setUrl();
  }

  function fetchWeather() {
    return fetch(url, { mode: "cors" })
      .then((response) => {
        if (!response.ok) error = true;
        return response.json();
      })
      .then((json) => {
        if (error) {
          throw new Error(json.message);
        } else {
          const weatherData = json;
          return weatherData;
        }
      })
      .catch((err) => {
        errorValue = err.message;
      });
  }

  async function layWeatherData() {
    try {
      const data = { ...(await fetchWeather()) };
      if (error) {
        throw new Error(errorValue);
      }
      const weather = {
        cloudPercentage: data.clouds.all,
        cityName: data.name,
        feelsLike: data.main.feels_like,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humidity: data.main.humidity,
        mainWeather: data.weather[0].main,
        description: data.weather[0].description,
        iconSrc: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        unit: units,
      };

      switch (units) {
        case "imperial":
          weather.temp = `${data.main.temp}℉`;
          weather.feelsLike = `${data.main.feels_like}℉`;
          weather.maxTemp = `${data.main.temp_max}℉`;
          weather.minTemp = `${data.main.temp_min}℉`;
          weather.windSpeed = `${data.wind.speed} mph`;
          break;
        default:
          weather.temp = `${data.main.temp}℃`;
          weather.feelsLike = `${data.main.feels_like}℃`;
          weather.maxTemp = `${data.main.temp_max}℃`;
          weather.minTemp = `${data.main.temp_min}℃`;
          weather.windSpeed = `${data.wind.speed} m/s`;
      }

      return weather;
    } catch (err) {
      error = false;
      throw new Error(err.message);
    }
  }

  return { setLocation, layWeatherData, toggleUnits };
})();

export default currentWeather;
