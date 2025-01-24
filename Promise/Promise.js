const promiseOne = new Promise((resolve, reject) => {
  // Do something here async task
  // DB Calls, call APIs, network calls, cryptography
  setTimeout(function () {
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise One Resolved");
});

//? Method 2

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Promise Two Resolved");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Promise Two Resolved");
});

//? Method 3

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      name: "Kamlesh",
      age: 20,
      email: "kamlesh@gmail.com",
    });
  }, 3000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//? Method 4

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        name: "Kamlesh",
        age: 20,
        email: "kamlesh@gmail.com",
      });
    } else {
      reject("Something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {     // chaining
    console.log(name);
  })
  .catch((error) => {     // error
    console.log(error);
  }).finally(() => {
    console.log(" finally this will run always resolve / reject");
  });

//? Method 5

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({
                username: "javascript",
                password: "1234",
            });
        } else {
            reject("ERROR: JS Went Rong");
        }
  },5000)
})

async function loginUser() {
    try {
            const prsponse = await promiseFive;
    console.log(prsponse);  
    } catch (error) {
        console.log(error);
    }
}

loginUser();

// async method with promise

async function getApi() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log("E: error");
    }
}

getApi();

// promise same method with async await

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);  
    })
    .catch((error) => {
        console.log("E: error");
    });
