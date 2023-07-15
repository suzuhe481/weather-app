import weatherForm from "./components/weatherForm/UI/weatherForm";

import "./reset.css";
import "./style.css";

const weatherFormContainer = document.createElement("div");
weatherFormContainer.id = "weather-form-container";
document.body.appendChild(weatherFormContainer);

weatherFormContainer.appendChild(weatherForm());

const weatherLocationContainer = document.createElement("div");
weatherLocationContainer.id = "weather-location-container";
document.body.appendChild(weatherLocationContainer);

const weatherCardsContainer = document.createElement("div");
weatherCardsContainer.id = "weather-cards-container";
document.body.appendChild(weatherCardsContainer);
