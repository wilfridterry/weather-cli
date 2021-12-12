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

export { printError, printSuccess, printHelp };