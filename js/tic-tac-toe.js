// ! html-вузли
const content = document.querySelector(".js-content");
const winnerName = document.querySelector(".js-winner");
const reset = document.querySelector(".js-reset");
const winsX = document.querySelector(".js-x-wins");
const winsO = document.querySelector(".js-o-wins");

// ! глобальні змінні
let player = "X";
let historyX = [];
let historyO = [];
let gameOver = false;
let xWinsCount = 0;
let oWinsCount = 0;
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// ! слухачі подій
content.addEventListener("click", onClick);
reset.addEventListener("click", resetGame);

// ! функції
// * створення розмітки
function createMarkup() {
  let markup = "";
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class='item js-item' data-id='${i}'></div>`;
  }

  content.innerHTML = markup;
}
createMarkup();

// * кліки в клітинки
function onClick(evt) {
  const { target } = evt;

  if (gameOver || !target.classList.contains("js-item") || target.textContent) {
    return;
  }

  const id = Number(target.dataset.id);
  let result = false;

  if (player === "X") {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }

  evt.target.textContent = player;

  if (result) {
    winnerName.textContent = `Winner is ${player} 😎`;

    if (player === "X") {
      xWinsCount += 1;
      winsX.textContent = xWinsCount;
    } else {
      oWinsCount += 1;
      winsO.textContent = oWinsCount;
    }

    gameOver = true;
    return;
  } else if (historyO.length + historyX.length === 9) {
    winnerName.textContent = "It's a draw! Try again 🙄";
    return;
  }

  player = player === "X" ? "O" : "X";
}

// перевіряємо переможця
function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

// обнулення гри
function resetGame() {
  createMarkup();
  historyX = [];
  historyO = [];
  player = "X";
  gameOver = false;
  winnerName.textContent = "";
}
