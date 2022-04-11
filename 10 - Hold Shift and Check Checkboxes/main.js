"use strict";

const inputs = document.querySelectorAll(".inbox input[type='checkbox']");
const inputsArr = Array.from(inputs) // ? We have to create array from inputs variable (It's a nodelist so can't access via index in for loop below)

let inputStart, inputEnd;
let clickCount = 0;    // ? 1 = inputStart, 2 = inputend. This count is the tool we use to assign elements to the correct variables

// ! When clicking on a checkbox ( has attribute "type") and shift key is being pressed, we save the begin / end input selection
document.addEventListener("click", (e) => {
  if ((e.target.attributes.hasOwnProperty("type")) && (e.shiftKey === true)) {
    clickCount === 0 ? inputStart = e.target : inputEnd = e.target;
    console.log(inputStart, inputEnd);
    clickCount++

    if (clickCount === 2) {
      // TODO: We need to call the checkElement function here, only when the user is clicking shift, and clicked 2 times:
      // TODO: Once to setup the inputStart variable, and a second time to setup the inputEnd variable
      checkElements();
    }
  }
})

// ! When clicking manually on the checkbox to UNTICK them, we need to change the "checked" property of element to false
// ! otherwise checkElements function won't work properly (set checked but never unchecked even when clicking without the event below)
inputs.forEach(input => {
  input.addEventListener("click", (e) => e.target.checked ? e.target.checked = true : e.target.checked = false)
});

// ! We check the index of our elements in variables inputStart/inputEnd
// ! If the index of start is lower than index end, it means the iterator needs to increse by one until reaching the inputEnd index
// ! If the index of start is higher than index end, it means the iterator needs to decrease by one until reaching the inputEnd index
// ! We reinitialise the click count to 0 whenever we selected the start and end inputs.
function checkElements() {
  for (let el = inputsArr.indexOf(inputStart); el !== inputsArr.indexOf(inputEnd); inputsArr.indexOf(inputStart) < inputsArr.indexOf(inputEnd) ? el++ : el--) {
    inputsArr[el].checked = true
  }
  clickCount = 0; // ? Reinitialise the click counter, so we can use the feature again and again
}


// The code below is easier to read but works the same as the 4 lines above ...
// ! While looping, if the elements in between the start and the end of the loop are checked, we skip them directly.
// function checkElements() {
//   if (inputsArr.indexOf(inputStart) < inputsArr.indexOf(inputEnd)) {
//     for (let el = inputsArr.indexOf(inputStart); el !== inputsArr.indexOf(inputEnd); inputsArr.indexOf(inputStart) < inputsArr.indexOf(inputEnd) ? el++ : el--) {
//       // console.log(inputsArr[el].checked)
//       if (inputsArr[el].checked) continue // ? Skip inputs already checked
//       inputsArr[el].checked = true
//     }
//   } else if ((inputsArr.indexOf(inputStart) > inputsArr.indexOf(inputEnd))) {
//     for (let el = inputsArr.indexOf(inputStart); el !== inputsArr.indexOf(inputEnd); el--) {
//       if (inputsArr[el].checked) continue // ? Skip inputs already checked
//       inputsArr[el].checked = true
//     }
//   }
//   clickCount = 0; // ? Reinitialise the click counter, so we can use the feature again and again
// }
