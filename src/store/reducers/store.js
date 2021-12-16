import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {coordinates} from "./geocording.slice";
import { weather } from "./weather.slice";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "../sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    weather: weather,
    coordinates: coordinates
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

