const addToFavIcons = Array.from(
  document.getElementsByClassName("add-to-fav-icon")
);

addToFavIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    event.target.parentElement.addEventListener(
      "click",
      (event) => event.preventDefault(),
      { once: true }
    );
    event.target.children[0].classList.toggle("added");
  });
});

const menu = document.getElementsByClassName("header__bottom-section")[0];
const menuButton = document.getElementsByClassName("menu-btn")[0];
const menuItems = Array.from(
  document.getElementsByClassName("menu__list-link-wrapper")
);
const menuExtraHrefs = Array.from(
  document.getElementsByClassName("menu-extra__hrefs-item")
);

function toggleHover() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 880) {
    menuItems.forEach((item) => {
      item.parentElement.classList.remove("menu__list-item_hover");
    });
  } else {
    menuItems.forEach((item) => {
      item.parentElement.classList.add("menu__list-item_hover");
    });
  }
}

function openSubMenuHandler() {
  this.parentElement
    .querySelector(".menu__list-lvl-2")
    .classList.toggle("menu__list-lvl-2_open");

  this.parentElement
    .querySelector(".menu__mobile-arrow")
    .classList.toggle("menu__mobile-arrow_open");
}

function openSubMenuItem() {
  const windowWidth = window.innerWidth;

  menuItems.forEach((item) => {
    windowWidth <= 880
      ? item.addEventListener("click", openSubMenuHandler)
      : item.removeEventListener("click", openSubMenuHandler);
  });
}

menuButton.addEventListener("click", function () {
  this.classList.toggle("menu-btn_open");
  menu.classList.toggle("header__bottom-section_visible");
});

menuExtraHrefs.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuItem.querySelector(".menu-extra__icon").click();
  });
});

["load", "resize"].forEach((event) => {
  window.addEventListener(event, toggleHover);
  window.addEventListener(event, openSubMenuItem);
});

const removeFilters = Array.from(
  document.getElementsByClassName('gallery__remove-filter')
)

removeFilters.forEach(cross => 
  cross.addEventListener('click', function () {
    this.parentElement.remove()
  })
)

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

// Price fields inputs' logic
minField.addEventListener('input', function() {
  minInput.value = this.value;
});


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

const filterType = document.getElementsByClassName('gallery__sort-value')[0];
const filterList = document.getElementsByClassName('gallery__sort-value-list')[0];
const sortArrow = document.getElementsByClassName('gallery__sort-arrow')[0];
const sortText = document.getElementsByClassName('gallery__sort-value-text')[0];
const sortItems = Array.from(document.getElementsByClassName('gallery__sort-value-item'));

filterType.addEventListener('click', function() {
  filterList.classList.toggle('gallery__sort-value-list_open');
  sortArrow.classList.toggle('expand-arrow_rotated');
});

const sortOption = sortItems.find(item => item.classList.contains(
  'gallery__sort-value-item_selected'));
sortText.innerText = sortOption.innerText;

sortItems.forEach(item => {
  item.addEventListener('click', function() {
    sortItems.forEach(item => item.classList.remove('gallery__sort-value-item_selected'))
    this.classList.add('gallery__sort-value-item_selected')
    sortText.innerText = this.innerText
  })
})
