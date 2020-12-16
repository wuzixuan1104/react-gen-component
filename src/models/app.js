const get = require('../fp/get');
const fetchJson = require('../utils/fetchJson');
const generator = require('./generator');

const app = {
  build: '',
  config: {},
  set: (content) => {
    app.build = get(content, 'build');
    app.config = get(content, 'sources');
  },
  run: async () => {
    generator.setBuild(app.build);

    for (source of app.config) {
      const name = get(source, 'name');
      const url = get(source, 'url');
      const resp = await fetchJson(url);
      if (resp) {
        generator.component(name, resp);
      }
    }
    generator.divComponent();
  },
}

module.exports = app;