// const coding = ['js','ruby','java','python']



// const values = coding.forEach((item)=>{//for each loop never return any value...
//     console.log(item);
// })

// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10]

const newArray= myNums.filter((item)=>{
    return (item>5);
})

console.log(newArray);