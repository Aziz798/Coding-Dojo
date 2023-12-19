// bubbleSort()
/* 
    For review, create a function that uses BubbleSort to sort an unsorted array in-place.
    For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
    -> Assume there are no duplicates
*/
//             i
//               j
const nums1 = [5, 3, 4, 2, 1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const nums4 = [1, 8, 7, 5, 5, 4, 3, 5, 10, 9];

const bubbleSort= nums =>{ 
    for (let i = 0; i < nums.length- 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
}

const quickSort = (nums, left = 0, right = nums.length - 1) => {
    const swap = (i, j) => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    };

    const partition = (left, right) => {
        const pivot = nums[right];
        let i = left - 1;

        for (let j = left; j < right; j++) {
            if (nums[j] < pivot) {
                i++;
                swap(i, j);
            }
        }
        swap(i + 1, right);
        return i + 1;
    };

    if (left < right) {
        const pivotIndex = partition(left, right);
        quickSort(nums, left, pivotIndex - 1);
        quickSort(nums, pivotIndex + 1, right);
    };

    return nums;
}

console.log(`num1 : ${nums1} , num1 bubble sorted: ${bubbleSort(nums1)}`);
console.log();

console.log(`num2 : ${nums2} , num2 bubble sorted: ${bubbleSort(nums2)}`);
console.log();

console.log(`num3 : ${nums3} , num3 bubble sorted: ${bubbleSort(nums3)}`);
console.log();

console.log(`num4 : ${nums4} , num4 bubble sorted: ${bubbleSort(nums4)}`);

console.log('🎈🎈🎈🎈🎈🎈🎈🎈');

console.log(`num1 : ${nums1} , num1 quick sorted: ${quickSort(nums1)}`);
console.log();

console.log(`num2 : ${nums2} , num2 quick sorted: ${quickSort(nums2)}`);
console.log();

console.log(`num3 : ${nums3} , num3 quick sorted: ${quickSort(nums3)}`);
console.log();

console.log(`num4 : ${nums4} , num4 quick sorted: ${quickSort(nums4)}`);
