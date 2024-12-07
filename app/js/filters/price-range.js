const gallery = document.querySelector('.gallery')
const inputsContainer = gallery.querySelector('.gallery__price-range')

// References to price fields
const minField = gallery.querySelector('.gallery__price-field-min')
const maxField = gallery.querySelector('.gallery__price-field-max')

// Displayed prices' values references
let minValue = gallery
  .querySelector('.gallery__price-range-value-min');
let maxValue = gallery
  .querySelector('.gallery__price-range-value-max');

// Violet line reference
const rangeFill = gallery
  .querySelector('.gallery__price-range-fill');

// Input elements' references
const inputElements = gallery
  .querySelectorAll('.gallery__price-range-slider');

const minInput = inputElements[0]
const maxInput = inputElements[1]

// Calculate total range width
const totalRangeWidth = inputElements[0].max - inputElements[0].min

// Set min value not bigger then max value
minInput.addEventListener('input', function () {
  if (parseInt(minInput.value) > parseInt(maxInput.value)) {
    minInput.value = `${maxInput.value}`;
  };
})

// Set max value not less then min value
maxInput.addEventListener('input', function () {
  if (parseInt(maxInput.value) < parseInt(minInput.value)) {
    maxInput.value = `${minInput.value}`;
  };
})

function validateRange() {
  let minPrice = parseInt(minInput.value);
  let maxPrice = parseInt(maxInput.value);

  // Update the displayed min and max values
  minValue.innerText = `${minPrice} грн`;
  maxValue.innerText = `${maxPrice} грн`;

  // Calculate the percentage positions for min and max values
  const minPercentage = ((minPrice / totalRangeWidth) * 100);
  const maxPercentage = ((maxPrice / totalRangeWidth) * 100);

  // Set the position of range color fill
  rangeFill.style.left = `${minPercentage}%`;
  rangeFill.style.width = `${maxPercentage - minPercentage}%`;
};

// Input elements' event listeners
inputElements.forEach((elem) => {
  elem.addEventListener('input', validateRange);
});

// Initial call for validateRange function
validateRange();
