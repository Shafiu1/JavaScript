//Nullish Coalescing operator (??): null undefined

let val1;
// val1 =5 ?? 10
// val1= null ?? 10

// val1=undefined ?? 10

val1= null ?? 10 ?? 20;



console.log(val1);


//Terniary Operator

// condition ? true : false;

const iceTeaPrice = 100;
iceTeaPrice >=80 ?console.log("greater than 80"):console.log("less than 80");