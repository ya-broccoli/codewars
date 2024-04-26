// ❓ DESCRIPTION:
// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// ✅ SOLUTION_1: 
// function rowWeights(array){
//   let team1 = 0;
//   let team2 = 0;
//   for (let i = 0; i < array.length; i++) {
//   i % 2 === 0 ? team1 += array[i] : team2 += array[i];
//   }
//   return [team1, team2]
// }

// ✅ SOLUTION_2: 
function rowWeights(arr) {
  let t1 = arr.filter((el, i) => i % 2 === 0).reduce((acc, value) => acc += value, 0);
  let t2 = arr.filter((el, i) => i % 2 !== 0).reduce((acc, value) => acc += value, 0);
  return [t1, t2];
}
