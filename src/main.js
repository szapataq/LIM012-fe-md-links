const debug = require('debug')('main');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

// FUNCION PARA VALIDAR RUTA =3
const isValidRoute = (route) => fs.existsSync(route);
debug(isValidRoute('./test_example/directory'));

// FUNCION OBTENER SIEMPRE UNA RUTA ABSOLUTA =3
const getAbsoluteRoute = (route) => (path.isAbsolute(route) ? route : path.resolve(route));
debug(getAbsoluteRoute('./test_example/directory1'));

// FUNCION PARA SABER SI LA RUTA ES UN ARCHIVO =3
const isFile = (route) => fs.statSync(route).isFile();
debug(isFile('./test_example/directory1/file1_2.js'));

// FUNCION PARA SABER SI ES UN ARCHIVO .MD
const isMdFile = (route) => (path.extname(route) === '.md');
debug(isMdFile('./test_example/file1.md'));

// FUNCION QUE BUSCA LOS ARCHIVOS MD
const getMdFiles = (routeFile) => {
  let arrayMdFile = [];
  const route = getAbsoluteRoute(routeFile);
  if (isFile(route)) {
    if (isMdFile(route)) {
      arrayMdFile.push(route);
    }
  } else {
    const arrayOfFiles = fs.readdirSync(route);
    // debug('Lista dearchivos', arrayOfFiles);
    arrayOfFiles.forEach((file) => {
      const arrayMd = getMdFiles(path.join(route, file));
      arrayMdFile = arrayMdFile.concat(arrayMd);
    });
  }
  return arrayMdFile;
};
debug(getMdFiles('./test_example/file1.md'));

// FUNCION PARA RUTAS ABSOLUTAS DE LOS ARCHIVOS ENCONTRADOS
const getLinksMd = (route) => {
  const arrayMdFiles = getMdFiles(route);
  const renderer = new marked.Renderer();
  const arrayofLinks = [];
  arrayMdFiles.forEach((filePath) => {
    const file = fs.readFileSync(filePath, 'utf8').toString();
    renderer.link = (urlFile, _, urlText) => {
      arrayofLinks.push({
        href: urlFile,
        text: urlText,
        path: filePath,
      });
    };
    marked(file, { renderer });
    // debug('File', marked(file.toString(), { renderer }));
  });
  return arrayofLinks;
};
// debug(getLinksMd('./test_example'));

module.exports = {
  isValidRoute,
  getAbsoluteRoute,
  isFile,
  isMdFile,
  getMdFiles,
  getLinksMd,
};
