const allFurniture = document.querySelector('.all-furniture');
const allFurnitureTitle = document.querySelector('.all-furniture > .menu__item-title');
const submenu = document.querySelector('.menu__submenu');

allFurnitureTitle.addEventListener('mouseenter', () => {
  submenu.classList.add('menu__submenu_show');
});
allFurniture.addEventListener('mouseleave', () => {
  submenu.classList.remove('menu__submenu_show');
});
