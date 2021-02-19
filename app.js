const fs = require('fs');
const path = require('path');

const girls = path.join(__dirname, '1800');
const boys = path.join(__dirname, '2000');

function sortDir (girls, boys) {
    fs.readdir(girls, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        files.forEach(file => {
            fs.readFile(path.join(girls, `${file}`), (err1, data) => {
                if (err1) {
                    console.log(err1);
                    return;
                }
                let sortData = data.toString().search(('"gender":"male"'));
                if (sortData !== -1) {
                    fs.rename(path.join(girls, `${file}`), path.join(boys, `${file}`), err2 => {
                        if (err2) {
                            console.log(err2);
                            return;
                        }
                    })
                }
            })
        })
    })


    fs.readdir(boys, (err, files) => {
        if (err) {
            console.log(err);
            return;
        }

        files.forEach(file => {
            fs.readFile(path.join(boys, `${file}`), (err1, data) => {
                if (err1) {
                    console.log(err1);
                    return;
                }
                let sortData = data.toString().search(('"gender":"female"'));
                if (sortData !== -1) {
                    fs.rename(path.join(boys, `${file}`), path.join(girls, `${file}`), err2 => {
                        if (err2) {
                            console.log(err2);
                            return;
                        }
                    })
                }
            })
        })
    })
}
sortDir(girls,boys);
