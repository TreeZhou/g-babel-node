const shell = require('shelljs');

const init = () => {
  const cmd = 'cnpm i @babel/node @babel/core @babel/preset-env -D';
  shell.exec(cmd, {}, (code, res, err) => {
    if (err) console.log(err);
  });
};
module.exports = init;
