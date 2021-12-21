import React from "react";
import {useSelector} from "react-redux";
import {SvgCard} from "./SvgCondition.styles";

export const SvgCondition = () => {
    const weatherState = useSelector((state) => state.weather.weatherData);
    const icon = weatherState?.weather?.[0]?.icon;

    return (
        <SvgCard src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                 alt={weatherState.weather?.[0]?.main}/>
    );
};
