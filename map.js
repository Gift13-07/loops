//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.//
const number= [2, 4, 6, 8];

// pass a function to map
const map1 = number.map(x => x * 2);

console.log(map1);
// expected output: Array [4, 8, 12, 16]