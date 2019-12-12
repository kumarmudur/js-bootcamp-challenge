// Directions
// Given a string, return a new string with the reversed
// order of characters
// ===== Examples =====
// reverse('apple') ==== 'elppa'
// reverse('hello') ==== 'olleh'
// reverse('Greetings!') === '!sgniteerG'

// solution1
function reverse(str) {
    return str.split('').reverse().join('');
}


// solution2
function reverse(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}


// solution3
function reverse(str) {
    return str.split('').reduce((rev, char) => {
        return char + rev; 
     }, '');
 }
  
