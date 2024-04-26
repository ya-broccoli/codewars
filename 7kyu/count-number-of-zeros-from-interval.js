// ❓ DESCRIPTION:
// Create an algorithm to count the number of zeros that appear between 1 and N.

// Examples:

// There are 2 zeros from 1 to 20: 10, 20

// There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

// countZeros(10); // returns 1
// countZeros(100); // returns 11
// countZeros(200); // returns 31

// ✅ SOLUTION: 
function countZeros(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    String(i).split('').forEach(char => {
      if(char === '0') {
        count += 1;
      }
    })
  }
  return count;
}
