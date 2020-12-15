const fetch = require('node-fetch');
const fetchJson = async (url) => {
  const resp = await fetch(url, {})
                .then(resp => resp.json())
                .catch(err => console.log('fetch error:', err));
  return resp || false;
};

module.exports = fetchJson;