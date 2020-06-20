#!/usr/bin/env node

const chalk = require('chalk');
const api = require('./mdLinks.js');
const opt = require('./optionsCli');

// Funcion Principal del CLI
const cli = (route, arg1, arg2) => {
  const validate = opt.getObjValidate(arg1, arg2);
  return api.mdLinks(route, validate)
    .then((response) => {
      let result = '';
      if (response.length === 0) {
        result = chalk.red('md file or link not found');
      }
      if ((arg1 === '--stats' && arg2 === '--validate') || (arg1 === '--validate' && arg2 === '--stats')) {
        result = opt.statValidateLinks(response);
      }
      if (arg1 === '--stats' && arg2 === undefined) {
        result = opt.statsLinks(response);
      }
      if (arg1 === '--validate' && arg2 === undefined) {
        response.forEach((element) => {
          if (element.statusText !== 'OK') {
            result += `\n${chalk.rgb(121, 212, 213)(element.path)} ${chalk.rgb(245, 0, 142)(element.href)} ${chalk.red(element.status)} ${chalk.red(element.statusText)} ${chalk.white(element.text)} ✘`;
          } else {
            result += `\n${chalk.rgb(121, 212, 213)(element.path)} ${chalk.rgb(245, 0, 142)(element.href)} ${chalk.green(element.status)} ${chalk.green(element.statusText)} ${chalk.white(element.text)} ✔`;
          }
        });
      }
      if (arg1 === undefined && arg2 === undefined) {
        response.forEach((element) => {
          result += `\n${chalk.rgb(121, 212, 213)(element.path)} ${chalk.rgb(245, 0, 142)(element.href)} ${chalk.white(element.text)}`;
        });
      }
      if (arg1 !== '--stats' && arg1 !== '--validate' && arg1 !== undefined) {
        result = chalk.red('The option does not exist. You can use "mdLinks --help" for more information');
      }
      return result;
    })
    .catch(() => chalk.red('Invalid path'));
};


const [, , ...args] = process.argv;
if (args.length < 4) {
  if (args[0] === '--help' || args[0] === '-h') {
    console.log(opt.helpOption);
  }
  if (args[0] === undefined) {
    console.log(opt.helpOption);
  }
  if (args[0] === '-V' || args[0] === '--version') {
    console.log('1.0.0');
  } else {
    cli(args[0], args[1], args[2])
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
} else {
  console.log(opt.helpOption);
}

module.exports = { cli };
