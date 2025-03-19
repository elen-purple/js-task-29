const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

const timer = setInterval(() => {
  box1.classList.toggle("active");
  box2.classList.toggle("active");
}, 500);
