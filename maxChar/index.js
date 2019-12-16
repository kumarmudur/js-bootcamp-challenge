// -------- Directions
// Given a string, return the character that is most 
// Commonly used in the string
// ------- Examples
// maxChar('abcccccccccd')  ==== 'c'
// maxChar('apple 12311111') === '1'

function maxChar(str) {
   let charMap = {} 
   let max = 0;
   let maxChar = ''
   for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
   }

   for (let char of str) {
       if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
       }
   }
   return maxChar;
}

console.log(maxChar('abcccccd'));
