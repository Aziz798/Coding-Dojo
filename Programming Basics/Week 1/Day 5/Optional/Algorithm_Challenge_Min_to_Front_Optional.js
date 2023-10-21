function minToFront(arr) {
    var minIndex = 0;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    var minValue = arr[minIndex]
    for (var i = minIndex; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    
    arr[0] = minValue;
  
    return arr;
}