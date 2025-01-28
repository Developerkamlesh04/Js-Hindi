// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     //   return (this.password = "2323443");
//     return `${this.password}123`; //this.password = "1234"
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}123`; //this.username = "kamlesh"
//   }
// }

// const userOne = new User("kamlesh", "kamlesh245@gmail.com", "1234");

// console.log(userOne.encryptPassword());
// console.log(userOne.changeUsername());

//Behind the scene

function Users(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
} 

Users.prototype.encryptPassword = function () {
  return `${this.password}123`; //this.password = "1234"
};
Users.prototype.changeUsername = function () {
  return `${this.username}123`; //this.password = "1234"
};

const code = new Users("aman", "aman@gmail.com", "63452");

console.log(code.encryptPassword());
console.log(code.changeUsername());
