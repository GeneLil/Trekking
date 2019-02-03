interface IProduct {
    colors: string[]
    type: string
    productImage: string
    price: string
    currency: string
}

const tShirt: IProduct = {
    colors: ["rgb(42, 96, 179)", "rgb(252, 229, 52)", "rgb(83, 83, 83)"],
    type: "T-Shirt",
    productImage: "./img/tshirt.jpg",
    price: "5.00",
    currency: "\u20AC"
}

const backPack: IProduct = {
    colors: ["rgb(83, 83, 83)"],
    type: "Backpack",
    productImage: "./img/backpack.jpg",
    price: "58.00",
    currency: "\u20AC"
}

const hoodie: IProduct = {
    colors: ["rgb(140, 140, 140)", "rgb(42, 96, 179)"],
    type: "Backpack",
    productImage: "./img/hoodie.jpg",
    price: "120.00",
    currency: "\u20AC"
}

const products = [tShirt, backPack, hoodie]

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

document.addEventListener("DOMContentLoaded", function() {
    products.map(product => renderCard(product))
})