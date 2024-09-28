export const API_URL = 'https://glen-persistent-freeze.glitch.me'

const fetchData = async (endpoint, option = {}) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, option)

        if (!response.ok) {
            throw new Error(response.status)
        }

        return await response.json()
    } catch (error) {
        console.error(`Ошибка запрос товаров: ${error}`)
    }
}

export const fetchProductsByCategory = (category) => fetchData(`/api/products/category/${category}`)

export const fetchCartItems = (ids) => fetchData(`/api/products/list/${ids.join(",")}`)

export const submitOrder = async (storeId, products) => fetchData(`/api/orders`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ storeId, products })
})

/**
 * export const fetchProductsByCategory = async (category) => {
    try {
        const response = await fetch(`${API_URL}/api/products/category/${category}`)

        if (!response.ok) {
            throw new Error(response.status)
        }
        
        const products = await response.json()

        return products
    } catch (error) {
        console.error(`Ошибка запрос товаров: ${error}`)
    }
}

export const fetchCartItems = async (ids) => {
    try {
        const response = await fetch(`${API_URL}/api/products/list/${ids.join(",")}`)

        if (!response.ok) {
            throw new Error(response.status)
        }

        return await response.json()
    } catch (error) {
        console.error(`Ошибка запрос товаров для корзины: ${error}`)
        return []
    }
}

export const submitOrder = async (storeId, products) => {
    try {
        const response = await fetch(`${API_URL}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ storeId, products })
        })

        if (!response.ok) {
            throw new Error(response.status)
        }
        
        return await response.json()
    } catch (error) {
        console.error(`Ошибка оформления заказа: ${error}`)
    }
}
 */