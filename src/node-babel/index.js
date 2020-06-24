const shell = require('shelljs');
const path = require('path');

const babelNode = dir => {
  file = path.resolve(process.cwd(), dir);
  const cmd = `npx babel-node ${file} --presets @babel/env`;
  shell.exec(cmd, {}, (code, res, err) => {
    if (err) console.log(err);
  });
};
module.exports = babelNode;
