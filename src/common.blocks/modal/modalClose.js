const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal__main');
const modalButton = document.querySelector('.modal__close');

modalButton.addEventListener('click', () => {
  document.body.style.overflow = 'visible';
  modalMain.classList.remove('modal__main-show');
  const interval = setInterval(() => {
    if (!modalMain.classList.contains('modal__main-show')) {
      modal.classList.remove('modal_show');
      clearInterval(interval);
    }
  }, 100);
});
