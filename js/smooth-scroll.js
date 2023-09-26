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
        const currentTarget = this.getAttribute("data-scroll");
        smoothScroll(currentTarget, 800);
      });
    });
  };
  
  scrollTo();