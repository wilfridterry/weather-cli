#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError, printWeather } from './services/log.service.js'
import { saveKeyValue, getKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';

initCLI();

async function initCLI() {
    const args = getArgs(process.argv);

    if (args.h) {
        return printHelp();
    }
    
    if (args.s) {
        return saveArgument(TOKEN_DICTIONARY.city, args.s);
    }

    if (args.t) {
        return saveArgument(TOKEN_DICTIONARY.token, args.t);
    }

    return getForcast();
};

async function saveArgument(argument, value) {
    if (!value.length) {
        return printError(`The ${argument} is empty.`)
    }

    try {
        await saveKeyValue(argument, value);
        printSuccess(`The ${argument} was add.`);
    } catch (e) {
        printError(e.message);
    }
}   

async function getForcast() {
    try {
        let token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)
        let city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);

        const weather = await getWeather(city, token);

        printWeather(weather);
    } catch(e) {
        if (e?.response?.status == 404) {
            printError('Error with the city name');    
        } else if (e?.response?.status == 401) {
            printError('Error with the token');    
        } else {
            printError(e.message);
        }
    }
}