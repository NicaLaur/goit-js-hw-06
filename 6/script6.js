const inputText = document.querySelector("#validation-input");

inputText.addEventListener('blur', function () {
    
    const textValue = inputText.value.trim();
    const correctLength = inputText.getAttribute('data-length')
    
    if(textValue.length == correctLength) {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    } else {
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }

})