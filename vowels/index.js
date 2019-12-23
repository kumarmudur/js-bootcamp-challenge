// -------- Directions ---------
// write a function that returns the number of vowels
// used in a string, vowels are the characters 'a', 'e', 'i', 'o', 'u'
// ------- Examples ------
// vowels('Hi There!') =======> 3;
// vowels('Why do you ask?') ======> 4
// vowels('why') =======> 0

// solution 1
function vowels(str) {
    let count = 0;
    const checker = [ 'a', 'e', 'i', 'o', 'u'];
    const lowerCaseStr = str.toLowerCase();
    for (let char of lowerCaseStr) {
        if (checker.includes(char)) {
            count++
        }
    }
    return count;
}

// solution 2 regex
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

console.log(vowels('I Hi There'));