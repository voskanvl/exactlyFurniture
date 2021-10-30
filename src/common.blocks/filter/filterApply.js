import show from '../show-menu/show-menu';

const modal = document.querySelector('.modal');
const modalMain = document.querySelector('.modal__main');
const headerHeader = document.querySelector('.header__header');
const headerMenu = document.querySelector('.header__menu');
const filterButton = document.querySelector('.filter');


const topModal = () => {
  const { matches } = matchMedia('(min-width:768px)');
  const heightHeader = getComputedStyle(headerHeader).height;
  const parsedHeightHeader = parseInt(heightHeader);
  const numberHeightHeader = isNaN(parsedHeightHeader)
    ? 0
    : parsedHeightHeader;

  let sum = 0;
  if (matches) {
    const heightMenu = getComputedStyle(headerMenu).height;
    const parsedHeightMenu = parseInt(heightMenu);
    const numberHeightMenu = isNaN(parsedHeightMenu) ? 0 : parsedHeightMenu;
    sum = numberHeightHeader + numberHeightMenu;
  } else {
    sum = numberHeightHeader;
  }
  return sum;
};

filterButton.addEventListener('click', () => {
  modal.style.top = `${topModal()}px`;
  setTimeout(() => modalMain.classList.add('modal__main-show'), 0);
  show(modal, 'modal_show')();
});
