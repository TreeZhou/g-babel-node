const shell = require('shelljs');
const fs = require('fs');
const register = () => {
  const cmd =
    'cnpm i  @babel/core @babel/register @babel/preset-env @babel/polyfill -D';
  shell.exec(cmd, {}, (code, res, err) => {
    if (err) console.log(err);
  });
  const tmp = `
      require("@babel/register")({
      presets: ["@babel/preset-react","@babel/env"],
      });
      require("@babel/polyfill");
      require('<js>');
      `;
  fs.writeFileSync(process.cwd() + '/register.js', tmp);
};
module.exports = register;
