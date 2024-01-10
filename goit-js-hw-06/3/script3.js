const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listImg = document.querySelector('ul')


for (let i = 0; i < images.length; i++){

    const htmlString = `<li class="images-item"><img  src="${images[i].url}  ${images[i].alt}"  width="300" height="200"></li>`
    listImg.insertAdjacentHTML("beforeend", htmlString)

}

const imgFlex = document.querySelector('.gallery')

imgFlex.style['display'] = 'flex';
imgFlex.style.flexDirection = 'row';
imgFlex.style.justifyContent = 'space-between';
imgFlex.style.gap = "5px"
imgFlex.style.listStyleType = 'none'









    
