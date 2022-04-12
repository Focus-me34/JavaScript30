"use strict";

const letterArray = [];
const secretCode = "erickestgay";

let interval;

function pushKey(e) {
  console.log(e.key)
  letterArray.push(e.key)
  letterArray.splice(-secretCode.length - 1, letterArray.length - secretCode.length)
  console.log(letterArray.join(""))
  if (letterArray.join("").match(/erickestgay/g)) {
    if (document.body.childElementCount === 1) {
      document.body.insertAdjacentHTML("beforeend", "<h1>Erick est gay</h1>");
    }

    interval = setInterval(() => {
      cornify_add();
    }, 500);
  };

  if (letterArray.join("").match(/stop/g)) {
    clearInterval(interval)
  }
}

document.addEventListener("keydown", pushKey)
