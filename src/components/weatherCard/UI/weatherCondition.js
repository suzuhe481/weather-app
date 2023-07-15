const futureForecast = (condition) => {
  const weatherCondition = document.createElement("div");

  const conditionGroup = document.createElement("div");
  conditionGroup.classList.add("weather-condition");

  const cond = document.createElement("div");
  cond.classList.add("weather-condition-text");
  cond.innerHTML = condition.condition;
  conditionGroup.appendChild(cond);

  const conditionIcon = document.createElement("img");
  conditionIcon.classList.add("weather-condition-icon");
  conditionIcon.src = condition.conditionIcon;
  conditionGroup.appendChild(conditionIcon);

  weatherCondition.appendChild(conditionGroup);

  return weatherCondition;
};

const currForecast = (condition) => {
  const weatherCondition = document.createElement("div");

  const conditionGroup = document.createElement("div");
  conditionGroup.classList.add("weather-condition");

  const cond = document.createElement("div");
  cond.classList.add("weather-condition-text");
  cond.innerHTML = condition.condition;
  conditionGroup.appendChild(cond);

  const conditionIcon = document.createElement("img");
  conditionIcon.classList.add("weather-condition-icon");
  conditionIcon.src = condition.conditionIcon;
  conditionGroup.appendChild(conditionIcon);

  weatherCondition.appendChild(conditionGroup);

  return weatherCondition;
};
// Creates container for condition data.
// Index used to determine if condition data is for today's forecast or a future one.
const weatherCondition = (condition, index) => {
  if (index === 0) {
    return currForecast(condition);
  } else {
    return futureForecast(condition);
  }
};

export default weatherCondition;
