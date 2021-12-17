import { takeEvery, call, put } from 'redux-saga/effects';
import {
    changeLoadingStatus,
    fetchWeatherError,
    REQUEST_DATA,
} from "../reducers/geocoding.slice";

import {GEOCORDING_API_URL, WEATHER_API_URL} from "../../core/axios";

import {uploadWeather} from "../reducers/weather.slice";

const API_KEY = "79309a34f5a673793477ea0a1f82854e";

function* workerLoadCoordinates(payload) {
    try {
        yield put(changeLoadingStatus());
        const getLatLonData = yield call(GEOCORDING_API_URL.get, `direct?q=${payload.city.toLowerCase()}&limit=1&appid=${API_KEY}`);
        const lat = Math.floor(getLatLonData.data[0].lat * 100) / 100;
        const lon = Math.floor(getLatLonData.data[0].lon * 100) / 100;
        const getWeatherByCoord = yield call(
            WEATHER_API_URL.get,
            `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        yield put(uploadWeather(getWeatherByCoord.data));
    } catch (e) {
        yield put(fetchWeatherError());
        yield console.log(e);
    }
}

export function* watchLoadCoordinates() {
    yield takeEvery(REQUEST_DATA, workerLoadCoordinates);
}