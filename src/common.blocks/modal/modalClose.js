import show from '../show-menu/show-menu';

const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal__main');
const modalButton = document.querySelector('.modal__close');

const modalMainIsHide = (wait, period) => new Promise((resolve, reject) => {
  let i = 0;
  const interval = setInterval(() => {
    i++;
    if (!modalMain.classList.contains('modal__main-show')) {
      clearInterval(interval);
      resolve('ok');
    }
    if (period * i > wait) {
      clearInterval(interval);
      reject(new Error('main block of modal could not return to its original state'));
    }
  }, period);
});

modalButton.addEventListener('click', () => {
  modalMain.classList.remove('modal__main-show');
  modalMainIsHide(600, 100).then(show(modal, 'modal_show')).catch((error) => { throw error; });
});
