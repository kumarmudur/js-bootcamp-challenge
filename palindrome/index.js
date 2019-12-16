// Directions 
// Given a string, return true if the string is a palindrome 
// or false if it is not.  Palindromes are strings that
// Examples
// palindrome('abba') === true
// palindrome('abcdfh') ===  false

// solution 1
function palindrome(str) {
    const rev = str.split('').reverse().join('');
    return str === rev;
}

// solution 2
function palindrome(str) {
   return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}


console.log(palindrome('abba'));
