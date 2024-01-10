function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const valBackgroud = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color')

buttonChange.addEventListener('click', function () {
    
    const randomColor = getRandomHexColor()
    document.body.style.backgroundColor = randomColor;
    valBackgroud.textContent = randomColor;
})
