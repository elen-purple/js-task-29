const board = document.querySelector("#board");
const scoreOutput = document.querySelector("#score-output");
const clicksOutput = document.querySelector("#clicks-output");
const targetBox = document.querySelector("#target-box");
let score = 0;
let clicks = 0;

scoreOutput.textContent = score;
clicksOutput.textContent = clicks;

targetBox.style.left = `${
  Math.random() *
    (board.scrollWidth -
      targetBox.scrollWidth / 2 -
      targetBox.scrollWidth / 2) +
  targetBox.scrollWidth / 2
}px`;
targetBox.style.top = `${
  Math.random() *
    (board.scrollHeight -
      targetBox.scrollHeight / 2 -
      targetBox.scrollHeight / 2) +
  targetBox.scrollHeight / 2
}px`;

board.addEventListener("click", (e) => {
  clicks += 1;
  clicksOutput.textContent = clicks;
  if (e.target === targetBox) {
    score += 1;
    scoreOutput.textContent = score;
  }
});

const timer = setInterval(() => {
  targetBox.style.left = `${
    Math.random() *
      (board.scrollWidth -
        targetBox.scrollWidth / 2 -
        targetBox.scrollWidth / 2) +
    targetBox.scrollWidth / 2
  }px`;
  targetBox.style.top = `${
    Math.random() *
      (board.scrollHeight -
        targetBox.scrollHeight / 2 -
        targetBox.scrollHeight / 2) +
    targetBox.scrollHeight / 2
  }px`;
}, 3000);
