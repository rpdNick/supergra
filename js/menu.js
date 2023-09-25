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