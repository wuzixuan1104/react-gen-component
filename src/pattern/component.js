const get = require('../fp/get');

const component = {
  // create div attr
  attr: obj => {
    return `name="${get(obj, 'name')}" elId="${get(obj, 'id')}" props={props}`;
  },
  // create div component
  div: obj => {
    return `
    <Div ${get(obj, 'attrs')}>
        ${get(obj, 'html')}
    </Div>`;
  },
  // create div child
  child: obj => {
    if (get(obj, 'type') === 'TextNode') {
      return `
        {get(props, '${get(obj, 'id')}.children') || '${get(obj, 'html')}'}
      `;
    }
     
    return get(obj, 'html');
  },
  // render component file
  render: obj => {
    return `
import React from 'react';
import Div from '${get(obj, 'buildPath')}/Div';
import get from '${get(obj, 'buildPath')}/methods/get';
import './style.css';

const ${get(obj, 'name')} = ({ props }) => {
  return (
    ${get(obj, 'html')}
  );
};

export default ${get(obj, 'name')};
  `;
  } 
}


module.exports = component;