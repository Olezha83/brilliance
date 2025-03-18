const removeFilters = Array.from(
  document.getElementsByClassName('gallery__remove-filter')
)

removeFilters.forEach(cross => 
  cross.addEventListener('click', function () {
    this.parentElement.remove()
  })
)
