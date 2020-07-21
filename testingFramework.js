var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("pass " + assertionToCheck)
      }
  }
};

// var compareText = {
//   toContain: function(textToCheck) {
//     var a = a
//     var b = b
//     if (a === b) {
//       console.log("pass " + textToCheck)
//     } else {
//       throw new Error("failed: " + textToCheck + " does not match");
//     }
//   }
// };