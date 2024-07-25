//variables
const accountId = 72367
let accountEmail = "Aman245@gmail.com";
let accountPassword = "36846";    /* Prefer not to use (var) because of issue in block scope and functional scope  */
accountCity = "Delhi"
//let accountState;   //Error face undefined
let accountState ="bihar"

//accountId = 2  // not allowed  Error Assignment to constant variable.
accountEmail = "kamlesh3654@gmail.com";
accountPassword = "734567";
accountCity = "Gkp";

console.log("accountId");
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);