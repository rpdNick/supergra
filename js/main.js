function initSlider(sliderElement, sliderOptions) {
  let swiper = new Swiper(sliderElement, sliderOptions);
  return swiper;
}

const providersSliderOptions = {
  slidesPerView: "auto",
  a11y: false,
  grid: {
    rows: 2,
    fill: "column",
  },

  spaceBetween: 20,
  pagination: {
    el: ".partners .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".partners .slider-button-next",
    prevEl: ".partners .slider-button-prev",
  },
};

const vacancySliderOptions = {
  slidesPerView: 3,
  spaceBetween: 16,
  a11y: false,

  pagination: {
    el: ".vacancy-slider .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".vacancy-slider .slider-button-next",
    prevEl: ".vacancy-slider .slider-button-prev",
  },
};

let providersSlider = initSlider(".partners-slider", providersSliderOptions);
let vacancySlider = initSlider(".vacancy-slider", vacancySliderOptions);
