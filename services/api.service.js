import axios from 'axios';
import https from 'https';

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

    // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', key);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');

    // https.get(url, (response) => {
    //     let result = '';

    //     response.on('data', (chunk) => {
    //         result += chunk;
    //     });

    //     response.on('end', () => {
    //         console.log(result);
    //     });
    // });
}

export { getWeather }