var chalk = require('_chalk@4.1.0@chalk');

module.exports = async function babel() {
  const msg = `
  install dependencies:
  cnpm install --save-dev @babel/core @babel/cli @babel/preset-env
  add script to package.json:
  "babel": "npx babel ./dist/js --out-dir ./dist/js --presets=@babel/preset-env"`;
  console.log(chalk.green(msg));
};
