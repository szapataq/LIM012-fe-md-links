const route = require('./main.js');
const validate = require('./validate.js');

const mdLinks = (inputPath, options = { validate: false }) => new Promise((resolve, reject) => {
  if (route.isValidRoute(inputPath)) {
    if (options.validate === true) {
      resolve(validate.validateLinks(inputPath));
    } else {
      resolve(route.getLinksMd(inputPath));
    }
  } else {
    reject(new Error('FAIL'));
  }
});

// console.log(mdLinks('./test_example', { validate: true }));
// mdLinks('./test_example', { validate: false }).then((res) => console.log(res));

module.exports = { mdLinks };
