const html = document.getElementById("html");
const logo = document.getElementById("logo");
var dark = false;

if (dark) {
    html.classList.add("dark-mode");
    logo.setAttribute("src", "images/logo-light.png")
} else {
    html.classList.add("light-mode");
    logo.setAttribute("src", "images/logo-dark.png");
}
