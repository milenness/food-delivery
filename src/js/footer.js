const form = document.querySelector('.footer-form');
const wrapper = document.querySelector('.footer-input-wrapper');
const input = document.querySelector('.footer-input');

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
