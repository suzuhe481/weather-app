import updateWeatherCards from "../../weatherCard/functions/updateWeatherCards";

import "./weatherForm.css";

// Outputs a form that collects a location from the user.
const weatherForm = () => {
  const weatherForm = document.createElement("form");
  weatherForm.id = "weather-form";

  const formRow = document.createElement("div");
  formRow.classList.add("form-row");

  const locationInput = document.createElement("input");
  locationInput.id = "location-input";
  locationInput.placeholder = "Location...";

  const submitButton = document.createElement("button");
  submitButton.id = "location-submit";
  submitButton.innerHTML = "Search";
  submitButton.onclick = updateWeatherCards;

  formRow.appendChild(locationInput);
  formRow.appendChild(submitButton);

  weatherForm.appendChild(formRow);

  return weatherForm;
};

export default weatherForm;
