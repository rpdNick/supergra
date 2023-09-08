function initSlider(sliderElement, sliderOptions) {
  console.log(sliderOptions);
  let swiper = new Swiper(sliderElement, sliderOptions);
  return swiper;
}

const providersSliderOptions = {
  slidesPerView: "auto",
  grid: {
    rows: 2,
    fill: "column",
  },

  spaceBetween: 20,
};

const vacancySliderOptions = {
  slidesPerView: 3,
  spaceBetween: 16,

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
