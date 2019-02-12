export class Component {
  public $el = document.createElement("div")
  public addClass = (className: string) => {
    this.$el.classList.add(className)
  }
}
