import show from '../show-menu/show-menu';

const modal = document.querySelector('.modal');
const filterButton = document.querySelector('.filter');

// filterButton.addEventListener('click', () => {
//   modal.classList.add('modal_show');
// });

filterButton.addEventListener('click', show(modal, 'modal_show'));
