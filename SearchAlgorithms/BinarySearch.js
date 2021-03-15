const binarySearchIterative = (array, key) => {
  let sortedArray = array.sort();
  let lower = 0;
  let higher = array.length;
  let mid;
  while (lower <= higher) {
    mid = Math.floor((lower + higher) / 2);
    if (key === sortedArray[mid]) return mid;
    if (key < sortedArray[mid]) higher = mid - 1;
    else lower = mid + 1;
  }
  return -1;
};

const binarySearchRecursive = (
  array,
  key,
  lower = 0,
  higher = array.length
) => {
  let sortedArray = array.sort();
  let mid = Math.floor((lower + higher) / 2);
  if (key === sortedArray[mid]) return mid;
  if (key < sortedArray[mid]) {
    return binarySearchRecursive(sortedArray, key, lower, mid - 1);
  }
  if (key > sortedArray[mid]) {
    return binarySearchRecursive(sortedArray, key, mid + 1, higher);
  }
  return -1;
};

const array = [1, 2, 3, 4, 5, 6];
const elementToFind = 8;
console.log(binarySearchRecursive(array, elementToFind));

module.exports = {
  binarySearchRecursive,
  binarySearchIterative,
};
