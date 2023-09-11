export const addItemToCart = (cartItems, product) => {
    const productInCar = cartItems.find((item)=> {
        return item.id === product.id
    })

    if (productInCar) {
        return cartItems.map((item)=>{
            return item.id === product.id ?
            {
                ...item,
                quantity: item.quantity +1
            } 
            : item
        })
    } else {
        return [
            ...cartItems,
            {
                ...product,
                quantity: 1
            }
        ]
    }
}

export const removeItemFromCart = (cartItems, productID) => {
    const productToRemove = cartItems.find((item) => item.id === productID)

    return cartItems.filter((item) => item.id !== productToRemove.id )
}

export const removeItemUnitFromCart = (cartItems, productID) => {
    const productToRemove = cartItems.find((item) => item.id === productID)

    if (productToRemove.quantity > 1) {
        return cartItems.map((item)=>{
            return item.id === productToRemove.id ?
            {
                ...item,
                quantity: item.quantity - 1
            } 
            : item
        })
    } else {
        removeItemFromCart(cartItems, productID)
    }
}

