const futureForecast = (condition) => {
  const weatherCondition = document.createElement("div");

  const cond = document.createElement("div");
  cond.innerHTML = condition.condition;
  weatherCondition.appendChild(cond);

  const conditionIcon = document.createElement("img");
  conditionIcon.src = condition.conditionIcon;
  weatherCondition.appendChild(conditionIcon);

  return weatherCondition;
};

const currForecast = (condition) => {
  const weatherCondition = document.createElement("div");

  const cond = document.createElement("div");
  cond.innerHTML = condition.condition;
  weatherCondition.appendChild(cond);

  const conditionIcon = document.createElement("img");
  conditionIcon.src = condition.conditionIcon;
  weatherCondition.appendChild(conditionIcon);

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
