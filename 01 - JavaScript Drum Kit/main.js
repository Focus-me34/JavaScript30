"use strict";

// const keys = document.querySelectorAll(".key")

// document.addEventListener("keydown", (e) => {
//   console.log(e)

//   switch (e.key) {
//     case "a":
//       const clap = new Audio("sounds/clap.wav");
//       keys[0].classList.add("playing")
//       clap.play();
//       break;
//     case "s":
//       const hihat = new Audio("sounds/hihat.wav");
//       keys[1].classList.add("playing")
//       hihat.play();
//       break;
//     case "d":
//       const kick = new Audio("sounds/kick.wav");
//       keys[2].classList.add("playing")
//       kick.play();
//       break;
//     case "f":
//       const openhat = new Audio("sounds/openhat.wav");
//       keys[3].classList.add("playing")
//       openhat.play();
//       break;
//     case "g":
//       const boom = new Audio("sounds/boom.wav");
//       keys[4].classList.add("playing")
//       boom.play();
//       break;
//     case "h":
//       const ride = new Audio("sounds/ride.wav");
//       keys[5].classList.add("playing")
//       ride.play();
//       break;
//     case "j":
//       const snare = new Audio("sounds/snare.wav");
//       keys[6].classList.add("playing")
//       snare.play();
//       break;
//     case "k":
//       const tom = new Audio("sounds/tom.wav");
//       keys[7].classList.add("playing")
//       tom.play();
//       break;
//     case "l":
//       const tink = new Audio("sounds/tink.wav");
//       keys[8].classList.add("playing")
//       tink.play();
//       break;
//     default:
//       break;
//   }
// })

// document.addEventListener("keyup", () => keys.forEach(key => key.classList.remove("playing")))


document.addEventListener("keydown", playAudio)

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");

  key.addEventListener("transitionend", () => key.classList.remove("playing"))

  // ! Probably bad practice even tho it works as it's better to
  // ! focus on the transition end event in this kind of situation

  // setTimeout(() => {
  //   key.classList.remove("playing")
  // }, 100);
}

/* // ? READMI:
    - Event listener and event (e) object
    - transition end event
    - Play audio
    - Use data-set attribute
*/
