import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    currentUser: null,
    activeSticky: false,
    stickyOpen: false,
}

const userSlice = createSlice({
    name: "User",
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload,                
            };
        },

        toggleSticky: (state) => {
            return {
                ...state,
                activeSticky: !state.activeSticky,
                stickyOpen: false
            };
        },

        toggleOpenSticky: (state) => {
            return {
                ...state,
                stickyOpen: !state.stickyOpen
            };
        },


    }    
});

export const {
    setCurrentUser,
    toggleSticky, 
    toggleOpenSticky,
} = userSlice.actions;

export default userSlice.reducer