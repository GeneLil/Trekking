import { Component } from "./Component"

export interface IProduct {
  colors: string[]
  type: string
  productImage: string
  price: string
  currency: string
}

export class Card extends Component {
  constructor(public $root: Element, product?: IProduct) {
    super()
    this.addClass("card")
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
                    ${product.colors
                      .map(
                        color =>
                          `<span class='color' style='background-color:${color}'></span>`
                      )
                      .join("")}
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
