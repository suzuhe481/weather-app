// Stores weather data from JSON into an object.
const JSONtoWeatherDataObject = (data) => {
  let weatherData = {
    location: {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
    },
    forecast: [],
  };

  // Object containing weather for current day.
  var currentDay = {
    date: data.location.localtime,

    temp: {
      tempF: data.current.temp_f,
      feelsLikeTempF: data.current.feelslike_f,
      tempC: data.current.temp_c,
      feelsLikeTempC: data.current.feelslike_c,
    },
    wind: {
      windDir: data.current.wind_dir,
      windMph: data.current.wind_mph,
      windKph: data.current.wind_kph,
    },
    condition: {
      condition: data.current.condition.text,
      conditionIcon: data.current.condition.icon,
    },
    lastUpdated: data.current.last_updated,
  };

  weatherData.forecast.push(currentDay);

  // Iterating starts at the next day.
  // Creates objects for future days.
  const numOfDays = 3;
  for (var i = 1; i < numOfDays; i++) {
    let forecastDay = {
      date: data.forecast.forecastday[i].date,
      temp: {
        maxtempF: data.forecast.forecastday[i].day.maxtemp_f,
        mintempF: data.forecast.forecastday[i].day.mintemp_f,
        maxtempC: data.forecast.forecastday[i].day.maxtemp_c,
        mintempC: data.forecast.forecastday[i].day.mintemp_c,
      },
      wind: {
        maxWindMph: data.forecast.forecastday[i].day.maxwind_mph,
        maxWindKph: data.forecast.forecastday[i].day.maxwind_kph,
      },
      condition: {
        condition: data.forecast.forecastday[i].day.condition.text,
        conditionIcon: data.forecast.forecastday[i].day.condition.icon,
      },
    };

    weatherData.forecast.push(forecastDay);
  }

  return weatherData;
};

// Calls the weather API for a given location.
async function getWeather() {
  const inputElement = document.getElementById("location-input");
  var userLocation = inputElement.value;
  inputElement.value = "";

  const numOfDays = 3;
  var url =
    "http://api.weatherapi.com/v1/forecast.json?key=7e3d3ae60f4f42fcb51173916230907";

  const fetchUrl =
    url + "&q=" + userLocation + "&days=" + numOfDays + "&aqi=yes&alerts=no";

  try {
    var response = await fetch(fetchUrl, { mode: "cors" });

    // Throw error if promise is fulfilled but response is not good.
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    var responseJSON = await response.json();

    const weatherData = JSONtoWeatherDataObject(responseJSON);

    return weatherData;
  } catch (error) {
    console.log("Error: ", error);
    return error;
  }
}

export default getWeather;
