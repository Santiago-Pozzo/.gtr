import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    active: false
}

const overlaySlice = createSlice({
    name: "Overlay",
    initialState: INITIAL_STATE,
    reducers: {
        
        toggleOverlay: (state)=>{
            return {
                ...state,
                active: !state.active 
            }
        }, 

        closeOverlay: (state)=>{
            return {
                ...state,
                active: false
            }
        } 
    }
})

export const {
    toggleOverlay, 
    closeOverlay
} = overlaySlice.actions;

export default overlaySlice.reducer;