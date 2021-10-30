const showMenu = document.querySelector('.show-menu');
const closeMenu = document.querySelector('.menu__close');

const menu = document.querySelector('.header__menu');

const showAndStopScroll = (showElement, toggleClass) => () => {
  console.log('someone cliked');
  if (getComputedStyle(document.body).overflow === 'visible') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  showElement.classList.toggle(toggleClass);
};

showMenu.addEventListener('click', showAndStopScroll(menu, 'header__menu-hide'));

closeMenu.addEventListener('click', () => {
  menu.classList.add('header__menu-hide');
  document.body.style.overflow = 'visible';
});

export default showAndStopScroll;

