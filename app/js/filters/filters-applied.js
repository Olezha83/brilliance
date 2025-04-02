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