
const unique = (arrayObjLinks) => {
  const totalUniqueLinks = new Set(arrayObjLinks.map((link) => link.href));
  return totalUniqueLinks.size;
};

const broken = (arrayObjLinks) => arrayObjLinks.filter((link) => link.statusText === 'FAIL').length;


// const array = [
//   {
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown',
//     path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
//     status: 200,
//     statusText: 'OK',
//   },
//   {
//     href: 'https://nodejs.org/',
//     text: 'Node.js',
//     path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\directory1\\file1_1.md',
//     status: 200,
//     statusText: 'OK',
//   },
//   {
//     href: 'https://developers.google.com/v8/',
//     text: 'motor de JavaScript V8 de Chrome',
//     path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
//     status: 404,
//     statusText: 'OK',
//   },
//   {
//     href: 'https://nodejs.org/',
//     text: 'Node.js',
//     path: 'D:\\LABORATORIA\\LIM012-fe-md-links\\test_example\\file1.md',
//     status: 200,
//     statusText: 'OK',
//   },
// ];

// console.log('Total:', array.length);
// console.log('Broken:', broken(array));
// console.log('Unique:', unique(array));

module.exports = {
  unique,
  broken,
};
