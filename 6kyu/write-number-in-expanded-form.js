// ❓ DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 2"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// ✅ SOLUTION:
function expandedForm(num) {
  let str = num.toString();
  const res = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] != 0) {
      res.push(str[i] + str.slice([i + 1]).replace(/\d/g, "0"));
    }
  }
  return res.join(" + ");
}
