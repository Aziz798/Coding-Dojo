
const arrA = [1, 3, 4, 5];
const arrB = [1, 3, 3, 5, 8, 10];

const arrC = [2,3,3,5,8,10,12];
const arrD = [1,3,4,6];

const arr1 = [1, 3, 3, 5, 8, 10];
const arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

const arr3 = [];
const arr4 = [1,2,2];

const mergeDedupe = (arr1, arr2) => {
    const merged = [];
    let i = 0;
    while (i < arr1.length) {
        if (!merged.includes(arr1[i])) {
            merged.push(arr1[i]);
        };
        i++;
    };
    i = 0;
    while (i < arr2.length) {
        if (!merged.includes(arr2[i])) {
            merged.push(arr2[i]);
        };
        i++;
    };
    merged.sort((a, b) => a - b);
    
    return merged;
};


console.log(mergeDedupe(arrA, arrB));
console.log(mergeDedupe(arrC, arrD));
console.log(mergeDedupe(arr1, arr2));
console.log(mergeDedupe(arr3, arr4));
