# prject related to DOM
## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code
## project 1
```javascript
const buttons = document.querySelectorAll('.button');

const body=document.querySelector('body');

buttons.forEach((button)=>{
  console.log(button);
  button.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor=e.target.id;
  })
})
```


## project 2
```javascript
const form = document.querySelector('form')

//This use case will give you the empty value...
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)/100;
    const weight = parseInt(document.querySelector('#weight').value);
    // const BMI = (weight)/(height*height);
    const result = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight";
    }
    else{
        const BMI = ((weight)/(height*height)).toFixed(2);
        result.innerHTML = BMI;
        console.log(height);
    }
})

```

## project 3
```javascript
const clock = document.getElementById('clock');


// console.log(date.toLocaleTimeString());
// clock.innerHTML=date.toLocaleTimeString();


setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
},1000)
```
