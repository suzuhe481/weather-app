// Toggles classes for temperatures of fahrenheit and celsius contianers.
// Hiding is done with css in toggleTempButton.css.
const toggleTemp = () => {
  const tempContainers = document.getElementsByClassName(
    "weather-temp-container"
  );

  // Collects all temperature containers for each weather card.
  for (var i = 0; i < tempContainers.length; i++) {
    var tempFelements =
      tempContainers[i].getElementsByClassName("temp-fahrenheit");

    var tempCelements =
      tempContainers[i].getElementsByClassName("temp-celsius");

    // In each weather card, gets all fahrenheit containers and toggles classes
    for (var j = 0; j < tempFelements.length; j++) {
      var tempF = tempFelements[j];
      tempF.classList.toggle("active");
      tempF.classList.toggle("hidden");
    }

    // In each weather card, gets all fahrenheit containers and toggles classes
    for (var j = 0; j < tempCelements.length; j++) {
      var tempC = tempCelements[j];
      tempC.classList.toggle("active");
      tempC.classList.toggle("hidden");
    }
  }
};

export default toggleTemp;
