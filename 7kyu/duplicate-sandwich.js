// ❓ DESCRIPTION:
// Task
// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.

// Examples:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"

// ✅ SOLUTION:
function duplicateSandwich(value) {
  const isArray = Array.isArray(value);
  const arr = Array.isArray(value) ? value : value.split('');
  let firstIndex = arr.indexOf(arr.find((el, index, array) => array.indexOf(el) !== index));
  let secondIndex = arr.lastIndexOf(arr.find((el, index, array) => array.indexOf(el) !== index));
  return isArray ? arr.slice(firstIndex + 1, secondIndex) : arr.slice(firstIndex + 1, secondIndex).join('');
}
