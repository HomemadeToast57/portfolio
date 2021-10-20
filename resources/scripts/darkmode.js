const html = document.getElementById("html");
const logo = document.getElementById("logo");
const button = document.getElementById("dark-mode-button");
var dark = false;

function darkmode() {
 if (dark) {
   html.classList.remove("light-mode");
   html.classList.add("dark-mode");
   logo.setAttribute("src", "images/logo-light.png");
 } else {
   html.classList.remove("dark-mode");
   html.classList.add("light-mode");
   logo.setAttribute("src", "images/logo-dark.png");
 }
}

darkmode();

button.onclick = function () {
  dark = !dark;
  darkmode();
};  



