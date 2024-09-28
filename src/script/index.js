import { fetchProductsByCategory } from "./api"
import { addToCart } from "./cart"
import { renderProducts } from "./dom"

const init = () => {
    const buttons = document.querySelectorAll('.store__category-button')
    const productList = document.querySelector('.store__list')

    const changeCategory = async ({ target }) => {
        const category = target.textContent

        buttons.forEach((button) => {
            button.classList.remove('store__category-button_active')
        })

        target.classList.add('store__category-button_active')
        const products = await fetchProductsByCategory(category)
        renderProducts(products, productList)
    }

    buttons.forEach((button) => {
        button.addEventListener('click', changeCategory)

        if (button.classList.contains('store__category-button_active')) {
            changeCategory({ target: button })
        }
    })

    productList.addEventListener('click', ({ target }) => {
        if (target.closest('.product__btn-add-cart')) {
            const productId = target.dataset.id
            // const productId = parseInt(target.dataset.id, 10)
            // const productCard = target.closest('.store__product')
            // const productName = productCard.querySelector('.product__title').textContent

            addToCart(productId)
        }
    })
}

init()

// git status
// git add .