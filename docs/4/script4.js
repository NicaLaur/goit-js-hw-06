let counterValue = document.querySelector("#value")
let value = 0;
counterValue.textContent = value;

const decrementButton = document.querySelector('[data-action="decrement"]')
const incrementtButton = document.querySelector('[data-action="increment"]')

decrementButton.addEventListener('click', function () {
    value--;
    counterValue.textContent = value;

})

incrementtButton.addEventListener('click', function () {
    value++;
    counterValue.textContent = value;

})