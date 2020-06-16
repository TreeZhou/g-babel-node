#!/usr/bin/env node
var shell = require('shelljs');
var path = require('path');
let file;
const argv = process.argv;
if (!argv.includes('node-babel') && !argv.includes('init')) {
  argv.splice(2, 0, 'node-babel');
}

const init = () => {
  const cmd = 'cnpm i @babel/node @babel/core @babel/preset-env -D';
  shell.exec(cmd, {}, (...arg) => {
    console.log(...arg);
  });
};

const action = dir => {
  file = path.resolve(process.cwd(), dir);
  const cmd = `npx babel-node ${file} --presets @babel/env`;
  shell.exec(cmd, {}, (...arg) => {
    console.log(...arg);
  });
};
var program = require('commander');
program.command('node-babel <dir>').action(action);
program.command('init').description('init').action(init);

program.parse(argv);
