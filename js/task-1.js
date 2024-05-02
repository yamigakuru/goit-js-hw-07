const categoriesList = document.querySelectorAll("#categories .item")

console.log(`Numbers of categories: ${categoriesList.length}`)

categoriesList.forEach(category => {
    const categoryName = category.querySelector("h2").textContent
    const categoryItem = category.querySelectorAll("li")

    console.log(`Category: ${categoryName}`)
    console.log(`Elements: ${categoryItem.length}`)
})