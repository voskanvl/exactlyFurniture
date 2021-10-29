const showMenu = document.querySelector('.show-menu');
const closeMenu = document.querySelector('.menu__close');

const menu = document.querySelector('.header__menu');

const showAndStopScroll = (showElement, toggleClass) => () => {
  if (getComputedStyle(document.body).overflow === 'visible') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  showElement.classList.toggle(toggleClass);
};

showMenu.addEventListener('click', showAndStopScroll(menu, 'header__menu_hide'));

closeMenu.addEventListener('click', () => {
  menu.classList.add('header__menu_hide');
  document.body.style.overflow = 'visible';
});

export default showAndStopScroll;
