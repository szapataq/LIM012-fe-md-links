const mdLink = require('../src/mdLinks.js');

const outputTrue = [
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

const outputFalse = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
  },
  {
    href: 'https://esnodejs.org/',
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

describe('Funcion validar los Link encontrados en Archivo md', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof mdLink.mdLinks).toBe('function');
  });

  it('Deberia retornar un array de obj sin validar los enlaces', () => expect(mdLink.mdLinks('./test_example')).resolves.toEqual(outputFalse));

  it('Deberia validar los enlaces', (done) => mdLink.mdLinks('./test_example', { validate: true })
    .then((response) => {
      expect(response).toEqual(outputTrue);
      done();
    }));
  it('Deberia no validar los enlaces', (done) => mdLink.mdLinks('./test_example', { validate: false })
    .then((response) => {
      expect(response).toEqual(outputFalse);
      done();
    }));
});
