const chalk = require('chalk');
// const path = require('path');
const cli = require('../src/cli.js');

// const output1 = `
// \n${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'directory1', 'file1_1.md'))} ${chalk.rgb(245, 0, 142)('https://es.wikipedia.org/wiki/Markdown')} ${chalk.white('Markdown')}
// \n${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'directory1', 'file1_1.md'))} ${chalk.rgb(245, 0, 142)('https://esnodejs.org/')} ${chalk.white('Node.js')}
// \${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'file1.md'))} ${chalk.rgb(245, 0, 142)('https://developers.google.com/vs/')} ${chalk.white('motor de JavaScript V8 de Chrome')}
// ${chalk.rgb(121, 212, 213)(path.join(process.cwd(), 'test_example', 'file1.md'))} ${chalk.rgb(245, 0, 142)('https://nodejs.org/')} ${chalk.white('Node.js')}`;


const output2 = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 4`;
const output3 = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 4 \n${chalk.red('Broken: ')} 2`;
// Obtener link de archivos MD
describe('Mostrar en el CLI, estadisticas, validacion y links encontrados ', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof cli.cli).toBe('function');
  });
  it('deberia retornar "md file or link not found" si la opcion no es validate ni stats', (done) => {
    cli.cli('test_example/otro', undefined, undefined).then((response) => {
      expect(response).toBe(chalk.red('md file or link not found'));
      done();
    });
  });
  it('Debería retornar el total y unicos links', (done) => {
    cli.cli('test_example', '--stats', undefined).then((response) => {
      expect(response).toBe(output2);
      done();
    });
  });
  it('Debería retornar el total, unico y rotos links', (done) => {
    cli.cli('test_example', '--stats', '--validate').then((response) => {
      expect(response).toBe(output3);
      done();
    });
  });
  it('deberia retornar "The option does not exist" si la opcion no es validate ni stats', (done) => {
    cli.cli('test_example', 'sandra', undefined).then((response) => {
      expect(response).toBe(chalk.red('The option does not exist. You can use "mdLinks --help" for more information'));
      done();
    });
  });
});
