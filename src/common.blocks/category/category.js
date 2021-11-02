const categoryList = document.querySelector('.category__list');
categoryList.addEventListener('click', (event) => {
  const selected = document.querySelector('.category__item[selected]');
  const selecteditem = event.target.closest('.category__item');
  console.log('🚀 ~ selecteditem', selecteditem);
  if (selecteditem != null && selecteditem.tagName === 'LI') {
    selected.removeAttribute('selected');
    selecteditem.setAttribute('selected', 'selected');
  }
});
