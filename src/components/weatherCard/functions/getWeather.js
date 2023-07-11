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
      feelsLikeTempF: data.current.feelslike_f,
    },
    wind: {
      windDir: data.current.wind_dir,
      windMph: data.current.wind_mph,
      windKph: data.current.wind_kph,
    },
    condition: {
      condition: data.current.condition.text,
    },
    lastUpdated: data.current.last_updated,
  };

  return weatherData;
};

async function getWeather() {
  var location = "london";
  var url =
    "http://api.weatherapi.com/v1/current.json?key=7e3d3ae60f4f42fcb51173916230907";

  const fetchUrl = url + "&q=" + location + "&aqi=yes";

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
  }
}

export default getWeather;
