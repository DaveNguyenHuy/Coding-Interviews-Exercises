// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution 1
// function capitalize(str) {
//   const arr = str.split('')
//   return arr.reduce((init, c, index) => {
//     if (index === 0) {
//       c = c.toUpperCase()
//     }
//     if (c === ' ') {
//       arr[index + 1] = arr[index + 1].toUpperCase();
//     }
//     return init + c;
//   }, '')
// }


// solution 2
// function capitalize(str) {
//   const arr = str.split(' ')
//   return arr.map(it => {
//     return it[0].toUpperCase() + it.slice(1)
//   }).join(' ')
// }

// solution 3
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let c of str.slice(1)) {
    const last = result.slice(-1)
    if (last === ' ') {
      result += c.toUpperCase()
    } else {
      result += c
    }
  }
  return result;
}

module.exports = capitalize;
