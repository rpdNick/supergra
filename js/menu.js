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