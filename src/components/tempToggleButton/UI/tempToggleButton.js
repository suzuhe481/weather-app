import toggleTemp from "../functions/toggleTemp";

import "./tempToggleButton.css";

const tempToggleButton = () => {
  const tempToggleButton = document.createElement("button");
  tempToggleButton.id = "temp-toggle";
  tempToggleButton.innerHTML = "°F/°C";
  tempToggleButton.onclick = toggleTemp;

  return tempToggleButton;
};

export default tempToggleButton;
