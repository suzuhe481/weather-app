import weatherForm from "./components/weatherForm/UI/weatherForm";
import forecastSliderButton from "./components/forecastSliderButton/UI/forecastSliderButton";

import "./reset.css";
import "./style.css";

const weatherFormContainer = document.createElement("div");
weatherFormContainer.id = "weather-form-container";
document.body.appendChild(weatherFormContainer);

weatherFormContainer.appendChild(weatherForm());

const weatherLocationContainer = document.createElement("div");
weatherLocationContainer.id = "weather-location-container";
document.body.appendChild(weatherLocationContainer);

const forecastTypeSliderContainer = document.createElement("div");
forecastTypeSliderContainer.id = "forecast-slider-container";
document.body.appendChild(forecastTypeSliderContainer);

const weatherCardsContainer = document.createElement("div");
weatherCardsContainer.id = "weather-cards-container";
document.body.appendChild(weatherCardsContainer);
