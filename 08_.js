//Object
// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id = "Abc24w5"
tinderUser.name = "Kamlesh"
tinderUser.isLoggendIn = "True"

// console.log(tinderUser);

const regularUser = {
    email: "kamlesh@gmail.com",
    fullname :{
        userfullname:{
            firstname:"kamlesh",
            lastname:"kumar",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

const obj3 = {obj1,obj2}
// const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign(obj1, obj2)

// console.log(obj3);


const users =[
    {
        id: 1,
        email:  "k@gmail.com"
    },
    {
        id: 2,
        email: "A@gmail.com"
    },
]
// console.log(users);
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


