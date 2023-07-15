const futureForecast = (wind) => {
  const weatherWind = document.createElement("div");

  // Max wind - mph
  const windGroupMph = document.createElement("div");
  windGroupMph.classList.add("wind-mph");

  const maxWindMph = document.createElement("div");
  maxWindMph.innerHTML = "Max wind: " + wind.maxWindMph + " mph";

  windGroupMph.appendChild(maxWindMph);
  weatherWind.appendChild(windGroupMph);

  // Max wind - kph
  const windGroupKph = document.createElement("div");
  windGroupKph.classList.add("wind-mph");

  const maxWindKph = document.createElement("div");
  maxWindKph.innerHTML = "Max wind: " + wind.maxWindKph + " kph";

  windGroupKph.appendChild(maxWindKph);
  weatherWind.appendChild(windGroupKph);

  return weatherWind;
};

const currForecast = (wind) => {
  const weatherWind = document.createElement("div");

  // Wind direction
  const windDir = document.createElement("div");
  windDir.innerHTML = "Direction: " + wind.windDir;
  weatherWind.appendChild(windDir);

  // Wind - mph
  const windGroupMph = document.createElement("div");
  windGroupMph.classList.add("wind-mph");

  const windMph = document.createElement("div");
  windMph.innerHTML = "Wind: " + wind.windMph + " mph";

  windGroupMph.appendChild(windMph);
  weatherWind.appendChild(windGroupMph);

  // Wind - kph
  const windGroupKph = document.createElement("div");
  windGroupKph.classList.add("wind-kph");

  const windKph = document.createElement("div");
  windKph.innerHTML = "Wind: " + wind.windKph + " kph";

  windGroupKph.appendChild(windKph);
  weatherWind.appendChild(windGroupKph);

  return weatherWind;
};

// Creates container for wind data.
// Index used to determine if wind data is for today's forecast or a future one.
const weatherWind = (wind, index) => {
  if (index === 0) {
    return currForecast(wind);
  } else {
    return futureForecast(wind);
  }
};

export default weatherWind;
