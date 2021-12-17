import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weatherData: {
        weather: [
            {
                icon: null
            }
        ]
    }
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

export const { uploadWeather } = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;