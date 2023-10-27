// Reverse the component of the array without making a new array
function reverseArray(arr) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
// Test
var f =reverseArray([5,4,3,2,1]);
console.log(f)