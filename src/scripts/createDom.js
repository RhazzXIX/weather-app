const create = (function () {
  function weatherCard(data) {
    const card = document.createElement("div");
    card.setAttribute("id", "card");

    const city = document.createElement("h3");
    city.textContent = data.cityName;
    card.appendChild(city);

    const weatherHolder = document.createElement("div");
    weatherHolder.setAttribute("id", "weather");
    card.appendChild(weatherHolder);

    const weather = document.createElement("h4");
    weather.textContent = data.description
      .split(" ")
      .map((string) => string.charAt(0).toUpperCase() + string.slice(1))
      .join(" ");
    weatherHolder.appendChild(weather);

    const weatherImg = new Image();
    weatherImg.src = data.iconSrc;
    weatherImg.setAttribute("id", "imgIcon");
    weatherHolder.appendChild(weatherImg);

    for (let i = 0; i <= 3; i += 1) {
      const additionalInfo = document.createElement("p");
      switch (i) {
        case 1:
          additionalInfo.setAttribute("id", "feel");
          additionalInfo.textContent = `Feels Like: ${data.feelsLike}`;
          break;
        case 2:
          additionalInfo.setAttribute("id", "temp");
          additionalInfo.textContent = `Wind Speed: ${data.windSpeed}`;
          break;
        case 3:
          additionalInfo.setAttribute("id", "unitLabel");
          additionalInfo.textContent = `Displayed units in:`;
          break;
        default:
          additionalInfo.setAttribute("id", "temp");
          additionalInfo.textContent = `Temperature: ${data.temp}`;
      }
      card.appendChild(additionalInfo);
    }

    const unitBtn = document.createElement("button");
    unitBtn.setAttribute("id", "unit");
    unitBtn.textContent = data.unit.charAt(0).toUpperCase() + data.unit.slice(1);
    card.appendChild(unitBtn)

    return { card, unitBtn };
  }

  function errorSection (err) {
    const section = document.createElement('section');
    section.setAttribute('id', 'error');
    const errorCard = document.createElement('div');
    errorCard.setAttribute('id', 'error');
    errorCard.textContent = err;
    section.appendChild(errorCard);

    return section
  }

  return { weatherCard , errorSection };
})();

export default create;
