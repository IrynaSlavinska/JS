const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

// console.log(document.body.style.backgroundColor);
console.log(window.getComputedStyle(document.body).backgroundColor);

button.addEventListener("click", () => {
  span.textContent = getRandomHexColor();

  document.body.style.backgroundColor = span.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
