let mainContainer: HTMLElement | null

interface IProduct {
    colors: string[]
    type: string
    productImage: string
    price: string
    currency: string
}

class Card {

    public $el = document.createElement('div')

    constructor(public $root: Element, product?: IProduct) {

        this.$el.classList.add('card')

        if (product) this.render(product)

        this.$root.appendChild(this.$el)

    }

    public render(product: IProduct) {

        this.$el.innerHTML = `      
            <div class='cardHeader'>
                <div class='dropDown'>Size
                    <span class='arrow'/>
                </div>
                <div class='colors'>
                    ${product.colors.map(color => `<span class='color' style='background-color:${color}'></span>`).join('')}
                </div>
            </div>
            <div class="cardBody">
                <img src=${product.productImage} />
            </div>
            <div class="cardFooter">
                <span>${product.type}</span>
                <span class="price">${product.price}${product.currency}</span>
            </div>
        `

    }

}

const getProducts = () => new Promise<string>((resolve, reject) => {

    const productsRequest = new XMLHttpRequest

    productsRequest.open('GET', 'products.json', true)

    productsRequest.send()

    productsRequest.onreadystatechange = () => {

        if (productsRequest.readyState !== 4) { return }

        if (productsRequest.status !== 200) reject(productsRequest.statusText)

        else resolve(productsRequest.responseText)

    }

})


class Category {

    public $el = document.createElement('div')

    public counter = new Counter(this.$el)

    public cards = new CardsList(this.$el)

    constructor(public $root: Element) {

        this.$el.classList.add('category-block')

        this.render()

        this.$root.appendChild(this.$el)

    }

    public render() {

        this.$el.innerHTML = `
            <div class="category-header">
                <span>T-Shirt</span>
                <hr class="category-divider" />
            </div>
        `

        this.$el.appendChild(this.counter.$el)

        this.$el.appendChild(this.cards.$el)

    }

}

class Counter {

    public $el = document.createElement('div')

    constructor(public $root: Element) {

        this.$el.classList.add('counter-block')

        this.render()

        this.$root.appendChild(this.$el)

    }

    public render() {

        this.$el.innerHTML = `
            <div class="numbers">1 / 5</div>
            <div class="arrows">
                <span class="counter-arrow left"></span>
                <span class="counter-arrow right"></span>
            </div>
        `

    }

}

class CardsList {

    public $el = document.createElement('div')

    constructor(public $root: Element) {

        this.$el.classList.add('cards-container')

        this.$root.appendChild(this.$el)

    }

}

document.addEventListener('DOMContentLoaded', async () => {

    const $main = document.querySelector('main')

    if (!$main) throw Error('В разметке нет элемента <main>')

    const category = new Category($main)

    try {

        const response = await getProducts()
        
        const products: IProduct[] = JSON.parse(response)
        
        products.map(product => new Card(category.cards.$el, product))
    
    } catch(error) { console.log(error.message) }

})