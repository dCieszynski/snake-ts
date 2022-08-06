const gameScreen = document.querySelector(".game__screen");

const levelWidth: number = 9;
const levelHeight: number = 9;
const levelSize = levelWidth * levelHeight;

const renderLevel = () => {
  for (let i = 0; i < levelSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameScreen?.appendChild(cell);
  }
};

renderLevel();
