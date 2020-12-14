const fetch = require('node-fetch');
const fetchJson = (url) => {
  return fetch(url, {}).then(resp => resp.json());
};

module.exports = fetchJson;