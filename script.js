const switcher = document.querySelector("input[name=switch]");
const priceContainer = document.querySelectorAll(".price-container");

switcher.addEventListener("change", function () {
  priceContainer.forEach((container) => container.classList.toggle("toggled"));
});
