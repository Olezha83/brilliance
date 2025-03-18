const filtersInputs = Array.from(
  document.getElementsByClassName('gallery__filter-checkbox')
)
const filtersApplied = document
  .getElementsByClassName('gallery__filters-on')[0]

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

const filterElements = {}

filtersInputs.forEach(input => input.addEventListener('change', function() {
  const labelText = input.nextElementSibling.innerText
  if (input.checked) {
    const newElem = filtersApplied.appendChild(createFilter(labelText))
    filterElements[input.id] = newElem
  } else {
    const newElem = filterElements[input.id]
    if (newElem) {
      filtersApplied.removeChild(newElem)
      delete filterElements[input.id]
    }
  }
}))