//  #1
// var arr1 = [8, 6, 7, 5, 3, 0, 9];
//  #2
// var arr2 = [4, 7, 13, 13, 19, 37, -2];
//  #3
// var arr3 = [6, 2, 12, 14, -24, 5, 0];

// Challenge1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
for(var i=0;i<arr1.length;i++){
    console.log(i);
}
// Challenge2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
var count=0;
for(var i=0;i<arr2.length;i++){
    count=count+arr2[i];
}console.log(count);
// Challenge3
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(var i=0;i<arr3.length;i++){
    if(arr3[i]>5){
        console.log(arr[i]);
    }
}
// Bonus challenge
var arr3 = [6, 2, 12, 14, -24, 5, 0];
for(var i=0;i<arr3.length;i++){
    if(arr3[i]<5){
        arr3[i]="No dice";
    }
}

