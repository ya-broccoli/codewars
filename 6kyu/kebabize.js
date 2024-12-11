// ❓ DESCRIPTION:
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"
// Notes:

// the returned string should only contain lowercase letters

// ✅ SOLUTION:
function kebabize(str) {
  return str.split("").filter((el) => !Number.isInteger(+el)).join('').split(/(?=[A-ZА-ЯЁ])/).map((el) => el.toLowerCase()).join("-");
}
