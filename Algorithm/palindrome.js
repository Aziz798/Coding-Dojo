/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. 
- palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
 */
// level
// racecar
// tacocat

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

// take 5-7 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {
    for(let i=0;i<Math.floor(str.length/2);i++){
        for(let j=str.length-1;j>=Math.floor(str.length/2);j--){
            if(str[i]===str[j]){
                return true
            }
            else{
                return false
            }
        }
        }
}
console.log("Result 1:",isPalindrome(str1));
console.log("expected 1:",expected1);
console.log("Result 2:",isPalindrome(str2));
console.log("expected 2:",expected2);
console.log("Result 3:",isPalindrome(str3));
console.log("expected 3:",expected3);
console.log("Result 4:",isPalindrome(str4));
console.log("expected 4:",expected4);
