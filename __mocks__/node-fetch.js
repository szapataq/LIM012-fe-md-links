const nodeFetch = jest.requireActual('node-fetch');
const fetchMock = require('fetch-mock').sandbox();

Object.assign(fetchMock.config, {
  fetch: nodeFetch,
});

fetchMock // configuracion
  .mock('https://developers.google.com/vs/', 404)
  .mock('https://esnodejs.org/', () => {
    throw new Error('ERROR_MESSAGE');
  })
  .mock('*', 200);

module.exports = fetchMock;
