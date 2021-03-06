#! /usr/bin/env node
var shell = require('shelljs');

function exec(command, afterCb) {
shell.exec(command, function (code) {
    console.log('Exit code:', code);
    if (afterCb && typeof afterCb === 'function') {
        afterCb();
    }
});
}

exec('npm run docs_10:build', function () {
    exec('git add --all && git commit -m "Deploying documentation" && git push', function () {
        console.log('\x1b[32m%s\x1b[0m', 'Documentation (Model Version <= 10.0.0) was deployed successfully');
    });
});