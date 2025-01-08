//Immediately Invoked Function Expressions (IIFE)

(function faith(){
    console.log(`DB CONNECTED`);
})();//here semicolon is mandotory for further code
//resolves global scope variable polution
//()()
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Shafiul");