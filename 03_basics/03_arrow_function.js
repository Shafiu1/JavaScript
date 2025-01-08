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

const jikir= () =>{
    console.log(this);
}

jikir()