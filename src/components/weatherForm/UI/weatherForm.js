import updateWeatherCards from "../../weatherCard/functions/updateWeatherCards";

import "./weatherForm.css";

// Outputs a form that collects a location from the user.
const weatherForm = () => {
  const formContainer = document.createElement("div");

  const weatherForm = document.createElement("form");

  const locationInput = document.createElement("input");
  locationInput.id = "location-input";
  locationInput.placeholder = "Location...";

  const submitButton = document.createElement("button");
  submitButton.id = "location-submit";
  submitButton.innerHTML = "Submit";
  submitButton.onclick = updateWeatherCards;

  weatherForm.appendChild(locationInput);
  weatherForm.appendChild(submitButton);

  formContainer.appendChild(weatherForm);

  return formContainer;
};

export default weatherForm;
