

const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

setInterval(upDateClock ,1000)

function upDateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampmEl = "AM"

    if (h > 12) {
        h = h - 12
        ampmEl = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm = (innerText = ampmEl);

}

upDateClock()