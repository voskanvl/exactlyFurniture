const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__close');

modalButton.addEventListener('click', () => {
  modal.classList.remove('modal_show');
});
