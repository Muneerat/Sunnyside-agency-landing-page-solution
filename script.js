const hamburger = document.querySelector(".hamburger");
const link = document.querySelector(".link");
hamburger.addEventListener("click", function () {
  link.classList.toggle("show-link");
});
