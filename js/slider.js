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
