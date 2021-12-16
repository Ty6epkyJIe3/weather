import { takeEvery } from 'redux-saga/effects';
import { uploadWeather } from "../reducers/weather.slice";

function* workerLoadWeather() {

}

export function* watchLoadWeather() {
    yield takeEvery(uploadWeather, workerLoadWeather);
}