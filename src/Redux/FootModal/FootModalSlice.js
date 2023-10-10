import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    active: false,
    selectedProduct: {},
}

const footModalSlice = createSlice({
    name: "Modal",
    initialState: INITIAL_STATE,
    reducers: {

        setSelectedProduct: (state, action)=>{
           return {
            ...state,
            selectedProduct: {...action.payload},
            }
        },
       
        openFootModal: (state)=>{
            return {
                ...state,
                active: true
            }
        }, 

        closeFootModal: (state) => {
            return {
                ...state,
                active: false
            }
        }
    }
})

export const {
    setSelectedProduct,
    openFootModal, 
    closeFootModal
} = footModalSlice.actions;

export default footModalSlice.reducer;