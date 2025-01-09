//for of

// [" "," "," "," "," "," "," "," ",""];
// [{},{}]

const arr = [1,2,3,4,5];
for(const value of arr){
    console.log(value);
}

const greeting ="hello world";

for(const greet of greeting){
    console.log(greet)
}

//Maps

const map = new Map();
map.set('CSE',"Computer Science and Engineering");
map.set('ME',"Mechanical Engineering");
map.set('EEE',"Electrical and Electronic Engineering");
map.set('ETE',"Electrical and Telecommunication Engineering");
// map.set('ETE',"Electrical and Telecommunication");

console.log(map);