#!/usr/bin/env node
const spawn = require("cross-spawn");
var path = require("path");
let file;
const argv = process.argv;
//添加node-babel默认命令
if (!argv.includes["node-babel"]) {
  argv.splice(2, 0, "node-babel");
}

const action = () => {
  console.log(file);
  spawn.sync("npx", ["babel-node", file], {
    stdio: "inherit",
  });
};
var program = require("commander");
program
  .version(require("../package.json").version)
  .usage("-f <name>.js 全局g-babel-node");

program.option("-f, --file <string>", "relative path file");
program.parse(argv);
if (program.file !== undefined)
  file = path.resolve(process.cwd(), program.file);

program.command("node-babel").description("node-babel").action(action);
program.parse(argv);
