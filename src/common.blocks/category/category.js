const categoryList = document.querySelector('.category__list');
categoryList.addEventListener('click', (event) => {
  const selected = document.querySelector('.category__item[selected]');
  const selecteditem = event.target.closest('.category__item');
  if (selecteditem != null && selecteditem.tagName === 'LI') {
    const value = event.target.textContent;
    document.querySelector('.modal__title').textContent = value;
    selected.removeAttribute('selected');
    selecteditem.setAttribute('selected', 'selected');
  }
});
