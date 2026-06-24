const fs = require('fs');
fs.readFile('./fileRead.txt', 'utf-8',(err,data) => {
    if(err){
        console.log(err);
    } else{
        console.log(data);
    }
})
for(let i = 0; i<=100000; i++){
    console.log(i);
}