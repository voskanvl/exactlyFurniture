import show from '../show-menu/show-menu';

const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__close');

modalButton.addEventListener('click', show(modal, 'modal_show'));
