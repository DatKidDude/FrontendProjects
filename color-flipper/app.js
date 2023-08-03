const button = document.getElementById("btn");
const color = document.getElementById("color");

button.addEventListener("click", () => {
  let bgColor = "#" + Math.random().toString(16).slice(2, 8);
  color.innerText = bgColor;
  document.body.style.backgroundColor = bgColor;
});
