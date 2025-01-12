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