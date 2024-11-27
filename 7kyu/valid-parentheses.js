// ❓ DESCRIPTION:
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  false
// Constraints
// 0 <= length of input <= 100

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.

// Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

// ✅ SOLUTION_1:
function validParentheses(parenStr) {
  let result = []

  for(let i = 0; i < parenStr.length; i++) {
    if(parenStr[i] === '(') {
      result.push(parenStr[i])
    } else {
      if(result.length === 0) {
        return false
      }
      result.pop(parenStr[i])
    }
  }

  return result.length === 0
}


// ✅ SOLUTION_2:
function validParentheses(parenStr) {
  let counter = 0
  let a = '('
  let b = ')'
  
  for(let char of parenStr) {
    if( char === a) counter++
    if( char === b) counter--

    if(counter < 0) return false
  }

  return counter === 0
}