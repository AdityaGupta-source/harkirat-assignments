clock = 0;
setInterval(() => {
    let h = String(Math.floor(clock / 3600)).padStart(2, '0');
    let min = String(Math.floor(clock / 60) % 60).padStart(2, '0');
    let sec = String(clock % 60).padStart(2, '0');
    console.log(`${h}:${min}:${sec}`)
    clock++;
},1000);