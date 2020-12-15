const get = require('../fp/get');

const component = {
  create: (obj) => {
    return `data-name="${get(obj, 'name')}" className={{${get(obj, 'id')}: true, ...get(props, "${get(obj, 'id')}.class")}} style={get(props, "${get(obj, 'id')}.style")} {...get(props, "${get(obj, 'id')}.fn")}`;
  },

  render: (obj) => {
    return `
import React from 'react';
import './style.css';
import '../fp/get';

const ${get(obj, 'name')} = ({ props }) => {
  return (
    ${get(obj, 'html')}
  );
};

export default ${get(obj, 'name')};
  `
  }
}


module.exports = component;