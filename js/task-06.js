const input = document.querySelector(`#validation-input`)
const targetValue = input.getAttribute(`data-length`)

input.addEventListener(`blur`, makeClassForInput);

function makeClassForInput(event){
    input.classList.toggle(`valid`, event.currentTarget.value.trim().length === Number(targetValue) );
    input.classList.toggle(`invalid`,event.currentTarget.value.trim().length !== Number(targetValue));

}