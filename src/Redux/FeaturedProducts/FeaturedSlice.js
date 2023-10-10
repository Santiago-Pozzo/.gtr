import { createSlice } from "@reduxjs/toolkit";

import {pickRandomProducts} from "../../components/Featured/randomFeatured"

const INITIAL_STATE = {
    featured: pickRandomProducts(6)
}

export const featuredSlice = createSlice({
    name: "featured",
    initialState: INITIAL_STATE,
    reducers: {
        randomFeatured: (state) => {
            return state
        }
    }
})

export const {randomFeatured} = featuredSlice.actions;

export default featuredSlice.reducer