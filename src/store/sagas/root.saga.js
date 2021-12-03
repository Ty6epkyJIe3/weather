import { all }from 'redux-saga/effects';

import { watchLoadWeather as watchLoadWeatherSaga } from "./weather.saga";
import { watchLoadCoordinates as watchLoadCoordinatesSaga } from "./geocording.saga";

export function* rootSaga() {
    yield all([
        watchLoadCoordinatesSaga(),
        watchLoadWeatherSaga()
    ]);
}