// const path = require('path');
const route = require('../src/main.js');

// test de la funcion que valida la ruta
describe('Funcion para validar ruta', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof route.isValidRoute).toBe('function');
  });
  it('Deberia retornar true si la ruta es valida', () => {
    expect(route.isValidRoute('./test_example')).toBe(true);
  });
  it('Deberia retornar false si la ruta no es valida', () => {
    expect(route.isValidRoute('./test/pruebas/pruebita/prueba.md')).toBe(false);
  });
});

// Obtencion de la ruta absoluta
describe('Funcion para obtener la ruta absoluta', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof route.getAbsoluteRoute).toBe('function');
  });
  it('Debería retornar la ruta si ya es absoluta', () => {
    expect(route.getAbsoluteRoute('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example')).toBe('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example');
  });
  it('Debería retornar la ruta absoluta si es relativa', () => {
    expect(route.getAbsoluteRoute('./test_example')).toBe('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example');
  });
});

// Verficar si es un archivo
describe('Funcion es un file', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof route.isFile).toBe('function');
  });
  it('Debería retornar true si la ruta es un file', () => {
    expect(route.isFile('./test_example/file2.css')).toBe(true);
    // expect(route.isFile(path.join(process.cwd(), 'src', 'main.js'))).toBe(true);
  });
  it('Debería retornar false si la ruta es un file', () => {
    expect(route.isFile('./test_example')).toBe(false);
  });
});

// verifica si es un archivo de extencion MD
describe('Is the extension of file .MD?', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof route.isMdFile).toBe('function');
  });
  it('Debería retornar false si el file no tiene extensión MD', () => {
    expect(route.isMdFile('./test_example/file2.css')).toBe(false);
  });
  it('Debería retornar true si el file tiene extensión MD', () => {
    expect(route.isMdFile('./test_example/file1.md')).toBe(true);
  });
});

const outputFindMdFile = [
  'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
  'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
];

// Obtener file md de una ruta dada
describe('Find the MD file', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof route.getMdFiles).toBe('function');
  });
  it('Debería retornar el file con extensión MD', () => {
    expect(route.getMdFiles('./test_example/file1.md')[0]).toBe('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md');
  });
  it('Debería retornar el file md de un subdirectorio', () => {
    expect(route.getMdFiles('./test_example')).toEqual(outputFindMdFile);
  });
  it('Debería retornar el file md del subdirectorio', () => {
    expect(route.getMdFiles('./test_example')[0]).toBe('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md');
  });
});


// Obtener link de archivos MD
describe('Obtener Links de archivos', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof route.getLinksMd).toBe('function');
  });
  it('Deberia retornar el link de un archivo md', () => {
    expect(route.getLinksMd('./test_example')[0].href).toBe('https://es.wikipedia.org/wiki/Markdown');
  });
  it('Deberia retornar el texto del link de un archivo md', () => {
    expect(route.getLinksMd('./test_example')[0].text).toBe('Markdown');
  });
  it('Deberia retornar el path de un archivo md', () => {
    expect(route.getLinksMd('./test_example')[0].path).toBe('D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md');
  });
});
