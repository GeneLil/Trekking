const colorsArray = ["rgb(42, 96, 179)", "rgb(252, 229, 52)", "rgb(83, 83, 83)"]
const type = "T-Shirt"
const productImage = "./img/tshirt.jpg"
const price = "5.00"
const currency = "\u20AC"

const renderCard = () => {
    const container = document.getElementById("main")
    const card = document.createElement("section")
    card.innerHTML = `
    <div class="card">
        <div class='cardHeader'>
            <div class='dropDown'>Size
                <span class='arrow'/>
            </div>
            <div class='colors'>${colorsArray.map(color => 
                `<span class='color' style='background-color:${color}'></span>`).join("")}
            </div>
        </div>
        <div class="cardBody">
            <img src=${productImage} />
        </div>
        <div class="cardFooter">
            <span>${type}</span>
            <span class="price">${price + currency}</span>
        </div>
    </div>`
    container.appendChild(card)
}

document.addEventListener("DOMContentLoaded", function() {
    renderCard()
})