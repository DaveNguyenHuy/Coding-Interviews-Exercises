// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  if (!root) return [0]
  const arr = [root, 't']
  const result = [0]
  while (arr.length > 1) {
    const first = arr.shift();
    if (first !== 't') {
      result[result.length - 1]++;
      arr.push(...first.children)
    } else if (first === 't') {
      result.push(0)
      arr.push('t')
    }
  }
  return result;
}

module.exports = levelWidth;
