"use strict";

const imgs = document.querySelectorAll(".slide-in");

// ? IMPORTED FROM LODASH, REDUCE THE AMOUNT OF TIME THE "SCROLL" EVENT IS BEING TRIGGERED
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function checkSlide(e) {
  imgs.forEach(img => {
    console.clear()
    console.log()
    // ? Middle of the image (Height) position
    // ! It still checkes where the top of the image is. Not the middle
    const imgSlideAt = (window.scrollY + window.innerHeight) - img.height / 2;
    console.log(imgSlideAt)

    // ? Bottom of the image (Height)
    const imgBottom = img.offsetTop + img.height;

    // ? Did we reach the half of the height of the image ? Checker variable
    // ! A bit of hard logic: We want to
    console.log(img.offsetTop)
    const isHalfShown = imgSlideAt > img.offsetTop;
    console.log(isHalfShown)

    // ? Did we scroll enough so we don't see the image anymore ?
    const isNotScrolledPast = window.scrollY < imgBottom;

    if (isHalfShown && isNotScrolledPast) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");

    }
    console.log("-----")
  });
}

window.addEventListener("scroll", debounce(checkSlide))
