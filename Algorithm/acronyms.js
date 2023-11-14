/* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

const strA = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const strC = "software development life cycle";
const expectedC = "SDLC";

//- Bonus: ignore extra spaces
const strD = "  global   information tracker    ";
// const expectedD = "GIT";

function acronymize(str) {
    const words = str.split(' ');
    let acronym = '';
    for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
        acronym += words[i][0].toUpperCase();
    }
    }
    return acronym;
}

console.log((acronymize(strD)));