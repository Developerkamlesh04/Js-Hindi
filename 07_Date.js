// **********************DATE AND TIME**********************
let date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());

// let myCreateDate = new Date (2023, 0, 23)
// let myCreateDate = new Date (2023, 0, 23, 5, 3)

let myCreateDate = new Date ("01-01-2024")
// console.log(myCreateDate.toLocaleString());

let myTimeStame = Date.now()
// console.log(myTimeStame);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDay()}  and the time`

newDate.toLocaleString('default', {
    weekday: 'long',
})

