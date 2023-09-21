function initSlider(sliderElement, sliderOptions) {
  let swiper = new Swiper(sliderElement, sliderOptions);
  return swiper;
}

const providersSliderOptions = {
  breakpoints: {
    320: {
      grid: {
        rows: 2,
        fill: "column",
      },

      a11y: false,
      slidesPerView: "auto",
      spaceBetween: 8,
    },

    520: {
      grid: {
        rows: 2,
        fill: "column",
      },

      a11y: false,
      slidesPerView: "auto",
      spaceBetween: 20,
    },
  },
  updateOnWindowResize: "true",
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
  breakpoints: {
    320: {
      slidesPerView: 1.03,
      spaceBetween: 16,
      a11y: false,
    },

    520: {
      slidesPerView: "auto",
      spaceBetween: 16,
      a11y: false,
    },
  },
  updateOnWindowResize: "true",
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

// Menu modal
const siteBody = document.querySelector("body");
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu_button");
menuButton.addEventListener("click", function () {
  showPopup(menu);
});

function showPopup(el) {
  siteBody.classList.toggle("popup_open");
  el.classList.toggle("active");
}

function closePopup(button) {
  siteBody.classList.remove("popup_open");
  button.closest(".popup").classList.remove("active");
}

let closeButton = document.querySelectorAll(".button_close");

closeButton.forEach(function (el) {
  el.addEventListener("click", function () {
    closePopup(this);
  });
});

// check menu on page resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1287 && menu.classList.contains("active")) {
    menu.classList.remove("active");
    siteBody.classList.remove("popup_open");
  }
});

// Menu scroll
const smoothScroll = function (targetEl, duration) {
  const headerElHeight =
    document.querySelector(".main_header").clientHeight + 10;
  let target = document.querySelector(targetEl);
  let targetPosition = target.getBoundingClientRect().top - headerElHeight;
  let startPosition = window.pageYOffset;
  let startTime = null;

  const ease = function (time, start, target, duration) {
    time /= duration / 2;
    if (time < 1) return (target / 2) * time * time + start;
    time--;
    return (-target / 2) * (time * (time - 2) - 1) + start;
  };

  const animation = function (currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  requestAnimationFrame(animation);
};

const scrollTo = function () {
  const links = document.querySelectorAll(".scroll-to");
  links.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.classList.contains("menu_item_popup")) {
        closePopup(item);
      }
      const currentTarget = this.getAttribute("href");
      smoothScroll(currentTarget, 800);
    });
  });
};

scrollTo();
