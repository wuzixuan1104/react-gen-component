const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => path.basename(process.cwd()),
  directoryExists: filePath => fs.existsSync(filePath),
  readContent: filePath => {
    const data = fs.readFileSync(filePath, { encoding: 'utf8' }, err => {
      console.log('err', err);
    });
    return data ? JSON.parse(data) : data;
  },
  writeFile: (content, filePath) => {
    fs.writeFileSync(filePath, typeof content === 'object' ? JSON.stringify(content, null, 2) : content, err => {
      if (err) throw err;
    });
  },
  appendFile: (content, filePath) => {
    fs.appendFileSync(filePath, content, err => {
      if (err) throw err;
    });
  }
};