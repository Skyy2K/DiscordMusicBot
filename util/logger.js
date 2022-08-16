const chalk = require("chalk");

module.exports = new class {
    info(text) {
        console.info(`${chalk.blue.bold(`[INFO]`)} ${text}`);
    }

    warn(text) {
        console.info(`${chalk.yellow.bold(`[WARN]`)} ${text}`);
    }

    error(msg) {
        console.info(`${chalk.red.bold(`[ERROR]`)} ${msg}`);
    }
};