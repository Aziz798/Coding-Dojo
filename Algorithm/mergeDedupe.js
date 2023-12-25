const arrA = [1, 3, 4, 5];
const arrB = [1, 3, 3, 5, 8, 10];

const arrC = [2,3,3,5,8,10,12];
const arrD = [1,3,4,6];

const arr1 = [1, 3, 3, 5, 8, 10];
const arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

const arr3 = [];
const arr4 = [1,2,2];

const mergeDedupe = (arr1, arr2) => {
 let merged = [];
    let indexOne = 0;
    let indexTwo = 0;

    while (indexOne < arr1.length && indexTwo < arr2.length) {
        let one = arr1[indexOne];
        let two = arr2[indexTwo];

        if (one < two) {
            if (merged[merged.length - 1] !== one) {
                merged.push(one);
            }
            indexOne++;
        } else if (two < one) {
            if (merged[merged.length - 1] !== two) {
                merged.push(two);
            }
            indexTwo++;
        } else {
            // Equal elements
            if (merged[merged.length - 1] !== one) {
                merged.push(one);
            }
            indexOne++;
            indexTwo++;
        }

};
}

console.log(mergeDedupe(arrA, arrB));
console.log(mergeDedupe(arrC, arrD));
console.log(mergeDedupe(arr1, arr2));
console.log(mergeDedupe(arr3, arr4));


const mergeDedupe2 = (arr1, arr2) => {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (!result.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
};
