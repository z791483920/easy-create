import program from "commander";
import utils from "./utils/utils";

import init from './init';
import pkg from '../package.json';

program.usage("<command> [options]");
program
  .version(pkg.version)
  .parse(process.argv);



program
  .command("init")
  .alias("i")
  .description("初始化项目操作")
  .action(function(options) {
    init(options)
  })
  .on("-h, --help", function() {
    console.log("后续添加...");
  });

  program.parse(process.argv);


if (!process.argv.slice(2).length) {
  program.outputHelp(utils.renderByChalk);
}


//   console.log(program.args, 'program.args')
