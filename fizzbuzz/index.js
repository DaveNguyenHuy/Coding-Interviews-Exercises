// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i<=n ; i++) {
    const isMultipleOfThree = i % 3 === 0;
    const isMultipleOfFive = i % 5 === 0;
    if (isMultipleOfFive && isMultipleOfThree) {
      console.log('fizzbuzz')
    } else if (isMultipleOfFive) {
      console.log('buzz')
    } else if (isMultipleOfThree) {
      console.log('fizz')
    }
    else {
      console.log(i)
    }
  }
}

module.exports = fizzBuzz;
