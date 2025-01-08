function calculateCartPrice(n1,n2,...num1){
    return num1;
}

// console.log(calculateCartPrice(2,3,2,4,6));

const user = {
    username:"shafiul",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
    username:"Sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))