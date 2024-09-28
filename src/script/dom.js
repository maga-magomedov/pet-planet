import { API_URL } from "./api"

export const createOrderMessage = id => {
    const orderMessageElement = document.createElement('div')
    orderMessageElement.classList.add("order-message")

    const orderMessageText = document.createElement('p')
    orderMessageText.classList.add("order-message__text")
    orderMessageText.textContent = `Ваш заказ оформлен, номер ${id}. Вы можете его забрать завтра после 12:00`

    const orderMessageCloseButton = document.createElement('button')
    orderMessageCloseButton.classList.add("order-message__close-button")
    orderMessageCloseButton.textContent = "Закрыть"

    orderMessageElement.append(orderMessageText, orderMessageCloseButton)

    orderMessageCloseButton.addEventListener('click', () => {
        orderMessageElement.remove()
    })

    return orderMessageElement
}

export const createProductCart = (product) => {
    const productCard = document.createElement('li')
    productCard.classList.add('store__item')
    productCard.innerHTML = `
        <article class="store__product product">
            <img class="store__images" src="${API_URL}${product.photoUrl}" alt="${product.name}">
            <h3 class="product__title">${product.name}</h3>
            <p class="product__price">${product.price}&nbsp;₽</p>
            <button class="btn btn_purple product__btn-add-cart" data-id="${product.id}">Заказать</button>
        </article>
    `
    return productCard
}

export const renderProducts = (products, productList) => {
    productList.textContent = ''
    products.forEach((product) => {
        const productCart = createProductCart(product)

        productList.append(productCart)
    })
}

export const renderCartItems = async (cartItemsList, cartItems, products) => {
    cartItemsList.textContent = ''

    products.forEach(({ id, photoUrl, name, price }) => {
        const cartItem = cartItems.find(item => item.id === id)

        if (!cartItem) {
            return
        }

        const listItem = document.createElement('li')
        listItem.classList.add('modal__cart-item')
        listItem.innerHTML = `
            <img class="modal__cart-item-image" src="${API_URL}${photoUrl}" alt="${name}">
            <h3 class="modal__cart-item-title">${name}</h3>

            <div class="modal__cart-item-count">
                <button class="modal__btn modal__minus" data-id=${id}>-</button>
                <span class="modal__count">${cartItem.count}</span>
                <button class="modal__btn modal__plus" data-id=${id}>+</button>
            </div>

            <p class="modal__cart-item-price">${price * cartItem.count}&nbsp;₽</p>
        `
        cartItemsList.append(listItem)
    })
}
