const modal = document.querySelector('.modal');
const filterButton = document.querySelector('.filter__button');

filterButton.addEventListener('click', () => {
  modal.classList.add('modal_show');
});
