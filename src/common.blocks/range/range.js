const ranges = document.querySelectorAll('form.range');
for (let i = 0; i < ranges.length; i++) {
  const range = ranges[i];

  const min = range.querySelector('input[name="min-value"]');
  const max = range.querySelector('input[name="max-value"]');
  const indicatorFrom = range.querySelector('.indicator-from');
  const indicatorTo = range.querySelector('.indicator-to');

  const BETWEEN_THUMBS = 11;

  indicatorFrom.value = min.value;
  indicatorTo.value = max.value;

  min.addEventListener('input', (event) => {
    const {
      target: { value },
    } = event;
    max.value =
            +value + BETWEEN_THUMBS > +max.value
              ? +value + BETWEEN_THUMBS
              : max.value;
    indicatorFrom.value = value;
    indicatorTo.value = max.value;
  });
  max.addEventListener('input', (event) => {
    const {
      target: { value },
    } = event;
    min.value =
            +value - BETWEEN_THUMBS < min.value
              ? value - BETWEEN_THUMBS
              : min.value;
    indicatorTo.value = value;
    indicatorFrom.value = min.value;
  });

  indicatorFrom.addEventListener('change', (event) => {
    const {
      target: { value },
    } = event;
    min.value = value;
  });
  indicatorTo.addEventListener('change', (event) => {
    const {
      target: { value },
    } = event;
    max.value = value;
  });
}
