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

const swiperPopular = new Swiper(".popular__swiper", {
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 30,
  watchOverflow: true,
  preventInteractionOnTransition: true,
  navigation: {
    prevEl: ".popular__swiper-button-prev",
    nextEl: ".popular__swiper-button-next",
  },
});

const swiperNew = new Swiper(".new__swiper", {
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 30,
  watchOverflow: true,
  preventInteractionOnTransition: true,
  navigation: {
    prevEl: ".new__swiper-button-prev",
    nextEl: ".new__swiper-button-next",
  },
});

const swiperSale = new Swiper(".sale__swiper", {
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 30,
  watchOverflow: true,
  preventInteractionOnTransition: true,
  navigation: {
    prevEl: ".sale__swiper-button-prev",
    nextEl: ".sale__swiper-button-next",
  },
});

const swiperSliders = Array.from(document.getElementsByClassName("swiper"));

function setMaxHeight() {
  swiperSliders.forEach((slider) => {
    const wrapperHeight = slider.swiper.wrapperEl.offsetHeight;

    slider.swiper.slides.forEach((slide) => {
      if (slide.offsetHeight < wrapperHeight) {
        slide.style.height = `${wrapperHeight}px`;
      }
    });
  });
}

function setNavPosition() {
  swiperSliders.forEach((slider) => {
    const nextEl = slider.swiper.navigation.nextEl;
    const prevEl = slider.swiper.navigation.prevEl;
    const sizeWithMargins = Math.round(slider.swiper.slides[0].swiperSlideSize);
    const navigationOffsetSize = (sizeWithMargins - 255) / 2;
    nextEl.style.paddingRight = `${navigationOffsetSize}px`;
    prevEl.style.paddingLeft = `${navigationOffsetSize}px`;
  });
}

window.addEventListener("load", () => {
  setMaxHeight();
  setNavPosition();
});

window.addEventListener("resize", setNavPosition);
