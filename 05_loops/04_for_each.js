const coding = ['js','ruby','java','python']


// coding.forEach((value)=>{
//     console.log(value);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        language: "javascript",
        languageFileName:"js"
    },
    {
        language: "Python",
        languageFileName:"py"
    },
    {
        language: "C plus plus",
        languageFileName:"cpp"
    }
]

myCoding.forEach((item,index,arr)=>{
    console.log(item.language);
})