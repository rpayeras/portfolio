import "./style.css";

const initEvents = () => {
  document.getElementById("menu__btn--open").addEventListener("click", () => {
    document.getElementById("menu__wrapper").classList.remove("hidden");
  });

  document.getElementById("menu__btn--close").addEventListener("click", () => {
    document.getElementById("menu__wrapper").classList.add("hidden");
  });
};

initEvents();
