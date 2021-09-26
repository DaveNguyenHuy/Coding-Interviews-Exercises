// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution 3
// function reverse(str) {
//   debugger;
//   return str.split('').reduce((init, c) => c + init, '')
// }

// solution 1
// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// solution 2
function reverse(str) {
  let result = ''
  for(c of str) {
    result = c + result;
  }
  return result;
}

module.exports = reverse;
