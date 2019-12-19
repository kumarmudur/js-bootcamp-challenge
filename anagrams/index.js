// ---- Directions ------
// check to see if two provided strings are anagrams of eachother
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. COnsider capital letters to be the same as lower case
// ---- examples -----
// anagrams('rail safety', 'fairy tales') === true
// anagrams('RAIL! SAFETY! ', 'fairy tales') === true
// anagrams('Hi there', 'Bye there') ==== false

// solution 1
function anagrams(strA, strB) {
    const aCharMap = buildCharMap(strA);
    const bCharMap = buildCharMap(strB);
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};
    
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

// solution 2
function anagrams(strA, strB) {
    return cleanString(strA) === cleanString(strB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('RAIL! SAFETY! ', 'fairy tales'));