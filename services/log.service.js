import chalk from 'chalk';
import dedent from 'dedent-js'


const printError = (error) => {
    console.log( chalk.bgRed(' ERROR ')  + ' ' + error)
};
const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message)
};

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}
        Без параметров - вивід погоди
        -s [CITY] для встановлення міста
        -h для відображення допомоги
        -t [API_KEY] для зберігання tokena
        `) 
    );
};

const printWeather = (res, icon) => {
    console.log(
        dedent(`${chalk.bgYellow('  WEATHER ')} Погода у місті ${res.name}
        ${icon} ${res.weather[0].description}
        Температура: ${res.main.temp} (Відчувається як ${res.main.feels_like})
        Вологість: ${res.main.humidity}%
        Швидкість вітру: ${res.wind.speed} м/c
        `) 
    );
}

export {printError, printSuccess, printHelp, printWeather}