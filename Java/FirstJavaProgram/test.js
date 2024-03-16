const array = [3,2,4,8,0];
function isSorted(arr) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
}
while (!isSorted(array)) {
    
}