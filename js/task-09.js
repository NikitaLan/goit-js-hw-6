function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backGround = {
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

backGround.btn.addEventListener('click', changeBodyColor);

function changeBodyColor() {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color;
  backGround.span.textContent = color;
}