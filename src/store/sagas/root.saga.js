import { all }from 'redux-saga/effects';
import { watchLoadCoordinates as watchLoadCoordinatesSaga } from "./geocording.saga";

export function* rootSaga() {
    yield all([
        watchLoadCoordinatesSaga(),
    ]);
}