import {createSlice} from "@reduxjs/toolkit"
import {Categories} from "../../data/Categories"

const INITIAL_STATE = {
    categories: Categories,
    selected: "Ver todo"
}

export const categoriesSlice = createSlice(
    {
        name: "categories",
        initialState: INITIAL_STATE,
        reducers: {
            selectCategory: (state, action) => {
                return {
                    ...state,
                    selected: action.payload 
                }
            }            
        }
    }
)

export const { selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;