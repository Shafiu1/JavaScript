//generate a random color

const randomColor = function(){
    const hex="0123456789ABCDEF"
    let Color ='#'
    for(let i=0;i<6;i++){
        randomNumber = Math.floor(Math.random()*16);
        Color+=hex[randomNumber]
    }
    return Color
}
const Body = document.querySelector('body')
let intervalId;
document.querySelector('#start').addEventListener('click',()=>{
    intervalId=setInterval(changeColor,1000)
})

document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId=null;
})

function changeColor(){
    const bgcolor=randomColor();
    Body.style.backgroundColor=bgcolor;
}
