import {createSlice} from "@reduxjs/toolkit"
import { addItemToCart, removeItemFromCart, removeItemUnitFromCart } from "./CartFunctions"

const INITIAL_STATE = {
    cartItems: [],
    active: false,
    total: 0
}

const cartSlice = createSlice({
    name: "Cart",
    initialState: INITIAL_STATE,
    reducers: {
        
        addToCart: (state, action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        },

        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        },

        removeItemUnit: (state, action) => {
            return {
                ...state,
                cartItems: removeItemUnitFromCart(state.cartItems, action.payload)
            }
        },

        clearCart: (state)=>{
            return {
                ...state,
                cartItems: []
            }
        },

        toggleCart: (state)=>{
            return {
                ...state,
                active: !state.active 
            }
        }, 

        closeCart: (state) => {
            return {
                ...state,
                active: false
            }
        },

        setTotal: (state, action) => {
            return {
                ...state,
                total: action.payload
            }
        },
    }
})

export const {
    addToCart,
    removeFromCart,
    removeItemUnit,
    clearCart,
    toggleCart, 
    closeCart, 
    setTotal
} = cartSlice.actions;

export default cartSlice.reducer;