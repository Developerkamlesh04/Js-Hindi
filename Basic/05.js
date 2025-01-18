// String
const name = "Kamlesh"
const repoCount =50

//console.log(name + repoCount +  "value");
console.log( `hello my name is ${name} and my repo count is ${repoCount}`);

//String interpolation (``) symbol

const gameName = new String (`Kamlesh`) //console output gameName check

console.log(gameName[0]); //output K
console.log(gameName.__proto__); // output {}

console.log(gameName.length);  // output  7
console.log(gameName.toUpperCase());   //output  KAMLESH
console.log(gameName.charAt(4));    //output  e

const newString = gameName.substring(0, 5)  //output kamle
console.log(newString);

const newStringOne = "kamlesh"   //output kamlesh
console.log(newStringOne);
 