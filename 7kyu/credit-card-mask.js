// ❓ DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// ✅ SOLUTION_1: 
// function maskify(str) {
//   let res = '';
//     for (let i = 0; i < str.slice(0, -4).length; i++) {
//       res += '#';
//     }
//     return `${res}${str.slice(-4)}`;
// }

// ✅ SOLUTION_2: 
function maskify(str) {
  return '#'.repeat(str.slice(0, -4).length) + str.slice(-4);
}
