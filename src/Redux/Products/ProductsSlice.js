import { createSlice } from "@reduxjs/toolkit";
import { ProductsData, ProductsDataOrderByBrand, TotalProducts, products } from "../../data/ProductsData";

const INITIAL_STATE = {
    products: ProductsData,
    productsByBrand: ProductsDataOrderByBrand,
    totalProducts: TotalProducts,
}

export const productSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        //Esta función es un "como si" me trajera los productos de algún lado.
        //Si en el futuro me traigo los productos de una API (por ejemplo), tengo que armar la lógica acá
        getProducts: state => {
            return state;
        }
    }
})

export const {getProducts} = productSlice.actions

export default productSlice.reducer