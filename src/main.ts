const gameScreen = document.querySelector(".game__screen");
const levelWidth: number = 10;
const levelHeight: number = 10;
const levelSize = levelWidth * levelHeight;

let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [3, 2, 1];
let dir = 1;
let intervalTime = 1000;
let interval = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keyup", input);
  renderLevel();
  startGame();
});

const renderLevel = () => {
  for (let i = 1; i <= levelSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", `cell_${i}`);
    gameScreen?.appendChild(cell);
  }
};

const startGame = () => {
  let cells = document.querySelectorAll(".cell");
  renderApple(cells);
  currentSnake.forEach((index) => {
    cells[index].classList.add("snake");
  });
  interval = setInterval(moveProcess, intervalTime);
};

const moveProcess = () => {
  let cells = document.querySelectorAll(".cell");
  if (checkCollision(cells)) {
    alert("You lose!");
  } else {
    moveSnake(cells);
  }
};

const moveSnake = (cells: any) => {
  let tail = currentSnake.pop();
  if (tail) {
    cells[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + dir);
    eatApple(cells, tail);
    cells[currentSnake[0]].classList.add("snake");
  }
};

const checkCollision = (cells: any) => {
  if (
    cells[currentSnake[0] + dir].classList.contains("snake") ||
    (currentSnake[0] - levelWidth <= 0 && dir === -levelWidth) ||
    (currentSnake[0] + levelWidth >= levelSize && dir === levelWidth) ||
    (currentSnake[0] % levelWidth === levelWidth - 1 && dir === 1) ||
    (currentSnake[0] % levelWidth === 0 && dir === -1)
  ) {
    return true;
  } else {
    return false;
  }
};

const eatApple = (cells: any, tail: any) => {
  if (cells[currentSnake[0]].classList.contains("apple")) {
    cells[currentSnake[0]].classList.remove("apple");
    cells[tail].classList.add("snake");
    currentSnake.push(tail);
    renderApple(cells);
    clearInterval(interval);
    interval = setInterval(moveProcess, intervalTime);
  }
};

const renderApple = (cells: any) => {
  do {
    appleIndex = Math.floor(Math.random() * cells.length);
  } while (cells[appleIndex].classList.contains("snake"));
  cells[appleIndex].classList.add("apple");
};

const input = (e: any) => {
  switch (e.key) {
    case "ArrowLeft":
      dir = -1;
      break;
    case "ArrowRight":
      dir = 1;
      break;
    case "ArrowUp":
      dir = -levelWidth;
      break;
    case "ArrowDown":
      dir = levelWidth;
  }
};
