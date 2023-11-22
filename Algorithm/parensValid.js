/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid

Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
*/
const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

const str5 = "a)b((c))";
const expected5 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

function parensValid(str="") {
    let count = 0;

    for (let ind of str) {
        if (ind === '(') {
            count++;
        } else if (ind === ')') {
            if (count === 0) {
                return false; 
            }
            count--; 
        }
    }
    return count === 0;
}
console.log("result 1 :",parensValid(str1),"expected 1 :",expected1);
console.log("result 2 :",parensValid(str2),"expected 2 :",expected2);
console.log("result 3 :",parensValid(str3),"expected 3 :",expected3);
console.log("result 4 :",parensValid(str4),"expected 4 :",expected4);
console.log("result 5 :",parensValid(str5),"expected 5 :",expected5);