const user={
    username:"Shafiu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);//This refer to the current context..
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam";
// user.welcomeMessage();
// console.log(this);


// function jikir(){
//     console.log(this);
// }

// jikir()

// const jikir= () =>{
//     console.log(this);
// }

// jikir()

// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"hitesh"})
//curly braces dile return dite hobe jodi bracket use kori thahole return dewa jai na..//video no 23 chai aur code..

console.log(addTwo(3,4));

const myArray = [2,5,3,7,8];

myArray.forEach((val)=>(console.log(`value is ${val+4}`)))