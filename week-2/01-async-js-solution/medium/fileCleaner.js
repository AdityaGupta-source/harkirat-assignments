const fs = require('fs');
let work;
fs.readFile('./garbageFile.txt', 'utf-8' , (err,data) => {
    if(err){
        console.log(err);
    } else{
        data = data.trim()
        console.log(data)
        let ans = "";
        for(let i = 0; i<data.length;){
            if(data[i] !== ' '){
                ans += data[i];
                i++;
            }else{
                while(data[i] === ' '){
                    i++;
                }
                ans += ' ';
            }
        }
        console.log(ans);
        fs.writeFile('./recycledFile.txt',ans,(err) => {
            if(err){
                console.log(err);
            } else{
                console.log("Work done successfully");
            }
        })        
    }
})