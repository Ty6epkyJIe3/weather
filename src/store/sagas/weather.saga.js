import { takeEvery, call, put } from "redux-saga/effects";
import {
    firstUseDetection,
    REQUEST_DATA, resetError,
    reverseIsLoading,
    toggleError,
} from "../reducers/status.slice";

import {GEOCORDING_API_URL, WEATHER_API_URL} from "../../core/axios";

import {changeCity, uploadWeather} from "../reducers/weather.slice";

function* workerLoadCoordinates(payload) {
    try {
        yield put(firstUseDetection());
        yield put(resetError());
        yield put(reverseIsLoading());
        const getLatLonCityData = yield call(GEOCORDING_API_URL.get,
            `direct?q=${payload.city.toLowerCase()}&limit=1&appid=${process.env.REACT_APP_API_KEY.slice(0,-1)}`);
        yield put(changeCity(getLatLonCityData.data[0].name));
        const lat = Math.floor(getLatLonCityData.data[0].lat * 100) / 100;
        const lon = Math.floor(getLatLonCityData.data[0].lon * 100) / 100;
        const getWeatherByCoord = yield call(
            WEATHER_API_URL.get,
            `weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY.slice(0,-1)}`
        );
        yield put(uploadWeather(getWeatherByCoord.data));
        yield put(reverseIsLoading());
    } catch (e) {
        yield put(toggleError());
        console.log(e);
    }
}

export function* watchLoadCoordinates() {
    yield takeEvery(REQUEST_DATA, workerLoadCoordinates);
}