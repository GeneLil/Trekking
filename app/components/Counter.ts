import { Component } from "./Component"

export class Counter extends Component {
  public $el = document.createElement("div")
  private maxPages: number
  private currentPage: number

  private moveSlider: (currentPage: number) => void

  constructor(
    public $root: Element,
    elementsNumber: number,
    moveSlider: (currentPage: number) => void
  ) {
    super()
    this.addClass("counter-block")
    this.currentPage = 1
    this.moveSlider = moveSlider
    this.maxPages = Math.ceil(elementsNumber / 3)
    this.render()
    this.$root.appendChild(this.$el)
    this.addEventListener()
  }

  addEventListener() {
    const leftArrow = this.$root.querySelector(".left")!
    const rightArrow = this.$root.querySelector(".right")!
    leftArrow.addEventListener("click", this.onLeftArrowClick.bind(this))
    rightArrow.addEventListener("click", this.onRightArrowClick.bind(this))
  }

  private onLeftArrowClick() {
    if (this.currentPage > 1) {
      this.currentPage--
      this.moveSlider(this.currentPage)
      this.updateNumbers()
    }
  }

  private onRightArrowClick() {
    if (this.currentPage < this.maxPages) {
      this.currentPage++
      this.moveSlider(this.currentPage)
      this.updateNumbers()
    }
  }

  updateNumbers() {
    const numbersBlock = this.$root.querySelector(".numbers")!
    numbersBlock.innerHTML = `${this.currentPage} / ${this.maxPages}`
  }

  public render() {
    this.$el.innerHTML = `
            <div class="numbers">1 / ${this.maxPages}</div>
            <div class="arrows">
                <span class="counter-arrow left"></span>
                <span class="counter-arrow right"></span>
            </div>
        `
  }
}
