// Stores weather data from JSON into an object.
const JSONtoWeatherDataObject = (data) => {
  let weatherData = {
    location: {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
    },
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

  return weatherData;
};

// Calls the weather API for a given location.
async function getWeather() {
  const inputElement = document.getElementById("location-input");

  var userLocation = inputElement.value;

  var url =
    "http://api.weatherapi.com/v1/current.json?key=7e3d3ae60f4f42fcb51173916230907";

  const fetchUrl = url + "&q=" + userLocation + "&aqi=yes";

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
