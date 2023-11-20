/* 
Given an array of strings
return the number of times each string occurs (a frequency / hash table)
hasOwnProperty()
*/
var user = { username: "John", age: 35 }

// console.log(user.hasOwnProperty('age'));
// console.log(user.hasOwnProperty('email'));

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

function makeFrequencyTable(arr) {
    const frequencyTable = {};

    for (const str of arr) {
        if (frequencyTable.hasOwnProperty(str)) {
            frequencyTable[str]++;
        } else {
            frequencyTable[str] = 1;
        }
    }

    return frequencyTable;
}
console.log("Result 1:",makeFrequencyTable(arr1));
console.log("expected 1:",expected1);
console.log("Result 2:",makeFrequencyTable(arr2));
console.log("expected 2:",expected2);
console.log("Result 3:",makeFrequencyTable(arr3));
console.log("expected 3:",expected3);