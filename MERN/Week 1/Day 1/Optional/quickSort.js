const arr = [4, 2, 7, 1, 3];
const arr2=[2,4,5,8,100,45];

function partition(arr, low, high) {
    const pivot = arr[low];
    let i = low - 1;
    let j = high + 1;

    while (true) {
        do {
            i++;
        } while (arr[i] < pivot);

        do {
            j--;
        } while (arr[j] > pivot);

        if (i >= j) {
            return j;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function quicksort(arr, low, high) {
    if (low < high) {
        const pivotPosition = partition(arr, low, high);
        quicksort(arr, low, pivotPosition);
        quicksort(arr, pivotPosition + 1, high);
    }
}



quicksort(arr, 0, arr.length - 1);
quicksort(arr2, 0, arr2.length - 2);
console.log("Sorted array:", arr);
console.log();
console.log(arr2);
