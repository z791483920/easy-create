import inquirer from 'inquirer';
import projects from './utils/projects';
import { download } from './utils/utils';
import fs from 'fs';

const step = [
  {
    type: 'list',
    message: '请选择需要下载的项目模版',
    name: 'item',
    choices: Object.keys(projects)
  },
  {
    name: 'name',
    name: 'name',
    message: '请输入项目名: '
  },
  {
    name: 'description',
    name: 'description',
    message: '请输入项目描述: '
  }
];
function init(options) {
  inquirer.prompt(step).then(result => {
    const { item, name, description } = result;
    const { url } = projects[item];
    const fileName = process.cwd();
    const pkgName = `${fileName}/package.json`;
    download(url).then(result => {
      if (fs.existsSync(pkgName)) {
        const data = fs.readFileSync(pkgName).toString();
        let json = JSON.parse(data);
        json.name = name;
        json.description = description;
        fs.writeFileSync(pkgName, JSON.stringify(json, null, '\t'), err => {});
      }
    });
  });
}

export default init;
