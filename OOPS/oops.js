//? - Object literal

const user = {
  username: "kamlesh",
  LoginCount: 20,
  isLoggedIn: true,
  useremail: "kamlesh@gmail.com", // Added a comma here

  getDetails: function () {
    return `User: ${this.username}, Email: ${this.useremail}`;
  },
};

// console.log(user.username); // This will correctly log "kamlesh"
// console.log(user.getDetails()); // This will call the method and log "Get User Details"

// console.log(user["username"]);

//? - Object Constructor

function User  (username, LoginCount, isLoggedIn){
    this.username = username;
    this.LoginCount = LoginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = User("kamlesh", 20, true)
const userTwo = User("CodeWithkamlesh", 20, true);
// console.log(userTwo);
console.log(userOne);