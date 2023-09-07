import {createSlice} from "@reduxjs/toolkit"
import { Brands } from "../../data/ProductsData"

const INITIAL_STATE = {
    brands: Brands,
    selected: null
}

export const brandsSlice = createSlice(
    {
        name: "brands",
        initialState: INITIAL_STATE,
        reducers: {
            selectBrand: (state, action) => {
                return {
                    ...state,
                    selected: action.payload
                }
            }            
        }
    }
)

export const { selectBrand } = brandsSlice.actions;

export default brandsSlice.reducer;