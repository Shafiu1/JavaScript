let myName = "shafiul      "



console.log(myName.length)

let myHeros = ['thor','spiderman'];

let heroPower = {
    thor: "hammer",
    spiderman:"slind",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object .prototype.hitesh = function(){
    console.log(`hitesh is present in all object`)
}
Array.prototype.heyHitesh = function(){
    console.log(`hitesh says hello`);
}
// heroPower.hitesh();
// myHeros.hitesh();

myHeros.heyHitesh();
// heroPower.heyHitesh();


//inheritance
const User ={
    name: "chai",
    email:"chai@gmail.com"

}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User;

console.log(Teacher.email);

//modern Structure
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is:${this.trim().length}`)
}

console.log(anotherUsername.trueLength());