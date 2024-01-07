import {createSlice} from "@reduxjs/toolkit"
import { Brands } from "../../data/ProductsData"

const INITIAL_STATE = {
    brands: [],
    selected: null
}

export const brandsSlice = createSlice(
    {
        name: "brands",
        initialState: INITIAL_STATE,
        reducers: {
            getBrands: (state, action) => {
                return {
                    ...state,
                    brands: action.payload
                }
            }, 
            selectBrand: (state, action) => {
                return {
                    ...state,
                    selected: action.payload !== state.selected ?
                    action.payload : null
                }
            },            
            setNullBrand: (state, action) => {
                return {
                   ...state,
                   selected:  null
                }
            }
        }
    })

export const { selectBrand, setNullBrand, getBrands } = brandsSlice.actions;

export default brandsSlice.reducer;