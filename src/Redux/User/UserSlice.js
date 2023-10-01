import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    currentUser: null,
    activeSticky: false
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
            };
        },
    }    
});

export const {
    setCurrentUser,
    toggleSticky
} = userSlice.actions;

export default userSlice.reducer