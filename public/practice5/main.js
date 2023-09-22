let x, y, z; // can be changed
x = 5;          
y = 6;
z = x + y;
const e = z**2;

const constantString = 'Maybe printed'; // cant be changed

if (z > 10) {
    console.log(constantString);  // comment
}

const firstString = "abc";
const secondString = 'def';

/* Concatinating both strings results in a single variable
   like so:
*/

function stringConcat(a, b){
    return `${a}${b}`;
}

console.log(typeof(firstString))
if (typeof(firstString) == "string") {
    console.log(stringConcat(firstString, secondString));
}

let glob = 10; // global scope

{
    let glob = 90; // local scope
}

console.log(glob); // global value

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let a = true;
let b = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
