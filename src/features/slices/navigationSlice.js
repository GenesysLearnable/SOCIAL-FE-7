import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
    name:'navigation',
    initialState: {
        path: null,
    },
    reducers: {
        navigate:(state,action)=> {
            state.path  = action.payload;
        },
    },
});

export const {navigate} = navigationSlice.actions;
export default navigationSlice.reducer