import {createSlice} from "@reduxjs/toolkit"
import { modalAction } from "../../components/Modal/ModalFunctions"

const INITIAL_STATE = {
    active: false,
    title: "",
    msg: "",
    act: ""
}

const modalSlice = createSlice({
    name: "Modal",
    initialState: INITIAL_STATE,
    reducers: {
        setModalTitle: (state, action)=>{
            return {
                ...state,
                title: action.payload 
            }
        }, 

        setModalMsg: (state, action)=>{
            return {
                ...state,
                msg: action.payload 
            }
        },
        
        setModalAction: (state, action)=>{
            return {
                ...state,
                act: modalAction(action.payload)
            }
        }, 
        
        toggleModal: (state)=>{
            return {
                ...state,
                active: !state.active 
            }
        }, 

        closeModal: (state) => {
            return {
                ...state,
                active: false
            }
        }
    }
})

export const {
    setModalMsg,
    setModalTitle,
    toggleModal, 
    closeModal,
    setModalAction
} = modalSlice.actions;

export default modalSlice.reducer;