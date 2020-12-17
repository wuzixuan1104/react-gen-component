const R = require("ramda");

const get = R.curry((obj, attr, d4 = null) => {
  const pathString = R.pipe(R.split(/[[\].]/), R.path);
  return pathString(attr)(obj) || d4;
});

export default get;
