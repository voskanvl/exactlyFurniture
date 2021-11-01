const off = document.getElementById('off');
const on = document.getElementById('on');
const radio = document.querySelector('.radio');

off.addEventListener('click', () => {
  radio.classList.add('off');
});

on.addEventListener('click', () => {
  radio.classList.remove('off');
});
