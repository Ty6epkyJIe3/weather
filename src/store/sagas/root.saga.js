import { all }from "redux-saga/effects";
import { watchLoadCoordinates as watchLoadCoordinatesSaga } from "./weather.saga";

export function* rootSaga() {
    yield all([
        watchLoadCoordinatesSaga(),
    ]);
}