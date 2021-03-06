// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    const temp = arr[i]
    for (let j = i+1; j <arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = Math.ceil((arr.length - 1) / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	const result = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
    	result.push(left.shift());
    } else {
    	result.push(right.shift());
    }
  }
  result.push(...left, ...right)
  return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
