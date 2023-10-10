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
        },
        
        openOverlay: (state)=>{
            return {
                ...state,
                active: true
            }
        } 
    }
})

export const {
    toggleOverlay, 
    closeOverlay,
    openOverlay,
} = overlaySlice.actions;

export default overlaySlice.reducer;