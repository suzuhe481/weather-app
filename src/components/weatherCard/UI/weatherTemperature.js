const futureForecast = (temp) => {
  const weatherTemp = document.createElement("div");

  const maxtempF = document.createElement("div");
  maxtempF.innerHTML = temp.maxtempF;
  weatherTemp.appendChild(maxtempF);

  const mintempF = document.createElement("div");
  mintempF.innerHTML = temp.mintempF;
  weatherTemp.appendChild(mintempF);

  const maxtempC = document.createElement("div");
  maxtempC.innerHTML = temp.maxtempC;
  weatherTemp.appendChild(maxtempC);

  const mintempC = document.createElement("div");
  mintempC.innerHTML = temp.mintempC;
  weatherTemp.appendChild(mintempC);

  return weatherTemp;
};

const currForecast = (temp) => {
  const weatherTemp = document.createElement("div");

  const tempF = document.createElement("div");
  tempF.innerHTML = temp.tempF;
  weatherTemp.appendChild(tempF);

  const feelsLikeTempF = document.createElement("div");
  feelsLikeTempF.innerHTML = temp.feelsLikeTempF;
  weatherTemp.appendChild(feelsLikeTempF);

  const tempC = document.createElement("div");
  tempC.innerHTML = temp.tempC;
  weatherTemp.appendChild(tempC);

  const feelsLikeTempC = document.createElement("div");
  feelsLikeTempC.innerHTML = temp.feelsLikeTempC;
  weatherTemp.appendChild(feelsLikeTempC);

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
