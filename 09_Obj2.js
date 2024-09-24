// 1st steap

const tinderUser = new Object()
// const tinderUser ={}

tinderUser.id = "125217"
tinderUser.name = "kamlesh"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// 2nd
 
const instauser ={
    email: "kamlesh@gmail.com",
    fullname:{
        fristnmae:"kamlesh",
        lastname: "kumar"
    }
}
// console.log(instauser.fullname); Access All Object

// 3rd combain the obj

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1, ...obj2} usable and simpale method
// console.log(obj3);

// using API problem

const users =[
    {
        id: 1,
        email:"kamlesh.com" 
     },
     {
        id: 1,
        email:"kamlesh.com" 
     },
     {
        id: 1,
        email:"kamlesh.com"
     },

    ]

    users[1].email
    console.log(tinderUser);
    console.log(Object.keys(tinderUser));
    console.log(Object.values(tinderUser));

    console.log(tinderUser.hasOwnProperty('isLoggedout')); //inclede isLoggedIn 
    
    
    
    



