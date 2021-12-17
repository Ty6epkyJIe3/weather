import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {coordinatesReducer} from "./geocoding.slice";
import {weatherReducer} from "./weather.slice";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "../sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    weather: weatherReducer,
    coordinates: coordinatesReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

