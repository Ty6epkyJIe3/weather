import React from "react";
import {useSelector} from "react-redux";
import {ForecastBox} from "./ForectBlock.styles";
import {SvgCondition} from "../SvgCondition/SvgCondition";

export const ForecastBlock = () => {
    const weatherState = useSelector((state) => state.weather.weatherData);
    const city = useSelector((state) => state.weather.city);

    function degToCompass(num) {
        const val = Math.floor((num / 22.5) + 0.5);
        const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    if (weatherState !== null) {
        return (
            <ForecastBox>
                <div className="noparams">
                    <div className="info">
                        <h1>{city}</h1>
                        <h2>{weatherState.weather?.[0].description.replace(/^./, str => str.toUpperCase())}</h2>
                    </div>
                    <SvgCondition/>
                </div>
                <hr/>
                <div className="params">
                    <span>Temperature {Math.floor(weatherState.main?.temp)-273}C</span>
                    <span>Humidity {weatherState.main?.humidity}%</span>
                    <span>Wind {weatherState.wind?.speed} m/s {degToCompass(weatherState.wind?.deg)}</span>
                </div>

            </ForecastBox>
        );
    } else {
        return (
            <p>Введите город</p>
        );
    }
};
