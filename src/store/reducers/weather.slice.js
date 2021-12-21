import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    city: "",
    weatherData: {

    }
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        changeCity: (state, action) => {
            state.city = action.payload;
        },
        uploadWeather: (state, action) => {
            state.weatherData = action.payload;
        }
    }
});

export const {uploadWeather, changeCity} = weatherSlice.actions;

export const weatherReducer = weatherSlice.reducer;