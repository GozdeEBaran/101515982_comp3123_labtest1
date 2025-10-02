// COMP3123 Lab Test 1 - Question 1
// Student ID: 101515982

function isValidString(input) {
  return typeof input === "string" && input.trim().length > 0;
}
function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      return reject(new Error("Provided input is not an array."));
    }

    const lowercaseStrings = arr
      .filter((item) => isValidString(item))
      .map((str) => str.toLowerCase());

    if (lowercaseStrings.length === 0) {
      return reject(new Error("No valid strings to convert in the array."));
    }

    resolve(lowercaseStrings);
  });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];

console.log("Original Input:", mixedArray);

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log("Lowercased Strings:", result);
  })
  .catch((error) => {
    console.error("Processing Error:", error.message);
  });
