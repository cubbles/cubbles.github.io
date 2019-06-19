#! /usr/bin/env node
var shell = require('shelljs');
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
    exec('git add --all && git commit -m "Deploying documentation" && git push', function () {
        console.log('\x1b[32m%s\x1b[0m', 'Documentation was deployed successfully');
    });
});