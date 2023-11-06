function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}
function secondsAngle(s) {
    s = s % 43200;
    var sec = ((360 * s / 43200) + 180) % 360;
    return sec
}
function minutesAngle(s) {
    s = s % 3600;
    var min = ((360 * s / 3600) + 180) % 360;
    return min
}
function hoursAngle() {
    s = s % 60;
    var hr = ((360 * s / 60) + 180) % 360;
    return hr
}
var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

setInterval(() => {
    let s = getSecondsSinceStartOfDay();
    hour.style.transform = `rotate(${hoursAngle(s)}deg)`;
    minutes.style.transform = `rotate(${minutesAngle(s)}deg)`;
    seconds.style.transform = `rotate(${secondsAngle(s)}deg)`;
}, 1000);
