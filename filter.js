//The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.//
let words = ['spray', 'limit', 'elite', 'best', 'lovely', 'cool'];

let result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["best", "lovely", "cool"]
