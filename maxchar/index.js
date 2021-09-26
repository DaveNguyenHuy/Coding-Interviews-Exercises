// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = str.split('').reduce((init, c) => {
    init[c] = init[c] + 1 || 1;
    return init
  }, {})
  let maxValue = 0, maxC;
  for(key in obj) {
    if (obj[key] > maxValue) {
      maxC = key
      maxValue = obj[key];
    }
  }
  return maxC;
}

maxChar('ccccddadakmgshnf;kj')

module.exports = maxChar;
