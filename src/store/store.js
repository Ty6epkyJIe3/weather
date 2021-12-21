import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {statusReducer} from "./reducers/status.slice";
import {weatherReducer} from "./reducers/weather.slice";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./sagas/root.saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    weather: weatherReducer,
    status: statusReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

