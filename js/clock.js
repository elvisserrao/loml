function checkTime(i) {
    if (i<10) {
        i = "0" + i;
    }
    return i;
}

function startClock () {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {startClock()}, 500);
}

startClock();