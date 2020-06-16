const route = require('./main.js');
const validate = require('./validate.js');

const mdLinks = (inputPath, options = { validate: false }) => new Promise((resolve) => {
  if (route.isValidRoute(inputPath)) {
    // const routeAbs = route.getAbsoluteRoute(inputPath);
    if (options.validate === true) {
      resolve(validate.validateLinks(inputPath));
    } else {
      resolve(route.getLinksMd(inputPath));
    }
  }
});

// console.log(mdLinks('./test_example', { validate: true }));
// mdLinks('./test_example', { validate: true }).then((res) => console.log(res));

module.exports = {
  mdLinks,
};
