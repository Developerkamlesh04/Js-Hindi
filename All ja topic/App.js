// JavaScript Comprehensive Guide - All Topics in One Project

// 1. Basics of JavaScript

/*1.1 Introduction to JavaScript
 JavaScript is a versatile, high-level programming language used primarily for web development.
 It allows developers to create dynamic and interactive content for websites.
 It can run in web browsers and on servers (using Node.js).
*/
// 1.2 JavaScript Syntax
// JavaScript syntax defines how programs are written. Here's a simple example:
console.log("Hello, JavaScript!"); // This prints a message to the console.

// 1.3 Variables and Data Types
// Variables store data that can be used later in the program.
var oldVar = "I am var"; // Declared using 'var'. Has function scope.
let modernVar = "I am let"; // Declared using 'let'. Has block scope.
const constantVar = "I am const"; // Declared using 'const'. Cannot be reassigned.

// 1.4 Primitive Types
let stringVar = "Hello"; // A sequence of characters (text).
let numberVar = 42; // A numeric value.
let booleanVar = true; // A true/false value.
let nullVar = null; // Represents an intentional absence of value.
let undefinedVar; // A variable declared but not assigned.
let bigIntVar = BigInt(9007199254740991); // For large integers.
let symbolVar = Symbol("unique"); // A unique identifier.

// 1.5 Reference Types
let obj = { key: "value" }; // An object storing key-value pairs.
let arr = [1, 2, 3]; // An array storing a list of values.
function func() {
  return "I am a function";
} // A reusable block of code.

// 1.6 Operators
let sum = 5 + 3; // Arithmetic Operators: +, -, *, /, %.
let isEqual = 5 == "5"; // Comparison Operators: ==, ===, !=, >, <, >=, <=.
let isTrue = true && false; // Logical Operators: &&, ||, !.
let assignVar = 10; // Assignment Operators: =, +=, -=, *=, /=.
let result = 5 > 3 ? "Yes" : "No"; // Ternary Operator for conditional expressions.

// 1.7 Control Structures
// Conditional Statements
if (sum > 5) {
  console.log("Greater than 5");
} else {
  console.log("Less or equal to 5");
}

// Switch Statement
switch (sum) {
  case 8:
    console.log("Sum is 8");
    break;
  default:
    console.log("Not 8");
}

// Loops
for (let i = 0; i < 3; i++) {
  console.log(i); // For loop
}

let j = 0;
while (j < 3) {
  console.log(j); // While loop
  j++;
}

do {
  console.log(j); // Do-while loop
  j--;
} while (j > 0);

// For...of loop
let numsArray = [1, 2, 3];
for (const num of numsArray) {
  console.log(num);
}

// For...in loop
const objectExample = { a: 1, b: 2 };
for (const key in objectExample) {
  console.log(`${key}: ${objectExample[key]}`);
}

// 2. Functions

// 2.1 Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// 2.2 Function Expression
const sayGoodbye = function (name) {
  return `Goodbye, ${name}!`;
};

// 2.3 Arrow Functions
const multiply = (a, b) => a * b;

// 2.4 Higher-Order Functions
const applyFn = (arr, fn) => arr.map(fn); // Takes a function as an argument.

// 2.5 Callback Functions
function processUserInput(callback) {
  callback("User");
}
processUserInput((name) => console.log(`Hello, ${name}!`));

// 2.6 Closures
function closureExample() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const increment = closureExample();
console.log(increment()); // 1
console.log(increment()); // 2

// 2.7 IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed");
})();

// 2.8 Function Scope and Hoisting
function testScope() {
  console.log(hoistedVar); // Undefined due to hoisting.
  var hoistedVar = "Hoisted";
}

// 2.9 The this Keyword
const person = {
  name: "Alice",
  greet() {
    return `Hello, my name is ${this.name}`;
  },
};

// 3. Objects and Arrays

// 3.1 Object Literals
const car = { brand: "Toyota", model: "Corolla" };

// 3.2 Object Properties and Methods
car.drive = function () {
  console.log("Driving");
};

// 3.3 Prototypes and Inheritance
function Vehicle(type) {
  this.type = type;
}
Vehicle.prototype.start = function () {
  console.log(`${this.type} started`);
};

// 3.4 Array Methods
let nums = [1, 2, 3];
nums.push(4); // Add
nums.pop(); // Remove last
nums.map((x) => x * 2); // Transform
nums.filter((x) => x > 2); // Filter values
nums.reduce((a, b) => a + b); // Aggregate values

// 3.5 Destructuring Objects and Arrays
let { brand } = car; // Extract property from object
let [firstNum] = nums; // Extract first value from array

// 3.6 Spread and Rest Operators
let combined = [...nums, 4, 5]; // Combine arrays
const sumAll = (...args) => args.reduce((a, b) => a + b); // Rest operator

// 4. Asynchronous JavaScript

// 4.1 Callbacks
setTimeout(() => console.log("Callback executed"), 1000);

// 4.2 Promises
let promise = new Promise((resolve, reject) => resolve("Success"));
promise.then((data) => console.log(data));

// 4.3 Async/Await
async function fetchData() {
  const data = await promise;
  console.log(data);
}
fetchData();

// 4.4 Fetch API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));

// 4.5 Error Handling in Async Code
async function fetchWithErrorHandling() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Fetch failed", error);
  }
}
fetchWithErrorHandling();

// 5. DOM Manipulation

// 5.1 Understanding the DOM
// The Document Object Model (DOM) represents the HTML structure of a web page.
console.log(document.title); // Access the title of the document.

// 5.2 Selecting Elements
const element = document.getElementById("myElement"); // Select by ID
const elements = document.querySelectorAll(".myClass"); // Select by class

// 5.3 Modifying Elements
element.textContent = "Updated Text"; // Change text content
element.style.color = "red"; // Change style

// 5.4 Event Handling
element.addEventListener("click", () => alert("Element clicked"));

// 6. Browser APIs

// 6.1 Local Storage
localStorage.setItem("key", "value");
console.log(localStorage.getItem("key"));

// 6.2 Geolocation API
navigator.geolocation.getCurrentPosition(
  (position) => console.log(`Latitude: ${position.coords.latitude}`),
  (error) => console.error("Error getting location")
);

// 7. Error Handling
try {
  JSON.parse("invalid JSON");
} catch (error) {
  console.error("Parsing error:", error.message);
}

// 8. ES6 and Beyond

// 8.1 Template Literals
let name = "John";
console.log(`Hello, ${name}! Welcome to JavaScript.`);

// 8.2 Modules (Requires Module System)
// export function example() { return 'Example'; }

// 8.3 Classes and Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}

// 8.4 Maps and Sets
let map = new Map();
map.set("key", "value");
console.log(map.get("key"));

let set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(4));

// 8.5 Symbol Type
let uniqueSymbol = Symbol("unique");
console.log(uniqueSymbol);
