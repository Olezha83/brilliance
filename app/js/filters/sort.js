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
