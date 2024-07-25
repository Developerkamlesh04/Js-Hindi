let Score = undefined
console.log(typeof Score); 
console.log(typeof (Score)); 

let valueInNumber = Number(Score);
console.log(typeof valueInNumber); 
console.log(valueInNumber);


// "40"  -> String
// "40abc" ->NaN
// null,undefined -> Undefined
// true/false -> Boolean
// object -> Object

/*
 * Write a JavaScript program that prompts the user to enter their name and then greets them with a customized message using the entered name.
 * Write a JavaScript program to check the data type of any given input using typeof operator.
 */


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) // convert number into boolean
console.log(booleanIsLoggedIn);


//console.log("Data Type: ", typeof isLoggedIn + "\nValue : "+ isLoggedIn);
// 1  - True , 0 - False
//""  - Empty String => false
//"King" => Non-Empty String => true
 
let someNumber = 40
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);
 

