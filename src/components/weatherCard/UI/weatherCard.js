import getWeather from "../functions/getWeather";

// Weather card element which contains weather data.
const weatherCard = () => {
  const card = document.createElement("div");
  card.innerHTML = "Weather card";

  console.log(getWeather());

  return card;
};

export default weatherCard;
