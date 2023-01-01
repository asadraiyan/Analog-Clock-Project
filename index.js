setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// console.log(new Date())
// console.log(new Date().getHours())
// console.log("asad =", d)
// 30 * 20 + 27 / 2;
// 30 * 20 + 13.5
// 600 + 13.5
// 613.5
