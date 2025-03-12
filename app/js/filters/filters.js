const filtersHeads = Array.from(
  document.getElementsByClassName('gallery__filter-wrap')
)

filtersHeads.forEach(head =>
  head.addEventListener('click', function () {
    this.lastElementChild.classList.toggle('expand-arrow_rotated')
    this.nextElementSibling.classList.toggle('hidden')
  })
)