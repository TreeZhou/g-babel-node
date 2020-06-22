#!/usr/bin/env node
var shell = require('shelljs');
var path = require('path');
var fs = require('fs');
let file;
const argv = process.argv;

const init = () => {
  const cmd = 'cnpm i @babel/node @babel/core @babel/preset-env -D';
  shell.exec(cmd, {}, (code, res, err) => {
    if (err) console.log(err);
  });
};

const babelNode = dir => {
  file = path.resolve(process.cwd(), dir);
  const cmd = `npx babel-node ${file} --presets @babel/env`;
  shell.exec(cmd, {}, (code, res, err) => {
    if (err) console.log(err);
  });
};

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
    require("../src/pages/CodeGenerator/cli");
    require('<js>');
    `;
  fs.writeFileSync(process.cwd() + '/babel.js', tmp);
};

var program = require('commander');
const { fstat } = require('fs');
program.version('0.1.0').action(function (cmd, ee, rr) {
  console.log('babel-tools');
});
program
  .command('node-babel <cmd>')
  .alias('n')
  .description('<cmd>:path | init ')
  .action((cmd, dd) => {
    if (cmd !== 'init') {
      return babelNode(cmd);
    } else {
      init();
    }
  });

program
  .command('register')
  .alias('r')
  .action((cmd, dd) => {
    register();
  });

program.parse(argv);
