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
```cpp
#include<bits/stdc++.h>
cout<<"CUET";
```