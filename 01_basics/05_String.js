Name="Shafiul";
repo='xyz';
console.log(`Hello my name is ${Name} and my repo count is ${repo}`);

const gameName=new String('Shafiul');

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'))

console.log(gameName.substring(2,4));

const min=10;
const max=20;

console.log(Math.floor((Math.random()*(max-min+1))+min))