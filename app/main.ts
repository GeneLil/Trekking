import { IProduct } from "./components/Card"
import { Controls } from "./components/Controls"
import "../Styles/index.css"

export let loadedProducts: IProduct[] = []

const getProducts = () =>
  new Promise<string>((resolve, reject) => {
    const productsRequest = new XMLHttpRequest()

    productsRequest.open("GET", "products.json", true)
    productsRequest.send()

    productsRequest.onreadystatechange = () => {
      if (productsRequest.readyState !== 4) {
        return
      }

      if (productsRequest.status !== 200) reject(productsRequest.statusText)
      else resolve(productsRequest.responseText)
    }
  })

document.addEventListener("DOMContentLoaded", async () => {
  const $main = document.querySelector("main")
  if (!$main) {
    throw Error("В разметке нет элемента <main>")
  }
  try {
    const response = await getProducts()
    loadedProducts = JSON.parse(response)
    new Controls($main)
  } catch (error) {
    console.log(error.message)
  }
})
