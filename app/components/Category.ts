import { Component } from "./Component"
import { Counter } from "./Counter"
import { CardsList } from "./CardsList"
import { Card, IProduct } from "./Card"

export class Category extends Component {
  public cardList = new CardsList(this.$el)
  private category: string
  private products: IProduct[]

  constructor(public $root: Element, category: string, products: IProduct[]) {
    super()
    this.category = category
    this.products = products
    this.addClass("category-block")
    this.addClass(category)
    this.render()
    this.$root.appendChild(this.$el)
  }

  public render() {
    this.$el.innerHTML = `
            <div class="category-header">
                <span>${this.category}</span>
                <hr class="category-divider" />
            </div>
        `

    const counter = new Counter(
      this.$el,
      this.products.length,
      this.moveSlider.bind(this)
    )
    this.$el.appendChild(counter.$el)
    this.$el.appendChild(this.cardList.$el)

    this.renderCards(this.products.slice(0, 3))
  }

  private renderCards(products: IProduct[]) {
    this.deleteCards()
    products.map(product => {
      new Card(this.cardList.$el, product)
    })
  }

  private deleteCards() {
    const cardsElements = this.cardList.$el.querySelectorAll(".card")
    cardsElements.forEach(card => card.remove())
  }

  private moveSlider(currentPage: number) {
    const productsPerPage = 3
    const startIndex = productsPerPage * (currentPage - 1)
    const endIndex = startIndex + 3
    this.renderCards(this.products.slice(startIndex, endIndex))
  }
}
