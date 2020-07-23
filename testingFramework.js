'use strict';

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("failed: " + assertionToCheck + " is not truthy");
      } else {
        console.log("pass " + assertionToCheck)
      }
  }
};