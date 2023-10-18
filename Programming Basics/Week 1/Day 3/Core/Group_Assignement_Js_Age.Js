var year=1996;
var mod=(year%10);
for (year; year <= 2023; year++) {

    if (year % 10 ==mod) {
        console.log(year + " Happy decade of JS!");
    } else if (year == 2023) {
        console.log("Happy 27 years of JAVASCRIPT!");
    } else {
        console.log(year + " Js is awesome");
    }
}
