const spanName = document.getElementById("name-output");
let val = "Anonymous";


const inputName = document.querySelector('#name-input');


inputName.addEventListener('input', function () {
   
    const inputValue = inputName.value
    
if (inputValue === '') {
    spanName.textContent = val
} else {
    spanName.textContent = inputValue;
}

})







