// Debug the following code that removes negative values from an array

function removeNegatives( arr) {
    // we dont put var in the paremeters of thr function
    for(var i=0; i<=arr.length-1; i++) {
        // the stop of the loop was wrong
        if(arr[i] <=0) {
            arr[i] = arr.pop();
            i--;
        }
    }
    return array;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);