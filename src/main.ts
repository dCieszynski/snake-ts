const gameScreen = document.querySelector(".game__screen");
const snakeHeadPos = 41;
const snakeTailPos = snakeHeadPos;

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
  const headCell = document.querySelector(`#cell_${snakeHeadPos}`);
  const tailCell = document.querySelector(`#cell_${snakeTailPos}`);
  headCell?.classList.add("snake");
  tailCell?.classList.add("snake");
};

renderLevel();
