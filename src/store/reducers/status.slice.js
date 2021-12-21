import {createSlice} from "@reduxjs/toolkit";

 export const REQUEST_DATA = "REQUEST_DATA";
 export const requestData = (city) => {
     return({type: REQUEST_DATA, city});
 };

const initialState = {
    isLoading: false,
    isError: false,
    isUsed: false
};

export const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        reverseIsLoading: (state) => {
            state.isLoading = !state.isLoading;
        },
        toggleError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        resetError: (state) => {
            state.isError = false;
        },
        firstUseDetection: (state) => {
            state.isUsed = true;
        }
    }
});

export const {reverseIsLoading, toggleError, resetError, firstUseDetection} = statusSlice.actions;

export const statusReducer = statusSlice.reducer;