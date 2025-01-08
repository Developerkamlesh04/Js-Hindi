/* Map(); reduce(); filter(); short();

map Question:- 1: Suppose we want to add 10 to every element in a array.
We can use the map() method to map over every element in the array to add 10 to it.
 */

// const arr = [1, 2, 3, 4, 5];
// const output = arr.map((num) => (num += 10));
// console.log(arr);
// console.log(output);

//* Use filter(); Method

//! You can use filter() to return only the odd numbers from an array of numbers.

const arr1 = [1, 2, 3, 4, 5];
const output1 = arr1.filter((num) => num % 2);
console.log(arr1);
console.log(output1);