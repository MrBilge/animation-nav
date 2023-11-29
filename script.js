"use strict";

const icon = document.querySelector("#toggle");
const nav = document.querySelector("#nav");

icon.addEventListener("click", function () {
  nav.classList.toggle("active");
});


