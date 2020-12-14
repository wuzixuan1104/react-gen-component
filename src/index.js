const config = require('./models/config');
const app = require('./models/app');

const isExistConfig = config.exist();

if (!isExistConfig) {
  config.create();
  process.exit();
}

const tpl = config.getContent();
app.set(tpl);
app.run();

