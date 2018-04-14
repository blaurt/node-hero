const fs = require('fs');

function stats(file) {
    return new Promise((resolve, reject) => {
        fs.stat(file, (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
}

Promise.all([
    stats(__dirname+'/../assets/file1.jpg'),
    stats(__dirname+'/../assets/file2.jpg'),
    stats(__dirname+'/../assets/file3.jpg'),
])
    .then((data) => console.log(data))
    .catch((err) => console.log(err));