import { Category } from "./Category"
import { loadedProducts } from "../main"

export class Controls {
  public categoryCheckBoxes = document.querySelectorAll(".category-check")
  public categoryButton = document.querySelector("#categories-button")

  constructor(public $main: Element) {
    this.addEventsListener()
  }

  addEventsListener() {
    const { categoryCheckBoxes } = this
    for (let i = 0; i < categoryCheckBoxes.length; i++) {
      if (categoryCheckBoxes[i]) {
        categoryCheckBoxes[i].addEventListener("change", (e: any) => {
          this.onCategoryCheck(e)
        })
      }
    }
    if (this.categoryButton) {
      this.categoryButton.addEventListener("click", () =>
        this.onAllCategoriesCheck()
      )
    }
  }

  onAllCategoriesCheck() {
    const { $main, categoryCheckBoxes } = this
    for (let i = 0; i < categoryCheckBoxes.length; i++) {
      if (!(<HTMLInputElement>categoryCheckBoxes[i]).checked) {
        ;(<HTMLInputElement>categoryCheckBoxes[i]).checked = true
        const category = categoryCheckBoxes[i].getAttribute("data-category")!
        new Category($main, category, this.filterProducts(category))
      }
    }
  }

  filterProducts(category: string) {
    return loadedProducts.filter(
      product => product.type.toLowerCase() === category
    )
  }

  onCategoryCheck(e: any) {
    const selectedCategory = e.target.dataset.category
    const filteredProducts = this.filterProducts(selectedCategory)
    if (e.target.checked) {
      new Category(this.$main, selectedCategory, filteredProducts)
    } else {
      this.$main.removeChild(
        document.getElementsByClassName(selectedCategory)[0]
      )
    }
  }
}
