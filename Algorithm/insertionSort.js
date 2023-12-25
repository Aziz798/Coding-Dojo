const arr1 = [1,3,5,7,9,8,6];
const arr2 = [3,5,7,8,3,4,4];

const insertionSort=(arr)=> {
    for (let i = 1; i < arr.length; i++) {
        const temp = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j --;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
console.log(`Array 1: ${arr1}`);
console.log(`Insert sorted: ${insertionSort(arr1)}`);
console.log();
console.log(`Array 2: ${arr2}`);
console.log(`Insert sorted: ${insertionSort(arr2)}`);