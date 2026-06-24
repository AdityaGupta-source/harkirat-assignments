let n = 7;
let timer = 1;
for (let i = 0; i < n; i++) {
    setTimeout(() => {
        console.log(timer);
        timer++;
    },1000*i)
}