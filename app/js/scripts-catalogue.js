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

const filtersInputs = Array.from(
  document.getElementsByClassName('gallery__filter-checkbox')
)
const filtersApplied = document
  .getElementsByClassName('gallery__filters-on')[0]

const removeAllFiltersBtn = document.getElementsByClassName('gallery__remove-btn')[0]

function createFilter(name) {
  const filterWrap = document.createElement('div')
  filterWrap.classList.add('gallery__filter-on')

  const filterName = document.createElement('span')
  filterName.classList.add('gallery__filter-applied')
  filterName.innerText = name

  const removeCross = document.createElement('span')
  removeCross.classList.add('gallery__remove-filter')

  filterWrap.append(filterName, removeCross)

  return filterWrap
}

function defineEndingPredmet(number) {
  const lastDigit = +number.charAt(number.length - 1)
  if (
    +number >= 10 && +number <= 19 || 
    lastDigit === 0 ||
    lastDigit >= 5 && lastDigit <= 9
  ) {
    return 'ов'
  }

  if (lastDigit === 1) {
    return ''
  } 

  if (lastDigit > 1 && lastDigit < 5) {
    return 'а'
  }
}
  
function defineEndingPerson(number) {
  const lastDigit = +number.charAt(number.length - 1)
  if (
    +number >= 10 && +number <= 19 ||
    lastDigit === 0 ||
    lastDigit >= 5 && lastDigit <= 9
  ) {
    return ''
  }
  
  if (lastDigit === 1) {
    return 'а'
  } 
  
  if (lastDigit > 1 && lastDigit < 5) {
    return 'ы'
  } 
}
  
const filterElements = {}

filtersInputs.forEach(input => input.addEventListener('change', function() {
  let labelText

  if (input.dataset.type === 'предмет') {
    const text = input.nextElementSibling.innerText
    const properEnding = defineEndingPredmet(text)
    labelText = text + ' ' + input.dataset.type + properEnding
  } else if (input.dataset.type === 'персон') {
    const text = input.nextElementSibling.innerText
    const properEnding = defineEndingPerson(text)
    labelText = text + ' ' + input.dataset.type + properEnding
  } else {
    labelText = input.nextElementSibling.innerText
  }

  if (input.checked) {
    Object.keys(filterElements).length === 0 && 
      removeAllFiltersBtn.classList.remove('hidden')
 
    removeAllFiltersBtn.addEventListener('click', function () {
      const crossIcons = Array.from(
        filtersApplied.getElementsByClassName('gallery__remove-filter')
      )
      crossIcons.forEach(crossIcon => crossIcon.click())
    }, {once: true})
    
    const newElem = filtersApplied.appendChild(createFilter(labelText))
    filterElements[input.id] = newElem
    newElem.lastElementChild.addEventListener('click', function () {
      newElem.remove()
      input.checked = false
      Object.keys(filterElements).length === 1 && 
        removeAllFiltersBtn.classList.add('hidden')
      delete filterElements[input.id]
    })

  } else {
    const newElem = filterElements[input.id]
    filtersApplied.removeChild(newElem)
    Object.keys(filterElements).length === 1 && 
      removeAllFiltersBtn.classList.add('hidden')
    delete filterElements[input.id]
  }
}))
const removeFilters = Array.from(
  document.getElementsByClassName('gallery__remove-filter')
)

removeFilters.forEach(cross => 
  cross.addEventListener('click', function () {
    this.parentElement.remove()
  })
)

const filtersHeads = Array.from(
  document.getElementsByClassName('gallery__filter-wrap')
)

filtersHeads.forEach(head =>
  head.addEventListener('click', function () {
    this.lastElementChild.classList.toggle('expand-arrow_rotated')
    this.nextElementSibling.classList.toggle('hidden')
  })
)
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
