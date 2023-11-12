function sums(arr,target){
    var newArr=[];
    var sum=0;
    for (var i=0;i<arr.length-1;i++){
        sum=arr[i]+arr[i+1];
        if(sum===target){
            newArr.push(i,i+1);
            break;
        }
    }
    return newArr;
}
console.log(sums([5,3,4],7));