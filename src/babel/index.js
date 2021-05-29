var path = require('path');
var rimraf = require('rimraf').sync;
var chalk = require('chalk');
var shell = require('shelljs');
const cwd = process.cwd();
const tempPath = path.resolve(__dirname, 'temp');

async function copyFile(sourcePath) {
  return new Promise((resolve, reject) => {
    const cmdStr = `cp -r ${sourcePath} ${tempPath}`;
    var stderr = shell.exec(cmdStr).stderr;
    stderr ? reject(stderr) : resolve('copy successful');
  });
}

function _babel(out) {
  return new Promise((resolve, reject) => {
    out = path.resolve(cwd, out);
    const projectRootPath = path.resolve(__dirname, '../../');
    const cmdStr = `cd ${projectRootPath} && npm run babel -- ${tempPath} -d ${out}`;
    var stderr = shell.exec(cmdStr).stderr;
    stderr ? reject(stderr) : resolve('babel successful');
  });
}

module.exports = async function babel({ sourcePath, out }) {
  try {
    let info = await copyFile(sourcePath);
    console.log(chalk.green(info));
    info = await _babel(out);
    console.log(chalk.green(info));
  } catch (error) {
    console.log(chalk.red(error));
  }
  rimraf(`${tempPath}/*`);
};
