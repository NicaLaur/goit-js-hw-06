const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text')



inputRange.addEventListener('input', function () {
    
    const valRange = inputRange.value
    textSpan.style.fontSize = valRange + 'px'
})
