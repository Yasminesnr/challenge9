// Write a function that takes an array of strings and returns an object containing the frequency of each string.
// For example, if the input is ["hello", "world", "hello"], the output should be { hello: 2, world: 1 }.
// Use the reduce() array method in your implementation.

const frequency = (array) => {
  let freq = array.reduce((new_array, i) => {
    new_array[i] = (new_array[i] || 0) + 1;
    return new_array;
  }, {});
  return freq;
};

// Test the function
const inputArray = ["hello", "world", "hello"];
console.log(frequency(inputArray));
