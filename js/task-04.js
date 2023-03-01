let counterValue = 0;
const counterValueEl = document.querySelector(`#value`);
const minusBtn = document.querySelector(`[data-action="decrement"]`);
const plusBtn = document.querySelector(`[data-action="increment"]`);

minusBtn.addEventListener(`click`, () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
});

plusBtn.addEventListener(`click`, () => { 
counterValue += 1;
counterValueEl.textContent = counterValue;
}
);














// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.