const files = require('../utils/files');
const path = require('path');

const config = {
  name: 'gen.config.json',
  exist: () => files.directoryExists(config.name),
  getContent: (filePath) => files.readContent(filePath || config.name),

  create: async () => {
    const tplPath = path.resolve(__dirname, '..' + path.sep, 'tpl' + path.sep + config.name);
    const data = await config.getContent(tplPath);

    if (Object.keys(data).length > 0) {
      files.writeFile(data, config.name);

      console.log('');
      console.log(chalk.yellow('Success - create [' + config.name + ']'));
      console.log(chalk.red('Please init this file before executing !!'));
      console.log('');
      console.log('');
      return true;
    }

    console.log('Fail to create config file...');
    return false;
  }
}
module.exports = config;