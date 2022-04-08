"use strict";

const panels = document.querySelectorAll(".panel")
console.log(panels)

panels.forEach(el => el.addEventListener("click", openClass))
panels.forEach(el => el.addEventListener("transitionend", activeClass))


// Because function expressions, hoisiting is enabled
function openClass() {
  this.classList.toggle("panel-open")
}

function activeClass(e) {
  // Safari will display flex, and other browsers will display flex-grow
  // so we check transitionend's event property "propertyName"
  // and check if it includes the "flex" word
  // If it does, we add/remove the

  console.log(e.propertyName)
  console.log(e)
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active")
  }
}

// ? README: CHALLENGE 5
// ? - "transitionend" event
// ? - There's one "transitionend" event being fired for each property transitionning (Here Font size / flex-grow)
// ? - "transitionend" event has ome property attached to the event (e) object: propertyName that gives the name of the
// ?    property firing the event.
// ? - Flex property. I rarely use it, but it allows to define the space a flex item is going to take,
// ?   compared to the siblings flex items. We play with this value in this challenge to create a cool JS animation.
// ? - Class manipulation in JS is a common thing.
