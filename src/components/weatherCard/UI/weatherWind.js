const futureForecast = (wind) => {
  const weatherWind = document.createElement("div");

  const maxWindMph = document.createElement("div");
  maxWindMph.innerHTML = wind.maxWindMph;
  weatherWind.appendChild(maxWindMph);

  const maxWindKph = document.createElement("div");
  maxWindKph.innerHTML = wind.maxWindKph;
  weatherWind.appendChild(maxWindKph);

  return weatherWind;
};

const currForecast = (wind) => {
  const weatherWind = document.createElement("div");

  const windDir = document.createElement("div");
  windDir.innerHTML = wind.windDir;
  weatherWind.appendChild(windDir);

  const windKph = document.createElement("div");
  windKph.innerHTML = wind.windKph;
  weatherWind.appendChild(windKph);

  const windMph = document.createElement("div");
  windMph.innerHTML = wind.windMph;
  weatherWind.appendChild(windMph);

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
