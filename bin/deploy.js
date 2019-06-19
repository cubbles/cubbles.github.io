#! /usr/bin/env node
var shell = require('shelljs');
var fs = require('fs-extra');
var path = require('path');

function exec(command, afterCb) {
shell.exec(command, function (code) {
    console.log('Exit code:', code);
    if (afterCb && typeof afterCb === 'function') {
        afterCb();
    }
});
}

exec('npm run docs:build', function () {
    let sourceDirPath = path.join(__dirname, '../vuepress/.vuepress/dist'); 
    let targetDirPath = path.join(__dirname, '../docs');
    fs.move(sourceDirPath, targetDirPath, { overwrite: true }, err => {
        if (err) {
            return console.error('\x1b[31m%s\x1b[0m', err);
        }
        console.log('\x1b[32m%s\x1b[0m', 'Documentation was moved successfully to docs folder');
        exec('git add --all && git commit -m "Deploying documentation" && git push', function () {
            console.log('\x1b[32m%s\x1b[0m', 'Documentation was deployed successfully');
        });
      })
});