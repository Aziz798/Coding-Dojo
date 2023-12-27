/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/


const diagonalDifference = sqrMatrix => {
    let leftToRight = 0;
    let rightToLeft = 0;
    for (let i = 0; i < sqrMatrix.length; i++) {
        leftToRight += sqrMatrix[i][i];
        rightToLeft += sqrMatrix[i][sqrMatrix.length - 1 - i];
    };
    return Math.abs(leftToRight - rightToLeft);
}
console.log(squareMatrix1);
console.log(`Èxpected ${expected1} result:${diagonalDifference(squareMatrix1)}`);
console.log();
console.log(squareMatrix2);
console.log(`Èxpected ${expected2} result:${diagonalDifference(squareMatrix2)}`);