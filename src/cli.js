#!/usr/bin/env node

const chalk = require('chalk');
const stat = require('./stats.js');
const mdLink = require('./mdLinks.js');


const getOption = (option1, option2) => {
  if (option1 === '--validate' && option2 === undefined) {
    return { validate: true };
  }
  if (option1 === '--stats' && option2 === '--validate') {
    return { validate: true };
  }
  return { validate: false };
};

const showCli = (route, option1, option2) => {
  const validate = getOption(option1, option2);
  return mdLink.mdLinks(route, validate)
    .then((response) => {
      let output = '';
      if (response.length === 0) {
        output = chalk.red.bold.underline('Hello', 'world');
      }
      if (option1 === '--stats' && option2 === '--validate') {
        output = `\n${chalk.cyan('Total: ')} ${response.length} \n${chalk.cyan('Unique: ')} ${stat.unique(response)} \n${chalk.cyan('Broken: ')} ${stat.broken(response)}`;
      }
      if (option1 === '--stats' && option2 === undefined) {
        output = `\n${chalk.cyan('Total: ')} ${response.length} \n${chalk.cyan('Unique: ')} ${stat.unique(response)}`;
      }
      if (option1 === '--validate' && option2 === undefined) {
        response.forEach((objectLink) => {
          if (objectLink.statusText === 'OK') {
            output += `\n${chalk.cyan(objectLink.path)} ${chalk.magenta(objectLink.href)} ${chalk.green(objectLink.status)} ${chalk.bgGreen.black(objectLink.statusText)} ${chalk.yellow(objectLink.text)}`;
          } else {
            output += `\n${chalk.cyan(objectLink.path)} ${chalk.magenta(objectLink.href)} ${chalk.red(objectLink.status)} ${chalk.bgRed.black(objectLink.statusText)} ${chalk.yellow(objectLink.text)}`;
          }
        });
      }
      if (option1 === undefined) {
        response.forEach((objectLink) => {
          output += `\n${chalk.cyan(objectLink.path)} ${chalk.magenta(objectLink.href)} ${chalk.yellow(objectLink.text)}`;
        });
      }
      return output;
    })
    .catch(() => chalk.yellow('Ingresa una ruta válida.'));
};


const [, , route, option1, option2] = process.argv;

showCli(route, option1, option2).then((result) => console.log(result));

module.exports = {
  showCli,
};
