// let a =10;
// const b =20;
// var c= 30;
// console.log(a,b,c);

/*Closure*/
function one(){
    const username = "Shafiul";
    function two(){
        const website = "youtube";
        console.log(username);
    }
    console.log(username)
    console.log("I am first");
    two();
}

one()

if(true){
    const username = "Shafiul";
    if(username=="Shafiul"){
        const website = "youtube"
        // console.log(username+website)
    }
    // console.log(long(website))
}

// console.log(username)


//+++++++++++++++Interesting+++++++++++++
function addone(value){
    return value+1;
}
addone(5)

//Expression
const addTwo = function(num){
    return num+2;
}