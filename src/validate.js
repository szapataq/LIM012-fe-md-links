const fetch = require('node-fetch');
const routes = require('./main.js');

const validateLinks = (route) => {
  const arrayLinks = routes.getLinksMd(route);
  const arrLinksPromises = arrayLinks.map((element) => fetch(element.href)// devuelve una promesa
    .then((res) => {
      if (res.ok) {
        return {
          ...element,
          status: res.status,
          statusText: res.statusText,
        };
      }
      return {
        ...element,
        status: res.status,
        statusText: 'FAIL',
      };
    })
    .catch(() => ({
      ...element,
      status: 'ERROR',
      statusText: 'FAIL',
    })));

  return Promise.all(arrLinksPromises);
};

// validateLinks('./test_example').then((res) => console.log(res));

module.exports = {
  validateLinks,
};
