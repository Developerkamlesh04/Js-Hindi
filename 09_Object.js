// Object

//Singleton
// Object.create

//object literals

const mySym =Symbol("key1")

let user = {
    name: "Kamlesh",
    [mySym]: "mykey1",
    age:20,
    location: "Delhi",
    email: "kamlesh@gmail.com"
}

console.log(user["age"])  //console.log(user.age); second method
console.log(user["email"])
console.log(user["name"])
console.log( user["mySym"])

// change Email processs

user.email = "kamlesh@googal.com"
Object.freeze(user)
user.email = "kamlesh@Microsoft.com"
console.log(user);

user.greeting = function (){
    console.log("Hello JS user");    
}








