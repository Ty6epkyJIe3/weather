import React from "react";
import {useSelector} from "react-redux";

export const ForecastBlock = () => {
    const weatherState = useSelector((state) => state.weather.weatherData);

    if (weatherState !== null) {
        return (
            <div>
               {weatherState.weather[0].main}
            </div>
        );
    } else {
        return (
            <div/>
        );
    }
};
