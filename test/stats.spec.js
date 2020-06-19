const stats = require('../src/stats');

const inputOne = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
  },
  {
    href: 'https://developers.google.com/vs/',
    text: 'motor de JavaScript V8 de Chrome',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
  },
];
const inputTwo = [
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

describe('Funcion enlaces Unicos', () => {
  it('Deberia ser una funcion ', () => {
    expect(typeof stats.unique).toBe('function');
  });

  it('Deberia retornar la cantidad de enlaces unicos existentes', () => {
    expect(stats.unique(inputOne)).toBe(3);
  });
  it('Deberia retornar la la Longitus del Arreglo ya que no hay repetidos', () => {
    expect(stats.unique(inputTwo)).toBe(4);
  });
});

describe('Funcion enlaces Rotos', () => {
  it('Deberia ser una funcion ', () => {
    expect(typeof stats.broken).toBe('function');
  });

  it('Deberia retornar la cantidad de enlaces unicos existentes', () => {
    expect(stats.broken(inputTwo)).toBe(2);
  });
});
