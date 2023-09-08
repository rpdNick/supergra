function initSlider(sliderElement, sliderOptions) {
  console.log(sliderOptions)
  let swiper = new Swiper(sliderElement, sliderOptions);
  return swiper;
}

const providersSliderOptions = {
  slidesPerView: 'auto',
  grid: {
    rows: 2,
    fill: "row",
  },
  
  spaceBetween: 20,
};

let providersSlider = initSlider(".partners-slider", providersSliderOptions);
