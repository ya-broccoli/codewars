// ❓ DESCRIPTION:
// Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

// Note:

// Empty string values should be ignored.
// Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
// Example: (Input --> output)

// ['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
// ['ninja', '', 'ronin'] --> "ninja and ronin"
// [] -->""

// ✅ SOLUTION:
function formatWords(words) {
  if (words === null) return "";
  words = words.filter((w) => w !== "");
  if (words.length === 1) return words.join("");
  return words.reduce((acc, el, i, arr) => {
    if (i === arr.length - 1) {
      return (acc += ` and ${el}`);
    } else if (el && i !== arr.length - 2) {
      return (acc += `${el}, `);
    } else if (i === arr.length - 2) {
      return (acc += `${el}`);
    }

    return acc;
  }, "");
}
