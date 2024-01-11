const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElemnt = document.querySelector('ul')

ingredients.forEach(function (element) {
    const list = document.createElement('li');
    list.textContent = element;
    list.classList.add('item');
    listElemnt.appendChild(list)
})


