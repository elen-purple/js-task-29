const input = document.querySelector("#time-input");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = Number.parseInt(input.value) * 1000;
  input.value = "";
  setTimeout(() => {
    console.log(`It have gone ${value / 1000}s`);
  }, Number.parseInt(value));
});
