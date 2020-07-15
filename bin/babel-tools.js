#!/usr/bin/env node
var register = require('../src/register/index.js');
var babelTip = require('../src/babel-tip/index.js');
var babelNode = require('../src/node-babel/index.js');
var babelNodeInit = require('../src/node-babel/init.js');
var babel = require('../src/babel/index.js');

var program = require('commander');
program.version('0.1.0').action(() => {
  program.outputHelp(text => text);
});

program
  .command('node-babel [arg]')
  .description('在当前目录下安装node-babel的环境')
  .alias('n')
  .description('[arg]: path of node-babel | init command')
  .action(cmd => {
    if (cmd !== 'init') {
      return babelNode(cmd);
    } else {
      babelNodeInit();
    }
  });

program
  .command('register')
  .description('在当前目录下安装babel的register环境，并且生成register.js文件')
  .alias('r')
  .action(() => {
    register();
  });

program
  .command('babel <sourcePath>')
  .description(
    'babel当前目录下的js文件，并将babel的代码生成在当前目录下的babel-tools文件夹'
  )
  .option('-o,--out <outPath>', 'outPath', 'babel-tools/babel')
  .alias('b')
  .action((sourcePath, cmdObj) => {
    const options = Object.assign(cmdObj.opts(), {
      sourcePath
    });
    babel(options);
  });

program
  .command('babel-tip')
  .description('babel 提示')
  .alias('t')
  .action(() => {
    babelTip();
  });

program.parse(process.argv);
