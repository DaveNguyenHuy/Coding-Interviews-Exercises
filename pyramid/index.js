// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level= '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n -1) {
    console.log(level)
    pyramid(n, row + 1)
  } else {
    level += Math.abs(level.length - n + 1) <= row ? '#' : ' '
    pyramid(n, row, level)
  }
}

pyramid(4)

module.exports = pyramid;
