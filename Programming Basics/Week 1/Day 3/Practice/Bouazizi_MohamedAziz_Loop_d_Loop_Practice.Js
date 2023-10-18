// We need a loop since this assignement is repeating.
// At 2 miles.
// At 6miles.
// It will stop when it meets the codition i set.
// Adding two miles .
// miles runned on the treadmail.
var speed=5.5;
for (var miles=2;miles<=6;miles+=2){
    if(speed>=5.5){
        console.log(miles + " miles have been crossed,congrats here is a candy");
    }
    else{console.log("no candy for you")}
}