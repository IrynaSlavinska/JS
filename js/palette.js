const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");
const span = document.querySelector(".select-span");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;

  span.textContent = selectedColor;
}

function createPeletteItems() {
  const items = [];

  for (let i = 0; i < 80; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("button");

    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }

  colorPalette.append(...items);
}
createPeletteItems();

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
