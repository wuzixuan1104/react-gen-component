const get = require('../fp/get');
const file = require('../utils/files');
const path = require('path');
const formatter = require('html-formatter');
const tplComponent = require('../pattern/component');
const tplCss = require('../pattern/css');
const ID = require('../utils/uniqID');
const copydir = require('copy-dir');;

const CHILD_BLOCK = '#child#';
const COPY_FOLDER = 'tpl' + path.sep + 'd2c';

const makePath = (sub, ext = '.js') => {
  return path.resolve(__dirname, '..' + path.sep, sub + ext);
}

const generator = {
  styles: {},
  buildPath: '',
  makeDivJs: false,

  setBuild: v => generator.buildPath = v,
  component: async (name, json) => {
    console.log(`- Create: ${name}`);
    
    generator.styles = {};
    const html = formatter.render(generator.jsonToHtml(json));
    if (html && name) {
      const content = await generator.mergeTpl(name, html);

      generator.makeDivJs = true;
      const mainPath = generator.buildPath + path.sep + name + path.sep;
      
      // create index.js
      const indexFilePath = makePath(mainPath + 'index');
      file.writeFile(content, indexFilePath, 'html');
      console.log(`-- index: ${indexFilePath}`);

      // create style.js
      const cssContent = generator.jsonToCss();
      const cssFilePath = makePath(mainPath + 'style', '.css');
      if (cssContent) file.writeFile(cssContent, cssFilePath, 'html');
      console.log(`-- css: ${indexFilePath}`);
    }
  },
  divComponent: () => {
    if (!generator.makeDivJs) return;
    const srcDir = path.resolve(__dirname, '..' + path.sep, COPY_FOLDER);
    const destDir = path.resolve(__dirname, '..' + path.sep, generator.buildPath);
    
    copydir(srcDir, destDir, {
      utimes: true,  // keep add time and modify time
      mode: true,    // keep file mode
      cover: true    // cover file when exists, default is true
    }, function(err){
      if(err) throw err;
      console.log('@copy Tpl method: finish');
    });
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
