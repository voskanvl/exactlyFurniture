const categoryList = document.querySelector('.category__list');
categoryList.addEventListener('click', (event) => {
  const selected = document.querySelector('.category__item[selected]');
  selected.removeAttribute('selected');
  const selecteditem = event.target.closest('.category__item');
  if (selecteditem.tagName === 'LI') selecteditem.setAttribute('selected', 'selected');
});
