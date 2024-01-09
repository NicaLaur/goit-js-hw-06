const listItems = document.querySelectorAll('.item')

console.log(  `Number of categories: ${listItems.length}`)

listItems.forEach((item, index) => {
    const titleElement = item.querySelector('h2')
    const listElements = item.querySelectorAll('ul li')

    console.log(`Category: ${titleElement.textContent}`)

    console.log(` Elements: ${listElements.length}`)
        
    

    
})


    

    

