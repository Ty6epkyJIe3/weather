import {createSlice} from "@reduxjs/toolkit";

export const REQUEST_DATA = 'REQUEST_DATA';
export const requestData = (city) => {
    return({type: REQUEST_DATA, city});
};

const initialState = {
    lat: '',
    lon: '',
    isLoading: false,
    error: false
};

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        changeLoadingStatus: (state) => {
            state.isLoading = !state.isLoading;
        },
        changeCoordinates: (state, action) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        },
        fetchWeatherError: (state) => {
            state.isLoading = false;
            state.error = true;
        }
    }
});

export const { changeCoordinates, requestCoordinates, changeLoadingStatus, fetchWeatherError } = coordinatesSlice.actions;

export const coordinates = coordinatesSlice.reducer;