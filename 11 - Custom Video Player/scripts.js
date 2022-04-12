"use strict";

// ? We select our elements
const player = document.querySelector(".player")

const progress = document.querySelector(".progress")
const progressBar = document.querySelector(".progress__filled")

const toggleBtn = document.querySelector(".toggle")
const video = document.querySelector(".viewer")

const ranges = document.querySelectorAll("input[type='range']")
const skipButtons = document.querySelectorAll("button[data-skip]")
const screenBtn = document.querySelector("button[data-full-screen]")

// ! Defines a new method on the HTMLMediaElements (Videos)
// ! Check if a  video is playing by calling the .playing method. playing ? true : false
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
    return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
  }
})

let clicking = false;

console.log(ranges)


// ? We write our functions

function togglePlay() {
  video.playing ? video.pause() : video.play();
  updateButton()
}

function updateButton() {
  video.paused ? toggleBtn.innerText = "►" : toggleBtn.innerText = "❚ ❚";
}

function skip() {
  video.currentTime = video.currentTime + parseFloat(this.dataset.skip);
}

function changeClickingStatus() {
  clicking = !clicking;
}

function rangeUpdate() {
  if (clicking) {
    video[this.name] = this.value // video.volume / video.playBackRate = el.volume / el.playBackRate

    // Same thing as above, but way shorter
    // if (this.name === "volume") {
    //   console.log(video[this.name])
    //   video.volume = this.value;
    // } else if (this.name === "playbackRate") {
    //   video.playbackRate = this.value;
    // }
  }
}

function updateProgressBar() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function goTo(e) {
  const percent = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(percent)
  video.currentTime = percent;
}

function scrub(e) {
  // ? progress element width = 640px
  console.log(e);
  console.log(clicking)
  if (clicking) {
    // ? offsetX is the point where we clicked on the element, based on the
    const percent = (e.offsetX / progress.offsetWidth) * video.duration;
    console.log(percent)
    video.currentTime = percent;
  }
}

function changeScreenSize() {
  // ! Make video full screen when element request it for all browser. Add to library
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { // ? Safari
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {     // ? IE11
    video.msRequestFullscreen();
  }
}

// ? We create our event listeners

// TODO = Play/Pause video
// TODO = Change play/pause icon
video.addEventListener("click", togglePlay)
toggleBtn.addEventListener("click", togglePlay)

// TODO = Skip skipButtons
skipButtons.forEach(btn => btn.addEventListener("click", skip));

// TODO = Check if user is clicking on a skip button THEN Update range inputsArr
// ? CHECK IF USER IS CLICKING
ranges.forEach(range => range.addEventListener("mousedown", changeClickingStatus));
ranges.forEach(range => range.addEventListener("mouseup", changeClickingStatus));

// ? UPDATE INPUTS VALUE
ranges.forEach(range => range.addEventListener("change", rangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", rangeUpdate));

// TODO = Update the progress bar while video is playing
// ? timeupdate event is triggered when the .currentTime of the video changes
video.addEventListener("timeupdate", updateProgressBar)

// TODO = Update progress bar when clicking on it
progress.addEventListener("click", goTo)

// TODO = Check if user is clicking on the progressBar THEN Update range inputsArr
// ? Check if user is clicking on progress bar
progress.addEventListener("mousedown", changeClickingStatus);
progress.addEventListener("mouseup", changeClickingStatus);

// ? Update progress bar IF the user is clicking
progress.addEventListener("mousemove", (e) => clicking && scrub(e)) // ? Short circuiting. IF clicking = true, execute scrub. Otherwise nothing happens
// progress.addEventListener("mousemove", scrub); // Sme as above without short circuiting

// TODO = Make the video full screen when clicking the full screen button
screenBtn.addEventListener("click", changeScreenSize)
