import { Component } from "./Component"

export class CardsList extends Component {
  constructor(public $root: Element) {
    super()
    this.addClass("cards-container")
    this.$root.appendChild(this.$el)
  }
}
