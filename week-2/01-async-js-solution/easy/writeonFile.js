const fs = require('fs');
fs.readFile('./fileRead.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        data += "\nThanks for reading";
        fs.writeFile('./fileRead.txt', data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File changed successfully");
            }
        });
    }
})