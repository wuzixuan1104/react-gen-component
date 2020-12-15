const fs = require('fs');
const path = require('path');
    
const files = {
  getCurrentDirectoryBase: () => path.basename(process.cwd()),
  directoryExists: filePath => fs.existsSync(filePath),
  readContent: (filePath, json = true) => {
    const data = fs.readFileSync(filePath, { encoding: 'utf8' }, err => {
      console.log('err', err);
    });
    return json && data ? JSON.parse(data) : data;
  },
  writeFile: async (content, filePath, type = 'json') => {
    const folder = path.dirname(filePath);
    if (!files.directoryExists(folder)) {
      await fs.promises.mkdir(folder, { recursive: true }).catch(console.error);
    }
    fs.writeFileSync(filePath, files.format(content, type), err => {
      if (err) throw err;
    });
  },
  appendFile: (content, filePath) => {
    fs.appendFileSync(filePath, content, err => {
      if (err) throw err;
    });
  },
  format: (content, type) => {
    switch (type) {
      case 'json':
        return typeof content === 'object' ? JSON.stringify(content, null, 2) : content;
      default:
        return content;
    }
  }
};

module.exports = files;