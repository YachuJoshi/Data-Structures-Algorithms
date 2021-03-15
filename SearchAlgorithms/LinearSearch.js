const linearSearch = (array, elementToFind) => {
  let foundIndex = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elementToFind) {
      foundIndex = i;
    }
  }
  return foundIndex;
};

const array = [1, 2, 3, 4, 5, 6];
const elementToFind = 4;
console.log(linearSearch(array, elementToFind));

module.exports = {
  linearSearch,
};
