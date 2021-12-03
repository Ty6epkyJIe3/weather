const axios = require('axios');

export const WEATHER_API_URL = axios.create({
    baseURL: 'http://api.openweathermap.org/'
});

export const GEOCORDING_API_URL = axios.create({
    baseURL: 'http://api.openweathermap.org/'
})