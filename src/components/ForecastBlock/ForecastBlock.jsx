import React from "react";
import {ForecastBox} from "./ForectBlock.styles";
import {SvgCondition} from "../SvgCondition/SvgCondition";
import {useSelector} from "react-redux";
import {degToCompass} from "../../utils/degreesToCompass";

export const ForecastBlock = () => {
    const weatherState = useSelector((state) => state.weather.weatherData);
    const city = useSelector((state) => state.weather.city);
    const typeOfWeather = weatherState.weather?.[0].description.replace(/^./, str => str.toUpperCase());
    const temperature = Math.floor(weatherState.main?.temp)-273;
    const humidity = weatherState.main?.humidity;
    const windSpeed = weatherState.wind?.speed;
    const windDeg = degToCompass(weatherState.wind?.deg);

    return (
        <ForecastBox>
            <div className="noparams">
                <div className="info">
                    <h1>{city}</h1>
                    <h2>{typeOfWeather}</h2>
                </div>
                <SvgCondition/>
            </div>
            <hr/>
            <div className="params">
                <span>Temperature {temperature}°C</span>
                <span>Humidity {humidity}%</span>
                <span>Wind {windSpeed} m/s {windDeg}</span>
            </div>
        </ForecastBox>
    );
};
