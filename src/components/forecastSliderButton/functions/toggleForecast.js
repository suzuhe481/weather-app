// Changes class name of the weather cards container.
const toggleForecast = () => {
  const threeDayForecast = "three-day-forecast";
  const currentForecast = "current-forecast";

  const weatherCardsContainer = document.getElementById(
    "weather-cards-container"
  );

  // Changes class name of the container.
  // Weather card hiding is done via CSS in weatherCard.css.
  weatherCardsContainer.classList.toggle(threeDayForecast);
  weatherCardsContainer.classList.toggle(currentForecast);

  console.log(weatherCardsContainer.classList);
};

export default toggleForecast;
