/* 
String Encode

You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

// ! Bonus
const str4 = "bbcc";
const expected4 = "bbcc";

const str5 = "bc";
const expected5 = "bc";
const str6 ="bbbc";
const expected6="b3c1";
const str7="bbbccccddd";
const expected7="b3c4d3";

function encodeStr(str) {
    let encodedStr = "";
    let count = 1;
    if(str.length<=4){
        if(str[0]===str[1]&& str[0]===str[2]){
            for (let i = 0; i < str.length; i++) {
                if (str[i] === str[i + 1]) {
                    count++;
                } else {
                    encodedStr += str[i] + count;
                    count = 1;
                }
            }
        }
        else{
            encodedStr=str;
        }
    }
    else {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                count++;
            } else {
                encodedStr += str[i] + count;
                count = 1;
            }
        }
    }
    console.log("result: "+encodedStr);
    return encodedStr
}
encodeStr(str1);
console.log("expected: "+expected1);
encodeStr(str2);
console.log("expected: "+expected2);
encodeStr(str3);
console.log("expected: "+expected3);
encodeStr(str4);
console.log("expected: "+expected4);
encodeStr(str5);
console.log("expected: "+expected5);
encodeStr(str6);
console.log("expected: "+expected6);
encodeStr(str7);
console.log("expected: "+expected7);