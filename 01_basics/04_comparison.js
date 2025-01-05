// console.log(2>1);
// console.log(2>=1)
// console.log(2<1);

console.log("2">1);
console.log(null>=0);
console.log(null==0);
console.log(null>0);

console.log("2"===2);//strict conversion


//Primitive Datatype
//7 types: String, Number, Boolean, null, undefined, symbol, BigInt

// Dynamically type language..

//Reference( Non Primitive)

//Array, objects, Functions,

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);
console.log(id);

const heros=['abu bakar','umor faruk','ali'];

let myObj={
    name: 'shafiul',
    age: '23'
}

const myFunction=function(){
    console.log('Hello world');
}

// console.log(typeof heros);

//Stack(primitive) and Heap(NOn-primitive)

let myname= "Shafiul";
let lastName=myname;
lastName="Rasel";
console.log(myname);
console.log(lastName);

let UserOne ={
    email:"user@google.com",
    upi: "user#ybl"
}

let uesrTwo=UserOne;
UserOne.email="two@google.com";

console.log(UserOne.email);
