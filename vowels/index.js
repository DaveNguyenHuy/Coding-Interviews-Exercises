// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// regex
function vowels(str) {
  return str.match(/[oaieu]/gi)?.length || 0;
}


// for loop
// function vowels(str) {
//   let count = 0;
//   for (let c of str) {
//     if ('oaieu'.includes((c.toLowerCase()))) {
//       count++
//     }
//   }
//   return count;
// }

module.exports = vowels;
