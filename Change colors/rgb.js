const color = document.querySelector(".color");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);

  color.textContent = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
