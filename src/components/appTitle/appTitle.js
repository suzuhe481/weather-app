import "./appTitle.css";

const appTitle = () => {
  const title = document.createElement("div");
  title.id = "title";
  title.innerHTML = "Weather App";

  return title;
};

export default appTitle;
