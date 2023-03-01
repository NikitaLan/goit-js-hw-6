
const user = {
input: document.querySelector(`#name-input`),
spans: document.querySelector(`#name-output`),

};

user.input.addEventListener(`input`, makeSpanChange);

function makeSpanChange(event) {
    user.spans.textContent = event.currentTarget.value.trim(); 
    if (event.currentTarget.value.trim() === '') {
        user.spans.textContent = `Anonymous`;
    }
}


