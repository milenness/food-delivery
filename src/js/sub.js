const form = document.querySelector('.sub-form');
const wrapper = document.querySelector('.sub-input-wrapper');
const input = document.querySelector('.sub-input');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!input.checkValidity()) {
    wrapper.classList.add('is-invalid');
  } else {
    wrapper.classList.remove('is-invalid');
    console.log('Форма відправлена успішно!');
    form.reset();
  }
});

input.addEventListener('input', () => {
  wrapper.classList.remove('is-invalid');
});
