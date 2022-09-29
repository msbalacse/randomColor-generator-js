const changeBtn = document.querySelector("#changeBtn");
const prevBtn = document.querySelector("#prevBtn");
const body = document.querySelector("body");
const colorArr = [];

changeBtn.addEventListener("click", () => {
  const randomNum = (num) => Math.trunc(Math.random() * num + 1);
  const rgb = `rgb(${randomNum(255)},${randomNum(255)},${randomNum(255)})`;
  body.style.backgroundColor = rgb;
  colorArr.push(rgb);
});

prevBtn.addEventListener("click", () => {
  const prevColor = colorArr[colorArr.length - 2];
  body.style.backgroundColor = prevColor;
  colorArr.pop();
});
