const fs = require('fs');
const { exec } = require('child_process');

const promise = new Promise((resolve, reject) => {
    console.log('Checking themes');
    if (fs.existsSync(__dirname + '/../themes/replica')) {
        resolve();
    } else {
        console.log('Themes not exist!');

        exec('git clone git@github.com:wangcansunking/hexo-theme-replica.git themes/replica', (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                console.log('Downloaded!');
                resolve();
            }
        });

        console.log('Downloading themes!');
    }
});

module.exports = promise;

