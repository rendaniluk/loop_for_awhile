//importing assert function to JS
const assert = require('assert')
//Declaring the longestWord function
function longestWord(sentence) {
//Declaring variables used in the function longestWord
  var wordSeparator = sentence.split(' ');
  var longestLength = wordSeparator.length;
  var longerWord  = ' ';
  //for loop to run from 0 to length of string sentence
  for (var i=0;i<wordSeparator.length;i++) {
    if (wordSeparator[i].length > longestLength) {
        longerWord = wordSeparator[i];
    }
  }
  return longerWord;
}
//Calling and storing function call in variable whats_long
var whats_long = longestWord('Love writing JavaScript I')
console.log(whats_long);
//using assert methods to test function longestWord
assert.deepEqual(whats_long,'JavaScript')
