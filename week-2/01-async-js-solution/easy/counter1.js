let n = 7;
let timer = 1;
let a;
a = setInterval(() => {
    console.log(timer);
    timer++;
},1000)
setTimeout(() => {
    clearInterval(a);
}, (n+1) * 1000);