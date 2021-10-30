import show from '../show-menu/show-menu';

const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal__main');
const modalButton = document.querySelector('.modal__close');

modalButton.addEventListener('click', () => {
  modalMain.classList.remove('modal__main-show');
  const interval = setInterval(() => {
    if (!modalMain.classList.contains('modal__main-show')) {
      show(modal, 'modal_show')();
      clearInterval(interval);
    }
  }, 100);
});
