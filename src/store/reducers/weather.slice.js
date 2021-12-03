import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherData: {}
};

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        uploadWeather: (state, action) => {
            state.weatherData = action.payload;
        }
    }
});