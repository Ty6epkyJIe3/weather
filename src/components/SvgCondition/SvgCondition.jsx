import React from "react";
import {useSelector} from "react-redux";
import {SvgCard} from "./SvgCondition.styles";

export const SvgCondition = () => {
    const weatherState = useSelector((state) => state.weather.weatherData);

    if (weatherState?.weather?.[0]?.icon !== undefined) {
        return (
            <SvgCard src={`http://openweathermap.org/img/wn/${weatherState?.weather?.[0]?.icon}@2x.png`}
                     alt={weatherState.weather[0].main}/>
        );
    } else {
        return (
            <div/>
        );
    }
};
