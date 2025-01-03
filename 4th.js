// ? Write a function to sort an array of numbers in an ascending order.
const sortAscending = (arr) => {
    return arr.sort((a, b) => a - b);
  };

  
  console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8,10]


  // Without a comparator function, the sort method sorts the array elements as strings
  // by default, which might not always yield the correct numeric sorting, especially
  // for numbers with more than one digit
