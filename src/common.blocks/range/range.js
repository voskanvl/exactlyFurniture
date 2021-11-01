const min = document.querySelector('input[name="min-value"]');
const max = document.querySelector('input[name="max-value"]');
const indicatorFrom = document.querySelector('.indicator-from');
const indicatorTo = document.querySelector('.indicator-to');

const BETWEEN_THUMBS = 10;

indicatorFrom.value = min.value;
indicatorTo.value = max.value;

min.addEventListener('input', (event) => {
  const { target: { value } } = event;
  max.value = (+value + BETWEEN_THUMBS > +max.value) ? +value + BETWEEN_THUMBS : max.value;
  indicatorFrom.value = value;
  indicatorTo.value = max.value;
});
max.addEventListener('input', (event) => {
  const { target: { value } } = event;
  min.value = (+value - BETWEEN_THUMBS < min.value) ? value - BETWEEN_THUMBS : min.value;
  indicatorTo.value = value;
  indicatorFrom.value = min.value;
});
