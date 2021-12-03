import {configureStore} from "@reduxjs/toolkit";
import {coordinatesSlice} from "./geocording.slice";
import {weatherSlice} from "./weather.slice";

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        coordinates: coordinatesSlice

})