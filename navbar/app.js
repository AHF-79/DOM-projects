// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add classe
// remove - remove classe
// toggle - toggle classe

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
