import {createSlice} from "@reduxjs/toolkit";

 export const REQUEST_DATA = 'REQUEST_DATA';
 export const requestData = (city) => {
     return({type: REQUEST_DATA, city});
 };

const initialState = {
    isLoading: false,
    error: false
};

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        changeLoadingStatus: (state) => {
            console.log(changeLoadingStatus.type);
            state.isLoading = !state.isLoading;
        },
        fetchWeatherError: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const { changeLoadingStatus, fetchWeatherError } = coordinatesSlice.actions;

export const coordinatesReducer = coordinatesSlice.reducer;