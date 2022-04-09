"use strict";

const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function clockRun() {
  const now = new Date()

  const seconds = now.getSeconds();
  const secondsDegre = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegre}deg)`;

  const minutes = now.getMinutes()
  const minutesDegre = now.getMinutes((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegre}deg)`;

  const hours = now.getHours()
  const hoursDegre = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegre}deg)`

  console.log(`${hours}:${minutes}:${seconds}`)
}

setInterval(clockRun, 1000);

/*
  ? Readme:
  - set inteval
  - style property
  - time calculation in milliseconds
*/
