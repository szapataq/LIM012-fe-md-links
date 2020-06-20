const chalk = require('chalk');
const option = require('../src/optionsCli.js');

const input = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://esnodejs.org/',
    text: 'Node.js',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
    status: 'ERROR',
    statusText: 'FAIL',
  },
  {
    href: 'https://developers.google.com/vs/',
    text: 'motor de JavaScript V8 de Chrome',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
    status: 404,
    statusText: 'FAIL',
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
    status: 200,
    statusText: 'OK',
  },
];

const input2 = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
    status: 200,
    statusText: 'OK',
  },
  {
    href: 'https://developers.google.com/vs/',
    text: 'motor de JavaScript V8 de Chrome',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
    status: 404,
    statusText: 'FAIL',
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
    status: 200,
    statusText: 'OK',
  },
];
const outputStats = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 4`;
const outputStats2 = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 3`;

const outputStatsValidate = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 4 \n${chalk.red('Broken: ')} 2`;
const outputStatsValidate2 = `\n${chalk.green('Total: ')} 4 \n${chalk.green('Unique: ')} 3 \n${chalk.red('Broken: ')} 1`;

describe('Obtener objeto para API mdlinks', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof option.getObjValidate).toBe('function');
  });
  it('Deberia retornar {validate:true} para "stats y validate"', () => {
    expect(option.getObjValidate('--stats', '--validate')).toEqual({ validate: true });
  });
  it('Deberia retornar {validate:true} para "validate y stats"', () => {
    expect(option.getObjValidate('--validate', '--stats')).toEqual({ validate: true });
  });
  it('Deberia retornar {validate:true} para "validate y undefined"', () => {
    expect(option.getObjValidate('--validate', undefined)).toEqual({ validate: true });
  });
  it('Deberia retornar {validate:false} para "validate y undefine"', () => {
    expect(option.getObjValidate(undefined, undefined)).toEqual({ validate: false });
  });
});

describe('Obtener estadisticas de un array de objetos', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof option.statsLinks).toBe('function');
  });
  it('Deberia retornar el total:4 y unique:4', () => {
    expect(option.statsLinks(input)).toBe(outputStats);
  });
  it('Deberia retornar el total:4 y unique:3', () => {
    expect(option.statsLinks(input2)).toBe(outputStats2);
  });
});

describe('Obtener estadisticas y validacion de un array de objetos', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof option.statValidateLinks).toBe('function');
  });
  it('Deberia retornar el total:4, unique:4 y broken:2', () => {
    expect(option.statValidateLinks(input)).toBe(outputStatsValidate);
  });
  it('Deberia retornar el total:4 y unique:3', () => {
    expect(option.statValidateLinks(input2)).toBe(outputStatsValidate2);
  });
});
