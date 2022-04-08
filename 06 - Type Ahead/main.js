"use strict";

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const dataCities = [];
fetch(endpoint).then(response => response.json()).then(data => dataCities.push(...data)) // Spread operator to break all the sub arrays from data
console.log(dataCities)

// RETURNS AN ARRAY OF RESULTS MATCHING THE QUERY WITHIN AN ARRAY (HERE THE "dataCities" ARRAY)
function searchResults(search, cities) {
  return cities.filter(cit => {
    const regex = new RegExp(search, "gi"); // g = global // i = insensitive (upcase / lowercase)
    return cit.city.match(regex) || cit.state.match(regex);
  })
}

// DISPLAY POPULATION IN A MORE READABLE WAY
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// GENERATE THE HTML TO APPEND TO THE BODY BASED ON THE RESULT FROM "searchResults" function
function displayResults() {
  const results = searchResults(this.value, dataCities)
  console.log(results)

  const html = results.map(place => {
    const regex = new RegExp(this.value, "gi")
    // HIGHLIGHTS THE PIECE OF TEXT BEING MATCHED FOR CITY / STATE
    const cityHl = place.city.replace(regex, `<span class='hl'>${this.value}</span>`)
    const stateHl = place.state.replace(regex, `<span class='hl'>${this.value}</span>`)
    return `
    <li>
      <span class="name">${cityHl}, ${stateHl}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `
  }).join("") // WE GENERATE A LI ELEMENT FOR EACH RESULT AND JOIN ALL THE RESULTS TOGETHER

  // WE MODIFY DYNAMICALLY THE INNERHTML OF THE SUGGESTIONS CONTANER, EVERYTIME THE EVENT IS BEING TRIGGERED (KEYUP)
  suggestions.innerHTML = html
}

const searchInput = document.querySelector(".search")
const suggestions = document.querySelector(".suggestions")

// EVENT LISTENER, DISPLAYING RESULTS ON KEYUP
searchInput.addEventListener("keyup", displayResults)


// ? README AND
// ? - FETCH / THEN API
// ? - Working with Json data
// ? - Spread operator to unpack group of data (...data)
// ? - Functional programming and encapsulation of logic.
// ? - RegExp / use a variable as a pattern using the "new RegExp" method
// ? - Event listener and DOM manipulation
