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

        closeSticky: (state) => {
            return {
                ...state,
                activeSticky: true,
                stickyOpen: false
            };
        },

        openSticky: (state) => {
            return {
                ...state,
                activeSticky: true,
                stickyOpen: false
            };
        },

        toggleOpenSticky: (state) => {
            return {
                ...state,
                stickyOpen: !state.stickyOpen
            };
        },

        logout: (state) => {
           
            return {
                ...state,
                currentUser: null,
                activeSticky: false,
                stickyOpen: false,
            }
        }
    }    
});

export const {
    setCurrentUser,
    toggleSticky, 
    toggleOpenSticky,
    logout, 
    openSticky, 
    closeSticky
} = userSlice.actions;

export default userSlice.reducer