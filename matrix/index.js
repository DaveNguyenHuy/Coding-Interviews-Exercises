// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = Array(n).fill(null).map(()=>Array(n).fill(null))
  let count = 1
  const numOfSquares = Math.ceil(n / 2)
  for (let level = 0; level < numOfSquares; level++) {

    const maxEdge = n - level - 1;
    let x, y;

    if (level === maxEdge) {
      result[level][level] = count;
      break;
    }

    // draw top
    for (x = level; x <= maxEdge; x++) {
      result[level][x] = count;
      count++
    }

    // draw right
    for (y = level + 1; y <= maxEdge; y++) {
      result[y][maxEdge] = count;
      count++
    }

    // draw bottom
    for (x = maxEdge - 1; x >= level; x--) {
      result[maxEdge][x] = count;
      count++
    }

    // draw left
    for (y = maxEdge - 1; y > level; y--) {
      result[y][level] = count;
      count++
    }
  }
  console.log(result)
  return result
}

matrix(6)

module.exports = matrix;
