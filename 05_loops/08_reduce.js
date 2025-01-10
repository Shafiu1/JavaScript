const myNums= [1,2,3,4];

const myTotal = myNums.reduce((acc,currval)=>{
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc+currval
},0)

// console.log(myTotal)

const shoppingCart = [
    { 
        itemName: "js course", 
        price: 2999
    },
    { 
        itemName: "Python", 
        price: 299
    },
    { 
        itemName: "ML", 
        price: 999
    },
    { 
        itemName: "Competitive programming", 
        price: 999
    },
    { 
        itemName: "Redux", 
        price: 1009
    }
]

const priceToPay = shoppingCart.reduce((acc,item)=>{
    return acc+item.price
},0)

console.log(priceToPay);