/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/
const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";
const str5="aabacdc";
const expected5="badc";

/**
 * De-dupes the given string.
 */

function stringDedupe(str) {
    const expect = new Set();
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        if (expect.has(char)==false) {
            result = char + result;
            expect.add(char);
        }
    }
    return result;
}
console.log("Result 1:",stringDedupe(str1));
console.log("expected 1:",expected1);
console.log("Result 2:",stringDedupe(str2));
console.log("expected 2:",expected2);
console.log("Result 3:",stringDedupe(str3));
console.log("expected 3:",expected3);
console.log("Result 4:",stringDedupe(str4));
console.log("expected 4:",expected4);
console.log("Result 5:",stringDedupe(str5));
console.log("expected 5:",expected5);