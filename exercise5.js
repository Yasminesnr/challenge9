//Write a function that takes an array of objects representing people,
// with each object containing properties such as name, age, and city.
//The function should return an object containing the count of people by city.
//For example, if the input is
//[{ name: "Alice", age: 30, city: "New York" },
//{ name: "Bob", age: 40, city: "Chicago" },
//{ name: "Charlie", age: 50, city: "New York" }],
//the output should be { "New York": 2, "Chicago": 1 }.
//Use the reduce() array method in your implementation.

const count_ppl_by_city = (array) => {
  let count = array.reduce((result, person) => {
    if (result[person.city] === undefined) result[person.city] = 1;
    else result[person.city]++;
    return result;
  }, {});
  return count;
};

//test the function
const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];
console.log(count_ppl_by_city(people));
