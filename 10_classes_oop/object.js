function mulitpleBy5(num){
    return num*5;
}

mulitpleBy5.power = 2;

console.log(mulitpleBy5(5));
console.log(mulitpleBy5.power);
console.log(mulitpleBy5.prototype);

//So, function can also be interpretated as object.

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser("chai", 25);
const tea =  new createUser("tea", 250);

chai.printMe();
chai.increment();
chai.printMe();
console.log(chai);