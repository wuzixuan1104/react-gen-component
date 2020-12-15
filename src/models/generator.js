const get = require('../fp/get');
const file = require('../utils/files');
const path = require('path');
const formatter = require('html-formatter');
const tplComponent = require('../tpl/component');
const tplCss = require('../tpl/css');
const ID = require('../utils/uniqID');

const CHILD_BLOCK = '{{{{{{{{{{child}}}}}}}}}}';

const makePath = (sub, ext = '.js') => {
  return path.resolve(__dirname, '..' + path.sep, sub + ext);
}

const generator = {
  styles: {},

  component: async (name, json, buildPath) => {
    generator.styles = {};
    const html = formatter.render(generator.jsonToHtml(json));
    if (html && name) {
      const content = await generator.mergeTpl(name, html);
      // make index.js
      file.writeFile(content, makePath(buildPath + path.sep + name + path.sep + 'index'), 'html');
      // make style.js
      const cssContent = generator.jsonToCss();
      if (cssContent) file.writeFile(cssContent, makePath(buildPath + path.sep + name + path.sep + 'style', '.css'), 'html');
    }
  },
  mergeTpl: async (name, html) => {
    return tplComponent({
      name: name.split('/').pop(),
      html
    });
  },
  jsonToCss: () => {
    if (generator.styles === undefined) return false;
    return Object.keys(generator.styles).reduce((acc, className) => {
      return acc + tplCss.render({
        target: `.${className}`,
        content: Object.keys(generator.styles[className]).reduce((accAttrs, attr) => {
          return accAttrs + "\n" + tplCss.attrs({
            prop: attr, 
            val: generator.styles[className][attr]}
          );
        }, '').trim(''),
      });
    }, '');
  },
  jsonToHtml: json => {
    if (!json) return null;

    let res = '';
    const name = get(json, 'name');
    
    const styleObj = get(json, 'style');
    const children = get(json, 'children');
    
    const id = 'gen_style' + ID();
    generator.styles[id] = styleObj;

    const addChildHtml = children ? CHILD_BLOCK : '';
    res = `<div data-name="${name}" className="${id}">${addChildHtml}</div>`;
    
    if (children) {
      const childrenHtml = children.map(c => {
        return generator.jsonToHtml(c);
      }).join();
      res = res.replace(CHILD_BLOCK, childrenHtml);
    }
    return res;
  },
}

module.exports = generator;
