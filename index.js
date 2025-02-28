/**
 * CLI Alerts.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Atiur
*/

const chalk = require('chalk')
const sys = require('log-symbols')
const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const orange = chalk.keyword('orange');
const orangeI = chalk.keyword('orange').inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

module.exports = options =>{
    const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`,
        name:''
	};
	const opts = {...defaultOptions, ...options};
    const {type, msg, name} = opts
    let printName = name ? name : type.toUpperCase();

    if(type ==="error"){
        console.log(`\n${sys.warning} ${redI(` ${printName} `)} ${red(msg)}\n`);
    }

    if(type ==="success"){
        console.log(`\n${sys.success} ${greenI(` ${printName} `)} ${green(msg)}\n`);
    }

    if (type === `warning`) {
		console.log(`\n${sys.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`);
	}

    if (type === `info`) {
		console.log(`\n${sys.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`);
	}
} 