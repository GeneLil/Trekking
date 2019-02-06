let mainContainer: HTMLElement | null

interface IProduct {
    colors: string[]
    type: string
    productImage: string
    price: string
    currency: string
}

const renderCard = (product: IProduct) => {
    const card = document.createElement("div")
    const cardsWrapper = document.querySelector(".cards-container")
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
        </div>
       `
    if (cardsWrapper) {
        cardsWrapper.appendChild(card)
    }
}

const getProducts = () => new Promise((resolve, reject) => {
        const productsQuery = new XMLHttpRequest()
        productsQuery.open("GET", "products.json", true)
        productsQuery.send()
        productsQuery.onreadystatechange = () => {
            if (productsQuery.readyState !== 4) {
                return
            }
            if (productsQuery.status !== 200) {
                reject(productsQuery.statusText)
            } else {
                resolve(productsQuery.responseText)
            }
        }
    })

const renderCategorySelectionBlock = () => {
    const wrapper = document.createElement("div")
    wrapper.classList.add("categorySelectionWrapper")
    wrapper.innerHTML = `
        <div class="checkboxes">          
            <input id="menCategory" type="checkbox" />
            <label for="menCategory">T-Shirt</label>           
            <input id="womenCategory" type="checkbox" />
            <label for="womenCategory">Backpack</label>
            <input id="childCategory" type="checkbox" />
            <label for="childCategory">Hoodie</label>
        </div>
        <button class="categories-button">See all products</button>
    `
    if (mainContainer) {
        mainContainer.appendChild(wrapper)
    }
}

const renderCategoryBlock = () => {
    const wrapper = document.createElement("div")
    wrapper.classList.add("category-block")
    wrapper.innerHTML = `
        <span>T-Shirt</span>
        <hr class="category-divider" />
    `
    if (mainContainer) {
        mainContainer.appendChild(wrapper)
    }
}

const renderCardsContainer = () => {
    const wrapper = document.createElement("div")
    wrapper.classList.add("cards-container")
    if (mainContainer) {
        mainContainer.appendChild(wrapper)
    }
}

const renderCounter = () => {
    const wrapper = document.createElement("div")
    wrapper.classList.add("counter-block")
    wrapper.innerHTML = `
        <div class="numbers">1 / 5</div>
        <div class="arrows">
            <span class="counter-arrow left"></span>
            <span class="counter-arrow right"></span>
        </div>
    `
    if (mainContainer) {
        mainContainer.appendChild(wrapper)
    }
}

document.addEventListener("DOMContentLoaded",  () => {
    mainContainer = document.getElementById("main")

    renderCategorySelectionBlock()
    renderCategoryBlock()
    renderCounter()
    renderCardsContainer()

    getProducts().then((response: any) => {
        const products: IProduct[] = JSON.parse(response)
        products.map(renderCard)
    }).catch(e => console.log(e.message))
})