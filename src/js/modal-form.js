const modalForm = document.querySelector('.modal-form');
const allInputs = modalForm.querySelectorAll('.modal-input');

modalForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let isAllValid = true;

  allInputs.forEach(input => {
    const wrapper = input.closest('.modal-field-wrapper');

    if (!input.checkValidity()) {
      wrapper.classList.add('is-invalid');
      isAllValid = false;
    } else {
      wrapper.classList.remove('is-invalid');
    }
  });

  if (!isAllValid) {
    modalForm.classList.add('has-error');
  } else {
    modalForm.classList.remove('has-error');
    console.log('Дані відправлено!');
    modalForm.reset();
  }
});

allInputs.forEach(input => {
  input.addEventListener('input', () => {
    const wrapper = input.closest('.modal-field-wrapper');
    wrapper.classList.remove('is-invalid');

    if (Array.from(allInputs).every(i => i.checkValidity())) {
      modalForm.classList.remove('has-error');
    }
  });
});
