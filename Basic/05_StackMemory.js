/**********************STACK MEMORY HEAP MEMORY*****************************/

// STACK(PRIMITIVE), HEAP (NON-PRIMITIVE)

let myYouTubeName = "TechSolve"

let otherValue = myYouTubeName 
console.log(otherValue);

otherValue = "Dai-gamer"
console.log(otherValue);

let userOne ={
    email:"user@googal.com",
    upi:"user@ybl"
}
let userTow = userOne
userTow.email = "kamlesh@googal.com"
console.log(userOne.email);
console.log(userTow.email);

//JITNA VE PRIMITIVE DATA-TYPE HAI STACK ME JATA HAI 
//HEAP KE UNDER KUCH V VALUE PUT KARATE HAI USKA REFRANCE MILTA HAI
