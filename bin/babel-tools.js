#!/usr/bin/env node
var register = require('../src/register/index.js');
var babelNode = require('../src/node-babel/index.js');
var babelNodeInit = require('../src/node-babel/init.js');

var program = require('commander');
program.version('0.1.0').action(() => {
  program.outputHelp(text => text);
});

program
  .command('node-babel <arg>')
  .alias('n')
  .description('<arg>: path of node-babel | init command')
  .action(cmd => {
    if (cmd !== 'init') {
      return babelNode(cmd);
    } else {
      babelNodeInit();
    }
  });

program
  .command('register')
  .alias('r')
  .action(() => {
    register();
  });

program.parse(process.argv);
