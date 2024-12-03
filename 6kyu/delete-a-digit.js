// ❓ DESCRIPTION:
// Task
// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

// Input/Output
// [input] integer n

// Constraints: 10 ≤ n ≤ 1000000.

// [output] an integer

// ✅ SOLUTION:
function deleteDigit(n) {
  const str = n.toString();

  const arr = [];

  for (let i = 0; i < str.length; i++) {
    const newstr = str.replace(str[i], "");
    arr.push(+newstr);
  }
  return Math.max(...arr);
}
