const validate = require('../src/validate.js');

const output = [
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

describe('Find the MD file', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof validate.validateLinks).toBe('function');
  });
  it('Deberia retornar', () => expect(validate.validateLinks('./test_example')).resolves.toEqual(output));

  it('deberia devolver un arreglo de objetos', (done) => validate.validateLinks('./test_example')
    .then((response) => {
      expect(response).toEqual(output);
      done();
    }));
});
