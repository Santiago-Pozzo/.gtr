import { createSlice } from "@reduxjs/toolkit";
import { ProductsData, ProductsDataOrderByBrand, TotalApiProducts, TotalProducts, apiProductsData, apiProductsDataOrderByBrand, products } from "../../data/ProductsData";

const INITIAL_STATE = {
    products: apiProductsData,
    productsByBrand: apiProductsDataOrderByBrand,
    totalProducts: TotalApiProducts,
}

export const productSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {

        getProducts: state => {
            return state;
        }
    }
})

export const { getProducts } = productSlice.actions

export default productSlice.reducer