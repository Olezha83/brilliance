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
