import toggleWind from "../functions/toggleWind";

import "./windToggleButton.css";

const windToggleButton = () => {
  const windToggleButton = document.createElement("button");
  windToggleButton.id = "wind-toggle";
  windToggleButton.innerHTML = "Mph/Kph";
  windToggleButton.onclick = toggleWind;

  return windToggleButton;
};

export default windToggleButton;
