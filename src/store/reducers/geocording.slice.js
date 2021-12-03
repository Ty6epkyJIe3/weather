import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    lat: undefined,
    lon: undefined
};

export const coordinatesSlice = createSlice({
    name: 'coordinates',
    initialState,
    reducers: {
        changeCoordinates: (state, action) => {
            state.lat = action.payload.lat;
            state.lon = action.payload.lon;
        }
    }
});