const gallery = document.querySelector('.gallery')
const inputsContainer = gallery.querySelector('.gallery__price-range-slider')

// References to price fields
const minField = gallery.querySelector('.gallery__price-field-min')
const maxField = gallery.querySelector('.gallery__price-field-max')

// Displayed prices' values references
let minValue = gallery
  .querySelector('.gallery__price-range-value-min');
let maxValue = gallery
  .querySelector('.gallery__price-range-value-max');

// Range slider elements' references
const rangeFill = gallery.querySelector('.gallery__price-range-fill_front')
const minThumb = gallery.querySelector('.gallery__price-range-thumb_min')
const maxThumb = gallery.querySelector('.gallery__price-range-thumb_max')