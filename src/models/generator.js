const get = require('../fp/get');
const file = require('../utils/files');
const path = require('path');
const formatter = require('html-formatter');
const tplComponent = require('../pattern/component');
const tplCss = require('../pattern/css');
const ID = require('../utils/uniqID');

const CHILD_BLOCK = '#child#';

const makePath = (sub, ext = '.js') => {
  return path.resolve(__dirname, '..' + path.sep, sub + ext);
}

const generator = {
  styles: {},
  buildPath: '',
  makeDivJs: false,

  setBuild: v => generator.buildPath = v,
  component: async (name, json) => {
    generator.styles = {};
    const html = formatter.render(generator.jsonToHtml(json));
    if (html && name) {
      const content = await generator.mergeTpl(name, html);

      generator.makeDivJs = true;
      const mainPath = generator.buildPath + path.sep + name + path.sep;
      
      // create index.js
      file.writeFile(content, makePath(mainPath + 'index'), 'html');

      // create style.js
      const cssContent = generator.jsonToCss();
      if (cssContent) file.writeFile(cssContent, makePath(mainPath + 'style', '.css'), 'html');
    }
  },
  divComponent: async () => {
    if (!generator.makeDivJs) return;
    const content = await file.readContent(makePath('tpl' + path.sep + 'div', ''), false);
    file.writeFile(content, makePath(generator.buildPath + path.sep + 'Div'), 'html');
  },
  mergeTpl: async (name, html) => {
    return tplComponent.render({
      name: name.split('/').pop(),
      html,
      buildPath: generator.buildPath,
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
    const type = get(json, 'type');
    
    const id = generator.buildPath + ID();
    generator.styles[id] = styleObj;
    
    const addChildHtml = children ? CHILD_BLOCK : (type === 'TextNode' ? generator.excludeText(name) : '');
    
    res = tplComponent.div({
      attrs: tplComponent.attr({name, id}),
      html: tplComponent.child({id, type, html: addChildHtml}),
    });
    
    if (children) {
      const childrenHtml = children.map(c => {
        return generator.jsonToHtml(c);
      }).join('');
      res = res.replace(new RegExp(`(${CHILD_BLOCK})`, 'i'), childrenHtml);
    }
    
    return res;
  },
  excludeText: (text) => {
    return ['$'].indexOf(text) !== -1 ? text + ' ' : text;
  }
}

module.exports = generator;
