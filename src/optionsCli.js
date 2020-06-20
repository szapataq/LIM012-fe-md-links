const chalk = require('chalk');

// Funcion para ver stats y validacion de route
const statValidateLinks = (input) => {
  const total = input.length;
  const unique = new Set(input.map((link) => link.href)).size;
  const broken = input.filter((link) => link.statusText === 'FAIL').length;
  const result = `\n${chalk.green('Total: ')} ${total} \n${chalk.green('Unique: ')} ${unique} \n${chalk.red('Broken: ')} ${broken}`;
  return result;
};

// Funcion para ver las stadisticas de la libreria
const statsLinks = (input) => {
  const total = input.length;
  const unique = new Set(input.map((link) => link.href)).size;
  const result = `\n${chalk.green('Total: ')} ${total} \n${chalk.green('Unique: ')} ${unique}`;
  return result;
};

// Obtiene objeto para funcion mdLink
const getObjValidate = (arg1, arg2) => {
  if ((arg1 === '--stats' && arg2 === '--validate') || (arg1 === '--validate' && arg2 === '--stats') || (arg1 === '--validate' && arg2 === undefined)) {
    return { validate: true };
  }
  return { validate: false };
};

// Opcion de help
const helpOption = `
  ${chalk.yellow.bold`  mdLinks 1.0.0\n`}
  ${chalk.green.bold`  USAGE`}
  ${chalk.white`    mdLinks `}${chalk.rgb(121, 212, 213)`<path>`} ${chalk.rgb(245, 0, 142)`[options]\n`}
  ${chalk.green.bold`  PATH`}
  ${chalk.white`    Is a absolute o relative path of file or directory.\n`}
  ${chalk.green.bold`  OPTIONS`}
  ${chalk.rgb(0, 255, 255)`    -h, --help           `} Display help.
  ${chalk.rgb(0, 255, 255)`    -V, --version        `} Display version.
  ${chalk.rgb(0, 255, 255)`    --stats              `} Basic stadistics on link.
  ${chalk.rgb(0, 255, 255)`    --validate           `} Link validation.
  ${chalk.rgb(0, 255, 255)`    --stats --validate   `} Statistics that require the validation results.`;

module.exports = {
  statValidateLinks,
  statsLinks,
  getObjValidate,
  helpOption,
};
