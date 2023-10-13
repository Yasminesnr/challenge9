const avg_num_pages = (array) => {
  // Use the map() method to get the number of pages for each book
  let num_pages = array.map((book) => {
    return book.pages;
  });

  // Use the reduce() method to get the sum
  let sum = num_pages.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  // Return the average
  return sum / array.length;
};

// Define an array of book objects
const books = [
  { title: "Book 1", author: "Author 1", pages: 200 },
  { title: "Book 2", author: "Author 2", pages: 250 },
  { title: "Book 3", author: "Author 3", pages: 300 },
];

console.log(avg_num_pages(books)); // This will print the average number of pages
