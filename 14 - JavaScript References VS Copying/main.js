"use strict";

console.log("---------- LODASH TEST ----------");

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("LODASH LIBRARY USE")
console.log(_.sample(arr))

console.log("---------- STRINGS / NUMBERS / BOOLEAN ----------");

// start with strings, numbers and booleans
const str1 = "Amin";
console.log(str1)
let str2 = str1;
str2 = "Lucy";
console.log(str1, str2);

const bool1 = false;
console.log(bool1)
let bool2 = bool1;
bool2 = true;
console.log(bool1, bool2);

const num1 = 30;
console.log(num1)
let num2 = num1;
num2 = 60;
console.log(num1, num2);

console.log("---------- ARRAYS ----------");
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:
const playersCopy = players;
// however what happens when we update that array?
playersCopy[playersCopy.length - 1] = "Amin"; // ? Changes original array too
// now here is the problem!
console.log(players, playersCopy);
// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!
console.log(players === playersCopy); // ? Same
// So, how do we fix this? We take a copy instead!
// one way
const playersCopyFrom = Array.from(players);
playersCopyFrom[1] = "Erick";
console.log(players, playersCopyFrom);

// or create a new array and concat the old one in
// or use the new ES6 Spread
const playersClone = [...players];

// now when we update it, the original one isn't changed
playersClone[playersClone.length - 2] = "Lucy";
console.log(players, playersClone);

// The same thing goes for objects, let's say we have a person object

console.log("---------- OBJECT ----------");
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

console.log(person);

// and think we make a copy:
const personClone = person;
personClone.name = "WESBOS";
console.log(person, personClone);

// how do we take a copy instead?
const personIndependantCopy = Object.assign({}, person, { independant: true });
console.log(personIndependantCopy);

// TODO: We will hopefully soon see the object ...spread
const person2 = { ...person, height: 184 };
person2.name = "Amin";
person2.age = 28;
console.log(person2);


// TODO: Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const amin = {
  name: 'Amin',
  age: 28,
  social: {
    twitter: '@sunamin',
    facebook: 'sunamin-34'
  }
};
const person3 = Object.assign({}, amin) // One level deep
console.log(person3)

const person4 = JSON.parse(JSON.stringify(amin));
person4.independant = true;
person4.name = "AMIN INDEPENDANT";
console.log(person4);

const personLodash = _.cloneDeep(amin); // ! Method imported from the lodash library
console.log(personLodash);
