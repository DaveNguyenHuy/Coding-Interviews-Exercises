// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// solution 1
function chunk(array, size) {
  const result = []
  for (i = 0; i< array.length; i+= size) {
    const chunk = []
    for(j = i; j < i + size; j++) {
      if (j < array.length) chunk.push(array[j])
    }
    debugger;
    result.push(chunk)
  }
  debugger;
  return result
}

// solution 2
// function chunk(array, size) {
//   const result = []
//   for (item of array) {
//     const lastChunk = result[result.length - 1]
//     if (!lastChunk || lastChunk.length === size) {
//       result.push([item])
//     } else {
//       lastChunk.push(item)
//     }
//   }
//   return result
// }

// solution 3
// function chunk(array, size) {
//   const result = []
//   for (i = 0; i< array.length; i+= size) {
//     result.push(array.slice(i, i + size))
//   }
//   return result
// }


console.log(chunk([1,2 ,3, 4, 5], 2))

module.exports = chunk;
