//The map() method creates a new array populated with the results of calling a provided function on every element in the calling array//
let array = [2, 4, 6, 8];

// pass a function to map
let map = array.map(x => x * 2);

console.log(map);
// expected output: Array [4, 8, 12, 16]