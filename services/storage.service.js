import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filepath = join(homedir(), 'weather-data.json');

async function saveKeyValue(key, value) {
    let data = {};

    if (await fileExists(filepath)) {
        data = await getValidFileData();
    }

    data[key] = value;

    await promises.writeFile(filepath, JSON.stringify(data));
}

async function getKeyValue(key) {
    if (! await fileExists(filepath)) {
        return undefined;
    }

    const file = await promises.readFile(filepath);
    const data = JSON.parse(file);

    return data[key];
}

async function fileExists(path) {
    try {
        await promises.stat(path);
        return true;
    } catch(e) {
        return false;
    }
}

async function getValidFileData() {
    try {
        const file = await promises.readFile(filepath);
        return JSON.parse(file);
    } catch {
        await promises.rm(filepath);
        return {};
    }
}

export { saveKeyValue, getKeyValue }

