//Documentation to follow
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

const promiseOne= new Promise((resolve,reject)=>{
    //Do an async task to resolve the promise
    //Db calls, cryptography, network 
    setTimeout(()=>{
        console.log('Async task is completed');
        resolve();
    },1000)
});

promiseOne.then(()=>{
    console.log("promise consume");
})

new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Async task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved")
});

const promisThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"chai aur code",email:"cai@gmail.com"})
    },1000)
})

promisThree.then((user)=>{
    console.log(user);
})


const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"Shafiul",password: "123"})
        }else{
            reject('ERRO:Something went wrong')
        }
    },1000)
})


promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{//finally will always execute...
    console.log("project is either resolved or rejected ")
})

const promiseFive = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:"JavaScript",password: "123"})
        }else{
            reject('ERRO:JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response)
    } catch(error){
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))