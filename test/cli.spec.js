const chalk = require('chalk');
const path = require('path');
const cli = require('../src/cli.js');

const output1 = `
${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'directory1', 'file1_1.md'))} ${chalk.rgb(245, 0, 142)('https://es.wikipedia.org/wiki/Markdown')} ${chalk.white('Markdown')}
${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'directory1', 'file1_1.md'))} ${chalk.rgb(245, 0, 142)('https://esnodejs.org/')} ${chalk.white('Node.js')}
${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'file1.md'))} ${chalk.rgb(245, 0, 142)('https://developers.google.com/vs/')} ${chalk.white('motor de JavaScript V8 de Chrome')}
${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'file1.md'))} ${chalk.rgb(245, 0, 142)('https://nodejs.org/')} ${chalk.white('Node.js')}`;

const output2 = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 4`;
const output3 = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 4 \n${chalk.red('Broken: ')} 2`;

const output4 = `
${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'directory1', 'file1_1.md'))} ${chalk.rgb(245, 0, 142)('https://es.wikipedia.org/wiki/Markdown')} ${chalk.green('200')} ${chalk.green('OK')} ${chalk.white('Markdown')} ✔
${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'directory1', 'file1_1.md'))} ${chalk.rgb(245, 0, 142)('https://esnodejs.org/')} ${chalk.red('ERROR')} ${chalk.red('FAIL')} ${chalk.white('Node.js')} ✘
${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'file1.md'))} ${chalk.rgb(245, 0, 142)('https://developers.google.com/vs/')} ${chalk.red('404')} ${chalk.red('FAIL')} ${chalk.white('motor de JavaScript V8 de Chrome')} ✘
${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'file1.md'))} ${chalk.rgb(245, 0, 142)('https://nodejs.org/')} ${chalk.green('200')} ${chalk.green('OK')} ${chalk.white('Node.js')} ✔`;

// Obtener link de archivos MD
describe('Mostrar en el CLI, estadisticas, validacion y links encontrados ', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof cli.cli).toBe('function');
  });
  it('Deberia retornar "md file or link not found" si la opcion no es validate ni stats', () => expect(cli.cli('test_example/otro', undefined, undefined)).resolves.toBe(chalk.red('md file or link not found')));
  it('Deberia retornar la validacion de los links', () => expect(cli.cli('test_example', '--validate', undefined)).resolves.toBe(output4));
  it('Deberia retornar el path, el haref y el texto de los links', () => expect(cli.cli('test_example', undefined, undefined)).resolves.toBe(output1));
  it('Debería retornar el total y unicos links', () => expect(cli.cli('test_example', '--stats', undefined)).resolves.toBe(output2));
  it('Debería retornar el total, unico y rotos links', () => expect(cli.cli('test_example', '--stats', '--validate')).resolves.toBe(output3));
  it('Debería retornar el total, unicos y rotos links', () => expect(cli.cli('test_example', '--validate', '--stats')).resolves.toBe(output3));
  it('Deberia retornar "The option does not exist" si la opcion no es validate ni stats', () => expect(cli.cli('test_example', 'miprueba', undefined)).resolves.toBe(chalk.red('The option does not exist. You can use "mdLinks --help" for more information')));
});
