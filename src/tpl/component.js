const get = require('../fp/get');

const component = (obj) => {
  return `
import React from 'react';
import './style.css';

const ${get(obj, 'name')} = () => {
  return (
    ${get(obj, 'html')}
  );
};

export default ${get(obj, 'name')};
  `
}

module.exports = component;