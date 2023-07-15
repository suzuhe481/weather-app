import "./forecastSliderButton.css";

import toggleForecast from "../functions/toggleForecast";

const forecastSliderButton = () => {
  const toggleSlider = document.createElement("label");
  toggleSlider.classList.add("toggle");
  toggleSlider.for = "toggle-slider";

  const sliderInput = document.createElement("input");
  sliderInput.type = "checkbox";
  sliderInput.id = "toggle-slider";
  sliderInput.onclick = toggleForecast;

  const sliderSpan = document.createElement("span");
  sliderSpan.classList.add("slider");

  const sliderLabel = document.createElement("span");
  sliderLabel.classList.add("labels");
  sliderLabel.dataset["on"] = "Current Forecast";
  sliderLabel.dataset["off"] = "3-Day Forecast";

  toggleSlider.appendChild(sliderInput);
  toggleSlider.appendChild(sliderSpan);
  toggleSlider.appendChild(sliderLabel);

  return toggleSlider;
};

export default forecastSliderButton;
