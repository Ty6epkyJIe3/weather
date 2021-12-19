const axios = require('axios');

export const WEATHER_API_URL = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const GEOCORDING_API_URL = axios.create({
    baseURL: 'https://api.openweathermap.org/geo/1.0/'
});