// Outputs a form that collects a location from the user.
const weatherForm = () => {
  const formContainer = document.createElement("div");

  const weatherForm = document.createElement("form");

  const locationLabel = document.createElement("label");
  locationLabel.innerHTML = "Location: ";

  const locationInput = document.createElement("input");

  const submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";

  weatherForm.appendChild(locationLabel);
  weatherForm.appendChild(locationInput);
  weatherForm.appendChild(submitButton);

  formContainer.appendChild(weatherForm);

  return formContainer;
};

export default weatherForm;
