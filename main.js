import "./style.css";

import "@splidejs/splide/css/skyblue";
import Splide from "@splidejs/splide";

const initEvents = () => {
  document.getElementById("menu__btn--open").addEventListener("click", () => {
    document.getElementById("menu__wrapper").classList.remove("hidden");
  });

  document.getElementById("menu__btn--close").addEventListener("click", () => {
    document.getElementById("menu__wrapper").classList.add("hidden");
  });
};

initEvents();

const slideOpts = {
  type: "fade",
  rewind: true,
  autoplay: true,
  pagination: false,
  arrows: false,
  lazyLoad: true,
};

const slideElms = document.getElementsByClassName("splide");

for (let i = 0; i < slideElms.length; i++) {
  new Splide(slideElms[i], slideOpts).mount();
}
