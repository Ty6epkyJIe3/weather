import {createSlice} from "@reduxjs/toolkit";

 export const REQUEST_DATA = 'REQUEST_DATA';
 export const requestData = (city) => {
     return({type: REQUEST_DATA, city});
 };

const initialState = {
    isLoading: false,
    isError: false,
    isUsed: false
};

export const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        changeLoadingStatus: (state) => {
            state.isLoading = !state.isLoading;
        },
        fetchWeatherError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        firstUseDetection: (state) => {
            state.isUsed = true;
        }
    }
});

export const {changeLoadingStatus, fetchWeatherError, firstUseDetection} = statusSlice.actions;

export const statusReducer = statusSlice.reducer;