//Write a function that takes an array of numbers and returns the average of all the even numbers.
//Use the filter() and reduce() array methods in your implementation.

const avg_even = (array) => {
  // filter to get the even numbers
  let even_num = array.filter((even_number) => {
    return even_number % 2 == 0;
  });

  // reduce to get the sum
  let sum = even_num.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  // get the average by deviding the sum by the length of the array
  return sum / even_num.length;
};

//test the function
const array = [1, 2, 3, 4];
console.log(avg_even(array));
