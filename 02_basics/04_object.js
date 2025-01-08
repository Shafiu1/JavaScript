// const tinderUser=new Object();
// console.log(tinderUser)
const tinderUser={};

tinderUser.id="123abc"
tinderUser.name="Shafiul"
tinderUser.isLoggedIn=false;

const regularUser={
    emainl:"shaf@gmail.com",
    fullname:{
        userfullname:{
            firstName:"shafiul",
            lastName:"Alam"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1, ...obj2}
console.log(obj3)
// console.log(obj3===obj1)

//while data are fetch from the database...
const users = [
    {
        id:1,
        email:"Shaf@gmail.com"
    },{

    }
]
users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));