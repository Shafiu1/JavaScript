const myArr = [0,1,2,3,4,5]

const myHeros=['umar','ali','Muhammad']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop();
// console.log(myArr)

// myArr.unshift(10)
// console.log(myArr)
// myArr.shift();
console.log(myArr)

console.log(myArr.includes(8))
console.log(myArr.indexOf(19));
console.log(myArr.indexOf(3))

const newArr = myArr.join('+')
console.log(newArr)

//slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1)
console.log("B",myArr);
const myn2= myArr.splice(1,3);
console.log(myn2)

 console.log("C",myArr);

//Note the differences btw slice and splice. splice include the end index + the element also delete from the original array.