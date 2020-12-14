const R = require('ramda');

module.exports = (obj, str) => {
  const pathString = R.pipe(R.split(/[[\].]/), R.path);
  const result = pathString(str)(obj);
  return result;
}