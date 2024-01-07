import { createSlice } from "@reduxjs/toolkit";
//import { ProductsData, ProductsDataOrderByBrand, TotalApiProducts, TotalProducts, apiProductsData, apiProductsDataOrderByBrand, products } from "../../data/ProductsData";
import { fetchProductsData } from "./productsFunctions";

//const { apiProductsData, apiProductsDataOrderByBrand, TotalApiProducts, apiProducts } = await fetchProductsData();

const INITIAL_STATE = {
    products: [],
    productsByBrand: [],
    totalProducts: [],
    api_prods: [],
    loaded: false,
    //products: apiProductsData,
    //productsByBrand: apiProductsDataOrderByBrand,
    //totalProducts: TotalApiProducts,
    //api_prods: apiProducts
}

export const productSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: (state, action) => {
            
            return {
                ...state,
                products: action.payload.products,
                productsByBrand: action.payload.productsBybrand,
                totalProducts: action.payload.totalProducts,
                api_prods: action.payload.api_prods,
                loaded: true
             }
        }
    }
})

export const { getProducts } = productSlice.actions

export default productSlice.reducer