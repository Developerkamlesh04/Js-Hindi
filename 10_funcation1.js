// Functions and parameter

// function intro

function MyName() {
    console.log("K");
    console.log("A");
    console.log("M");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
    
}
// MyName()

// function addTwonumbers(number1, number2){    // (number1, number2) its a parameter
//     console.log(number1 + number2);
    
// }
// addTwonumbers(25, 64)  // () Pass the Argument then excute the code

// Store the Variable 

function addTwonumbers(number1, number2){    
    // let result = number1 + number2
    // console.log("Kamlesh");/ //Function Return 1st method
    //return result
    return number1 + number2
    
    
}

const result = addTwonumbers(3, 14)
// console.log("Result", result); 

//User login Message 
function loginUserMessage(username = "sam"){
    if(username){                                   //chek undefine username
        console.log("plese enter a username");
        return
        
    }
    return `${username} Just logged in`
}
console.log(loginUserMessage("Kamlesh"));


