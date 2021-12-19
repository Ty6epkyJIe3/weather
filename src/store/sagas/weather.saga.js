import { takeEvery, call, put } from 'redux-saga/effects';
import {
    changeLoadingStatus,
    fetchWeatherError,
    firstUseDetection,
    REQUEST_DATA,
} from "../reducers/status.slice";

import {GEOCORDING_API_URL, WEATHER_API_URL} from "../../core/axios";

import {changeCity, uploadWeather} from "../reducers/weather.slice";

const API_KEY = "79309a34f5a673793477ea0a1f82854e";

function* workerLoadCoordinates(payload) {
    try {
        yield put(firstUseDetection());
        yield put(changeLoadingStatus());
        const getLatLonCityData = yield call(GEOCORDING_API_URL.get,
            `direct?q=${payload.city.toLowerCase()}&limit=1&appid=${API_KEY}`);
        yield put(changeCity(getLatLonCityData.data[0].name));
        const lat = Math.floor(getLatLonCityData.data[0].lat * 100) / 100;
        const lon = Math.floor(getLatLonCityData.data[0].lon * 100) / 100;
        const getWeatherByCoord = yield call(
            WEATHER_API_URL.get,
            `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        yield put(uploadWeather(getWeatherByCoord.data));
        yield put(changeLoadingStatus());
    } catch (e) {
        yield put(fetchWeatherError());
    }
}

export function* watchLoadCoordinates() {
    yield takeEvery(REQUEST_DATA, workerLoadCoordinates);
}