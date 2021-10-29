import show from '../show-menu/show-menu';

const modal = document.querySelector('.modal');
const headerHeader = document.querySelector('.header__header');
const headerMenu = document.querySelector('.header__menu');
const filterButton = document.querySelector('.filter');

// filterButton.addEventListener('click', () => {
//   modal.classList.add('modal_show');
// });

filterButton.addEventListener('click', () => {
  const { matches } = matchMedia('(min-width:768px)');
  const heightHeader = getComputedStyle(headerHeader).height;
  const parsedHeightHeader = parseInt(heightHeader);
  const numberHeightHeader = isNaN(parsedHeightHeader) ? 0 : parsedHeightHeader;

  let sum = 0;
  if (matches) {
    const heightMenu = getComputedStyle(headerMenu).height;
    const parsedHeightMenu = parseInt(heightMenu);
    const numberHeightMenu = isNaN(parsedHeightMenu) ? 0 : parsedHeightMenu;
    sum = numberHeightHeader + numberHeightMenu;
  } else {
    sum = numberHeightHeader;
  }
  console.log('🚀 ~ sum', sum);
  modal.style.top = `${sum}px`;
  show(modal, 'modal_show')();
});
