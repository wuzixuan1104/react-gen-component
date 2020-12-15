const get = require('../fp/get');

const css = {
  attrs: obj => {
    return `  ${get(obj, 'prop')}: ${get(obj, 'val')};`;
  },
  render: obj => {
    return `
${get(obj, 'target')} {
  ${get(obj, 'content')}
}
    `;
  }
};

module.exports = css;