// Toggles classes for wind types of Mph and Kph.
// Hiding is done with css in toggleWindButton.css.
const toggleWind = () => {
  const windContainers = document.getElementsByClassName(
    "weather-wind-container"
  );

  // Collects all wind containers for each weather card
  for (var i = 0; i < windContainers.length; i++) {
    var windMphElements = windContainers[i].getElementsByClassName("wind-mph");
    var windKphElements = windContainers[i].getElementsByClassName("wind-kph");

    // In each weather card, toggles classes for mph containers
    for (var j = 0; j < windMphElements.length; j++) {
      var windMph = windMphElements[j];
      windMph.classList.toggle("active");
      windMph.classList.toggle("hidden");
    }

    // In each weather card, toggles classes for kph containers
    for (var j = 0; j < windKphElements.length; j++) {
      var windKph = windKphElements[j];
      windKph.classList.toggle("active");
      windKph.classList.toggle("hidden");
    }
  }
};

export default toggleWind;
