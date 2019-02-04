interface IProduct {
    colors: string[]
    type: string
    productImage: string
    price: string
    currency: string
}

const renderCard = (product: IProduct) => {
    const container = document.getElementById("main")
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
        <div class='cardHeader'>
            <div class='dropDown'>Size
                <span class='arrow'/>
            </div>
            <div class='colors'>${product.colors.map(color => 
                `<span class='color' style='background-color:${color}'></span>`).join("")}
            </div>
        </div>
        <div class="cardBody">
            <img src=${product.productImage} />
        </div>
        <div class="cardFooter">
            <span>${product.type}</span>
            <span class="price">${product.price + product.currency}</span>
        </div>`
    container.appendChild(card)
}

const getProducts = (): void => {
    const productsQuery = new XMLHttpRequest()
    productsQuery.open("GET", "products.json", true)
    productsQuery.send()

    productsQuery.onreadystatechange = () => {
        if (productsQuery.readyState !== 4) {
            return
        }
        const products: IProduct[] = JSON.parse(productsQuery.responseText)
        products.map(renderCard)
    }
}

document.addEventListener("DOMContentLoaded",  () => {
    getProducts()
})