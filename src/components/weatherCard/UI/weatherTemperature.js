const futureForecast = (temp) => {
  const weatherTemp = document.createElement("div");

  const maxtempF = document.createElement("div");
  maxtempF.innerHTML = "Max " + temp.maxtempF + " °F";
  weatherTemp.appendChild(maxtempF);

  const mintempF = document.createElement("div");
  mintempF.innerHTML = "Min " + temp.mintempF + " °F";
  weatherTemp.appendChild(mintempF);

  const maxtempC = document.createElement("div");
  maxtempC.innerHTML = "Max " + temp.maxtempC + " °C";
  weatherTemp.appendChild(maxtempC);

  const mintempC = document.createElement("div");
  mintempC.innerHTML = "Min " + temp.mintempC + " °C";
  weatherTemp.appendChild(mintempC);

  return weatherTemp;
};

const currForecast = (temp) => {
  const weatherTemp = document.createElement("div");

  // Temperature Group - Fahrenheit
  const tempGroupF = document.createElement("div");
  tempGroupF.classList.add("temp-fahrenheit");

  const tempF = document.createElement("div");
  tempF.innerHTML = temp.tempF + " °F";

  const feelsLikeTempF = document.createElement("div");
  feelsLikeTempF.innerHTML = "Feels like " + temp.feelsLikeTempF + " °F";

  tempGroupF.appendChild(tempF);
  tempGroupF.appendChild(feelsLikeTempF);
  weatherTemp.appendChild(tempGroupF);

  // Temperature Group - Celsius
  const tempGroupC = document.createElement("div");
  tempGroupC.classList.add("temp-celsius");

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
