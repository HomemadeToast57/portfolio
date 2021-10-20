const html = document.getElementById("html");
const logo = document.getElementById("logo");
const button = document.getElementById("dark-mode-button");

var dark = false;

var darkString = window.localStorage.getItem("light-mode");

function initLightMode() {
  if (darkString != null) {
    if (darkString == "light") {
      dark = false;
    } else {
      switcher();
      dark = true;
    }
  }
  darkmode();
}

function darkmode() {
  if (dark) {
    html.classList.remove("light-mode");
    html.classList.add("dark-mode");
    logo.setAttribute("src", "images/logo-light.png");
    window.localStorage.setItem("light-mode", "dark");
  } else {
    html.classList.remove("dark-mode");
    html.classList.add("light-mode");
    logo.setAttribute("src", "images/logo-dark.png");
    window.localStorage.setItem("light-mode", "light");
  }
}

function switcher() {
  dark = !dark;
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");
  const button = document.querySelector(".container");

    sun.classList.toggle("visible");
    moon.classList.toggle("visible");
}

button.onclick = function () {
  
  switcher();  
  darkmode();
  
};

initLightMode();
