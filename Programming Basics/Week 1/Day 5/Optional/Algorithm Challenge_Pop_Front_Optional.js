function popFront(arr){
    var front=arr[0];
    var newArr=[];
    for(var i=1;i<=arr.length-1;i++){
        newArr.push(arr[i]);

    }
    return newArr,front;
}