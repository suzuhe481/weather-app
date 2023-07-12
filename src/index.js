import weatherForm from "./components/weatherForm/UI/weatherForm";

const weatherFormContainer = document.createElement("div");
weatherFormContainer.id = "weather-form-container";
document.body.appendChild(weatherFormContainer);

weatherFormContainer.appendChild(weatherForm());

const weatherCardsContainer = document.createElement("div");
weatherCardsContainer.id = "weather-cards-container";
document.body.appendChild(weatherCardsContainer);
