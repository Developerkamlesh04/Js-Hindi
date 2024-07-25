//Array

const myArr =[0, 8, 6, 12, 9, 5]
const myHero =["spiderman, ironman"]
// console.log(myHero[1]);   NOT WORKING

// console.log(myArr.length);
// 6
// console.log(myArr[3]);
// 12


//Array Method

// myArr.push(10)    //[0, 8,  6, 12,9, 5, 10]
// myArr.pop()       //[0, 8,  6, 12,9,]
// myArr.unshift(3)  //[3, 0, 8,  6,]
// myArr.shift()     //[0, 8,  6, 12,9,]

// console.log(myArr.includes(12));
// // true
// console.log(myArr.indexOf(12));
// // 3

// const newArr = myArr.join();
// console.log(myArr);
// console.log( typeof newArr);
// Output [ 0, 8, 6, 12, 9, 5 ]
// string

//Slice, Splice

console.log("A",myArr);

const myn1 =myArr.slice(1, 3)

console.log(myn1);
console.log("B",myArr);


const myn2 =myArr.splice(1, 3)
console.log(myn2);
console.log("C",myArr);










