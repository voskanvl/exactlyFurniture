const showMenu = document.querySelector('.show-menu');
const menu = document.querySelector('.header__menu');
showMenu.addEventListener('click', () => {
  if (getComputedStyle(document.body).overflow === 'visible') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
  menu.classList.toggle('header__menu_hide');
});

