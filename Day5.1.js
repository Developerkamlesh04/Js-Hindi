// String
const name = "Kamlesh"
const repoCount =50

//console.log(name + repoCount +  "value");
console.log( `hello my name is ${name} and my repo count is ${repoCount}`);

//String interpolation (``) symbol

const gameName = new String (`Kamlesh`) //console output gameName check

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));

const newString = gameName.substring(0, 5)
console.log(newString);

const newStringOne = "    kamlesh    "
console.log(newStringOne);
