//* JavaScript Execution Context

//? Execution Context

//! Global Execution Context
//! Function Execution Context

//! {} -> Memory execution phase


//? example

let val1 = 3  //variable execution phase
let val2 = 4  //variable execution phase

//? This is a JavaScript function named add 
//? that takes two numbers(num1 and num2) as input, that takes two numbers(num1 and num2) as input,
//? calculates their sum, and returns the result.
function addNum(num1, num2){
    let total = num1 + num2  
    return total
}

let result = (addNum(val1, val2));
let result2 = addNum(10, 20);
// console.log(result);
// console.log(result2);


//* Call Stack
//* This JavaScript function, introduce, takes a name as input,
//* calls the addName function with that name, and then logs a greeting message to the console.
function addName(name) {
  console.log("Hello, " + name);
}
function introduce(name) {
  addName(name);
  console.log("Nice to meet you! ");
}

introduce("Kamlesh");