import React from "react";
import {useSelector} from "react-redux";

export const SvgCondition = () => {
    const weatherState = useSelector((state) => state.weather.weatherData);

    if (weatherState.weather[0].icon !== null) {
        return (
            <div>
                <img src={`http://openweathermap.org/img/wn/${weatherState.weather[0].icon}@2x.png`}
                     alt={weatherState.weather[0].main}/>
            </div>
        );
    } else {
        return (
            <div/>
        );
    }
};
