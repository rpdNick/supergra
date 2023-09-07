function initSlider(sliderElement, sliderOptions) {
  let swiper = new Swiper(sliderElement, sliderOptions);
  return swiper;
}

const providersSliderOptions = {
  slidesPerView: 6,
  grid: {
    rows: 2,
    fill: "row",
  },
  
  spaceBetween: 20,
};

let providersSlider = initSlider(".partners-slider", providersSliderOptions);
