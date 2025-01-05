// let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());

// // let myCreateDate=new Date(2023,0,23,5,4,20);
// let myCreateDate=new Date("2-12-2023");

// console.log(myCreateDate.toLocaleString())

// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone:''
})