import chalk from "chalk";
import downloadGit from "download-git-repo";
import spinner from "ora";
export function renderByChalk(txt) {
  return chalk.green(txt);
}

export function download(url, projectName) {
  return new Promise((resolve, reject) => {
    const loading = spinner("项目模版下载中...");
    loading.start();
    downloadGit(url, "./", function(err) {
      if (err) {
        loading.fail("项目模版下载失败");
        reject(err);
      }
      loading.succeed("项目模版下载成功");
      resolve();
    });
    // });
  });
}
export default {
  renderByChalk,
  download
};
