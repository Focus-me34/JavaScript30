"use strict";

const inputs = document.querySelectorAll("input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  // This is a way of modifying a css variable with js
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(el => el.addEventListener("change", handleUpdate));
inputs.forEach(el => el.addEventListener("mousemove", handleUpdate));


// README:
// - CSS variables
// - dataset
// - documentElement
// - manipulate css variables with JS
// - change / mouseover events
