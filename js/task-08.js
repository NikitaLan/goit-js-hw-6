const form = document.querySelector('.login-form');
form.addEventListener('submit', makeControlForm);

function makeControlForm(event) {
  event.preventDefault();
  console.dir(event.currentTarget);
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value.trim() === '' || password.value.trim() === '') {
    return alert(`Пожалуйста, заполните поля форм email и  password`);
  }
  const objectFormDate = { email: email.value, password: password.value };
  console.log(objectFormDate);

  event.currentTarget.reset();
  console.log(event.currentTarget.reset);
}