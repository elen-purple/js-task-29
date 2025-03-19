const input = document.querySelector("#time-input");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  input.value = "";
  setTimeout(() => {
    console.log(`It have gone ${value}ms`);
  }, Number.parseInt(value));
});
