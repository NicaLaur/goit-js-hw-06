const inputText = document.querySelector("#validation-input");

inputText.addEventListener('blur', function () {
    
    const textValue = inputText.value.trim();
    const minLength = inputText.getAttribute('data-length')
    
    if(textValue.length < minLength) {
      inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    } else {
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    }

})