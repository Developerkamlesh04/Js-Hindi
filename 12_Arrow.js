const user ={
    username: "kamlesh",
    price: 99,

    welcomeMessage: function (){
        console.log(`${this.username}, Welcome to my frist website`);
        // console.log(this);  this current value pe kaam karta hai
                
    }
}

// user.welcomeMessage()
// user.username = "Aman"
// user.welcomeMessage()

// console.log(this);

// function phone (){
//     let username = "Rajan"
//     console.log(this);
    
// }
// phone()

// arrow funcation

const phone = () =>{
    let username = "rajan"
    console.log(this.username);
    // console.log(this);    output {}   
}

// phone()

// const addTwo =(num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo(4,7));

// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(4,7));


// const myArray = [2,3,4,5,6,7]
// myArray.forEach() //next steap


