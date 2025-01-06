//sigleton
// Object.create
//object literals

const mySym=Symbol('key1');
const JsUser={
    name:"Shafiul",
    "full name":"Shafiul Alam",
    [mySym]: 'mykey1',
    age:23,
    location: "CTG",
    email: "shaf@gmail.com",
    isLoggedIn: false,
    lastLoginDays:['MOnday','saturday']
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym]);

JsUser.email='shafiul@gmail.com'

// Object.freeze(JsUser)

JsUser.email="chatgpt@gmail.com";
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Hello Js user, ${this["full name"]}`);
    return "shafiul"
}

JsUser.greeting();
