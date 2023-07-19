const futureForecast = (temp) => {
  const weatherTemp = document.createElement("div");

  // Temperature Group - Fahrenheit
  const tempGroupF = document.createElement("div");
  tempGroupF.classList.add("temp-fahrenheit", "active");

  const maxtempF = document.createElement("div");
  maxtempF.innerHTML = "Max " + temp.maxtempF + " °F";
  tempGroupF.appendChild(maxtempF);

  const mintempF = document.createElement("div");
  mintempF.innerHTML = "Min " + temp.mintempF + " °F";
  tempGroupF.appendChild(mintempF);

  // Temperature Group - Celsius
  const tempGroupC = document.createElement("div");
  tempGroupC.classList.add("temp-celsius", "hidden");

  const maxtempC = document.createElement("div");
  maxtempC.innerHTML = "Max " + temp.maxtempC + " °C";
  tempGroupC.appendChild(maxtempC);

  const mintempC = document.createElement("div");
  mintempC.innerHTML = "Min " + temp.mintempC + " °C";
  tempGroupC.appendChild(mintempC);

  weatherTemp.appendChild(tempGroupF);
  weatherTemp.appendChild(tempGroupC);

  return weatherTemp;
};

const currForecast = (temp) => {
  const weatherTemp = document.createElement("div");

  // Temperature Group - Fahrenheit
  const tempGroupF = document.createElement("div");
  tempGroupF.classList.add("temp-fahrenheit", "active");

  const tempF = document.createElement("div");
  tempF.innerHTML = temp.tempF + " °F";

  const feelsLikeTempF = document.createElement("div");
  feelsLikeTempF.innerHTML = "Feels like " + temp.feelsLikeTempF + " °F";

  tempGroupF.appendChild(tempF);
  tempGroupF.appendChild(feelsLikeTempF);
  weatherTemp.appendChild(tempGroupF);

  // Temperature Group - Celsius
  const tempGroupC = document.createElement("div");
  tempGroupC.classList.add("temp-celsius", "hidden");

  const tempC = document.createElement("div");
  tempC.innerHTML = temp.tempC + " °C";

  const feelsLikeTempC = document.createElement("div");
  feelsLikeTempC.innerHTML = "Feels like " + temp.feelsLikeTempC + " °C";

  tempGroupC.appendChild(tempC);
  tempGroupC.appendChild(feelsLikeTempC);
  weatherTemp.appendChild(tempGroupC);

  weatherTemp.appendChild(tempGroupC);

  return weatherTemp;
};

// Creates container for temperature data.
// Uses index to determine whether temperature is for today's forecast or a future one.
const weatherTemperature = (temp, index) => {
  if (index === 0) {
    return currForecast(temp);
  } else {
    return futureForecast(temp);
  }
};

export default weatherTemperature;
