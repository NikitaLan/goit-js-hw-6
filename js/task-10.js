function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputEl = document.querySelector("#controls > input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", addBoxes);

destroyBtn.addEventListener("click", destroyBoxes);



function createBoxes(amount) {
  const basicSize = 30;


  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
  }
}

function destroyBoxes() {
  inputEl.value = "";
  boxes.innerHTML = "";
}

function addBoxes(){
  createBoxes(inputEl.value);
}
