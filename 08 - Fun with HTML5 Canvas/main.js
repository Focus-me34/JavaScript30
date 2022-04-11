"use strict";

const canvas = document.querySelector("#draw"); // ? We just select the canva element here, that allows us to draw things with JS
const ctx = canvas.getContext("2d");        // ? The canva dimension is 2d (3d possible but more complex)
canvas.width = window.innerWidth;           // ? Canva width is full width of the browser window
canvas.height = window.innerHeight;         // ? Canva height is full height of the browser window

ctx.lineJoin, ctx.lineCap = "round";        // ? Those variables make the line rounded rather than squared
ctx.lineWidth = 30;                        // ? Width of the drawing line (Initial value to see if it works)
// ctx.strokeStyle = "#BADA55";             // ? Initial color. We don't need it. It's just to see if the line is being displayed or not.
// ctx.globalCompositeOperation = "multiply"   // ? Cool property to play around with color superpostion (Check MDN for more info)

let isDrawing = false;                      // ? Flag to define if user is clicking / drawing or not
let lastX, lastY;                           // ? We need to variables to define from where to where the user is drawing
let hue = 0;                                // ? Using this hue for the hsl color property. We start with red color
let direction = true;                       // ? Flag to define if lineWidth increases or decreases

function draw(e) {
  if (!isDrawing) return                    // ! GUARD CLAUSE. Not drawing if not clicking
  // console.log(e.clientX)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`// ? We start with a value of hsl of 0 (red color)
  ctx.beginPath(e.clientX, e.clientY);      // ? Point on the screen where the event happens (Values in bracket are defulat values)
  ctx.moveTo(lastX, lastY)                  // ? START FROM
  ctx.lineTo(e.offsetX, e.offsetY)          // ? GO TO
  ctx.stroke();                             // ! This what makes the line being displayed on the canva
  [lastX, lastY] = [e.offsetX, e.offsetY];  // ? Array destructuring => We draw from the last position of the mouse. So we have to reassign those values
  hue++                                     // ? We update the value of the hue to change the color after triggering the mousemove event
  // ctx.lineWidth = hue;                      // ? Width of the drawing line is equal to hue value. When we draw, the lineWidth changes

  if (hue >= 360) hue = 0                   // ? HUE can go over 360 and keeps going, but to make it cleaner, we can reset the value to 0 when hue reaches 360

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction; // ? We change flag true / false when we reach those values
  direction ? ctx.lineWidth++ : ctx.lineWidth--;                 // ? If true, width increses / false , width decrease
}

function enableDrawing(e) {
  isDrawing = true;                         // ? We turn the flag from false to true, meaning that there's an action from user to draw
  [lastX, lastY] = [e.offsetX, e.offsetY];  // ? We update the position of the cursor on the canva
}

canvas.addEventListener("mousedown", enableDrawing)          // ? When clicking, isDrawing is set up to true
canvas.addEventListener("mousemove", draw)                   // ? When the mouse is moving (And drawing is true). This e depends on mousedown event's callback function
canvas.addEventListener("mouseup", () => isDrawing = false)  // ? When we stop clicking
canvas.addEventListener("mouseout", () => isDrawing = false) // ? When the cursor leves the canva (Even when clicking)
