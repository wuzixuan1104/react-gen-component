const get = require('../fp/get');
const fetchJson = require('../utils/fetchJson');

const app = {
  build: '',
  config: {},
  set: (content) => {
    app.build = get(content, 'build');
    app.config = get(content, 'sources');
  },
  run: async () => {
    for (source of app.config) {
      const name = get(source, 'name');
      const url = get(source, 'url');
      const resp = await app.fetch(url);
      console.log(name, resp);
    }
  },
  fetch: async (url) => {
    const resp = await fetchJson(url).catch(err => console.log('fetch error:', err));
    return resp || false;
  }
}

module.exports = app;