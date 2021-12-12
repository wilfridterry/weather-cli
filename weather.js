#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js'
import { saveKeyValue } from './services/storage.service.js';

initCLI();

function initCLI() {
    const args = getArgs(process.argv);

    if (args.s) {

    }
   
    if (args.h) {
        printHelp();
    }
    
    if (args.t) {
        saveToken(args.t);
    }
};

async function saveToken(token) {
    try {
        await saveKeyValue('token', token);
        printSuccess('The token has added');
    } catch (e) {
        printError(e.message);
    }
}