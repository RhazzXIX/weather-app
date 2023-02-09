const currentWeather = (function () {
  let location;
  let url;
  let units = "metric";
  let error = false;

  function setUrl() {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fbb6454e4e06d89b469e57e298ab2736&units=${units}`;
    console.log(url);
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
    console.log(location);
    setUrl();
  }

  function fetchWeather() {
    return fetch(url, { mode: "cors" })
    .then((response) => {
      if (!response.ok) error = true;
      console.log(response);
      return response.json();
    })
    .finally((json) => {
        console.log(error);
        if (error) {
          error = false
          throw new Error(json.message);
        }
        const weatherData = json;
        return weatherData;
      })
      .catch((err) => {
        console.log(err);
      });
  }


  async function layWeatherData() {
    try {
      const data = {...await fetchWeather()};
      const weather = {
        cloudPercentage: data.clouds.all,
        cityName: data.name,
        temp: data.main.temp,
        feelsLike: data.main.feels_like,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humidity: data.main.humidity,
        mainWeather: data.weather[0].main,
        description: data.weather[0].description,
        iconSrc: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        windSpeed: data.wind.speed,
        unit: units,
      };


      return data;
    } catch (err) {
      console.log(err);
      return err
    }
  }
  console.log(new Date (1675920164));

  return { setLocation, layWeatherData, toggleUnits };
})();

export default currentWeather;
