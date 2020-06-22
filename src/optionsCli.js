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


module.exports = {
  statValidateLinks,
  statsLinks,
  getObjValidate,

};
