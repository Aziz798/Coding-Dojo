// Print odds 1-20
for(i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i);
    }
}
// Decreasing Multiples of 3
for(i=100;i>=0;i--){
    if(i%3==0){
        console.log(i);
    }
}
// Print the sequence
for(i=4;i>-4;i-=1.5){
    console.log(i)
}
// Sigma
var sigma=0;
for(i=1;i<=100;i++){
    sigma+=i
}
console.log(sigma);
// Factorial
var Factorial=1;
for(i=2;i<=12;i++){
    Factorial=Factorial*i;
}
console.log(Factorial);