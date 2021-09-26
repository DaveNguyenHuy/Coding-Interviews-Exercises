// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) { // O(n)
//   const result = [0, 1] // 1
//   for (let i = 2; i <= n; i++) { // n - 2
//     result.push(result[i-1] + result[i-2]) // n - 2
//   }
//   return result[n]
// }


function memo(fn) {
  const cached = {};
  return (...args) => {
    if (cached[args]) return cached[args]
    const result = fn(...args) //
    cached[args] = result;
    return result;
  }
}


/**
 * @param {number} n - a number, n > 0
 * @returns {number} - n-th fibonacci
 */
function calculateFib(n) {
  return n < 2 ? n : fib(n-1) + fib(n-2)
}

const fib = memo(calculateFib)

module.exports = fib;
