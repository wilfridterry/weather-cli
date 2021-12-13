import chalk from "chalk";
import dedent from "dedent";

function printError(error) {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

function printSuccess(message) {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
}

function printHelp() {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Wihout params - returns weather
        -s [CITY] for to set a city
        -h returns help
        -t [API] for to save a token`
    );
}

function printWeather(weather) {
    let [{description}] = weather.weather;

    console.log(
        dedent`${chalk.bgBlue('WEATHER')}
        Погода в городе ${weather.name}
        ${description}
        Температура: ${weather.main.temp}
        Ощущается как: ${weather.main.feels_like}
        Влажность: ${weather.main.humidity}%
        Скорость ветра: ${weather.wind.speed}`
    );
}

export { printError, printSuccess, printHelp, printWeather };