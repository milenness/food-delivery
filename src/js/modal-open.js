// Додамо форму в наші посилання (якщо вона ще не там)
const refs = {
  openModalBtns: document.querySelectorAll('.header-btn, .hero-btn'),
  closeModalBtn: document.querySelector('.modal-btn-close'),
  backdrop: document.querySelector('.modal-backdrop'),
  // Додаємо посилання на форму
  modalForm: document.querySelector('.modal-form'),
};

function openModal() {
  refs.backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onEscKeyPress);
}

function closeModal() {
  refs.backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscKeyPress);

  refs.modalForm.reset();

  refs.modalForm.classList.remove('has-error');

  const fieldWrappers = refs.modalForm.querySelectorAll('.modal-field-wrapper');
  fieldWrappers.forEach(wrapper => {
    wrapper.classList.remove('is-invalid');
  });
}

refs.openModalBtns.forEach(btn => btn.addEventListener('click', openModal));
refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', e => {
  if (e.target === refs.backdrop) closeModal();
});

function onEscKeyPress(e) {
  if (e.code === 'Escape') closeModal();
}
