const gameScreen = document.querySelector(".game__screen");
let snakeHeadPos = 41;
let snakeTailPos = snakeHeadPos;
let dir = 0;

const levelWidth: number = 9;
const levelHeight: number = 9;
const levelSize = levelWidth * levelHeight;

const renderLevel = () => {
  for (let i = 1; i <= levelSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", `cell_${i}`);
    gameScreen?.appendChild(cell);
  }

  renderSnake();
};

const renderSnake = () => {
  document.querySelector(`#cell_${snakeTailPos}`)?.classList.remove("snake");
  snakeTailPos = snakeTailPos + dir;
  const tailCell = document.querySelector(`#cell_${snakeTailPos}`);
  snakeHeadPos = snakeHeadPos + dir;
  const headCell = document.querySelector(`#cell_${snakeHeadPos}`);
  headCell?.classList.add("snake");
  tailCell?.classList.add("snake");
};

renderLevel();
setInterval(renderSnake, 1000);

window.addEventListener("keyup", (e) => {
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
});
