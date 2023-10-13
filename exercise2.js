//Write a function that takes an array of words and returns the longest word.
//Use the reduce() array method in your implementation.

const find_longest_word = (array) => {
  //if the array is empty
  if (array.length === 0) return null;

  //use the reduce() array method
  let longest_word = array.reduce((longest, current) => {
    if (current.length > longest.length) return current;
    else return longest;
  });

  return longest_word;
};

//test the function
const array = ["senour", "yasmine", "naima", "ensia"];
console.log(find_longest_word(array));
