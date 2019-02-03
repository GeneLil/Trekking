const colorsArray = ["rgb(42, 96, 179)", "rgb(252, 229, 52)", "rgb(83, 83, 83)"]
const type = "T-Shirt"
const price = "5.00"
const currency = "\u20AC"

const headerDropDown = () => {
    const dropDown = document.createElement("section")
    const arrow = document.createElement("span")
    dropDown.classList.add("dropDown");
    arrow.classList.add("arrow")
    dropDown.innerText = "Size"
    dropDown.appendChild(arrow)
    return dropDown
}

const colors = () => {
    const colorsContainer = document.createElement("section")
    colorsContainer.classList.add ("colors")
    colorsArray.map(color => {
        const colorElement = document.createElement("span")
        colorElement.classList.add("color")
        colorElement.style.backgroundColor = color
        colorsContainer.appendChild(colorElement)
    })
    return colorsContainer
}

const cardHeader = () => {
    const cardHeader = document.createElement("section")
    cardHeader.classList.add("cardHeader")
    cardHeader.appendChild(headerDropDown())
    cardHeader.appendChild(colors())
    return cardHeader
}

const cardFooter = () => {
    const cardFooter = document.createElement("section")
    cardFooter.classList.add("cardFooter")
    const productType = document.createElement("span")
    productType.innerText = type
    const productPrice = document.createElement("span")
    productPrice.classList.add("price")
    productPrice.innerText = price + currency
    productPrice.classList.add("productPrice")
    cardFooter.appendChild(productType)
    cardFooter.appendChild(productPrice)
    return cardFooter
}

const cardBody = () => {
    const cardBody = document.createElement("section")
    cardBody.classList.add("cardBody")
    const productElement = document.createElement("img")
    productElement.src = "./img/tshirt.jpg"
    cardBody.appendChild(productElement)
    return cardBody
}

const renderCard = () => {
    const container = document.getElementById("main")
    const card = document.createElement("section")
    card.classList.add("card")
    card.appendChild(cardHeader())
    card.appendChild(cardBody())
    card.appendChild(cardFooter())
    container.appendChild(card)
}

document.addEventListener("DOMContentLoaded", function() {
    renderCard()
})