// const user = {
//     username : "Shafiul",
//     loginCount : 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`username:${this.username}`);
//         console.log(this);
//     }
// }

// // console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// //construction function

// // const promiseOne = new Promise();//example of construction functions
// const date = new Date();

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
}

const userOne = new User("Shafiul", 12, true);
const userTwo = new User("chai aur code", 12, true);

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);