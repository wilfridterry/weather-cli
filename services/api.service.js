import axios from 'axios';

/**
 * Example: `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
 * @param {string} city 
 * @param {string} key 
 */
async function getWeather(city, key) {
    if (!key) {
        throw new Error('Undefined token-key API, set a token with command -t [API_KEY]');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: key,
            lang: 'ru',
            units: 'metric'
        }
    });

    return data;
}

export { getWeather }