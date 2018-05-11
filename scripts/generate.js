const { exec } = require('child_process');

const checkThemesPromise = require('./checkThemes');

checkThemesPromise.then(() => {
    return new Promise((resolve, reject) => {
        exec('hexo generate', (err, stdout, stderr) => {
            if (err) {
                console.error(stderr);
                reject(err);
            } else {
                console.log(stdout)
                resolve();
            }
        });

        console.log('Files generated!')
    })
}).catch(err => console.error(err));

