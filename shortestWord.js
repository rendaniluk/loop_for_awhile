//importing assert function to JS
const assert = require('assert')
//Declaring the shortestWord function
function shortestWord(sentence) {
//Declaring variables used in the function shortestWord
  var wordSeparator = sentence.split(' ');
  var shortestLenth = wordSeparator.length;
  var shoterWord = ' ';
  //for loop to run from 0 to length of string sentence
  for (var i=0;i<wordSeparator.length;i++) {
    if (wordSeparator[i].length < shortestLenth) {
        shoterWord = wordSeparator[i];
    }
  }
  return shoterWord;
}
//Calling and storing function call in variable whats_short
var whats_short = shortestWord('I Love writing JavaScript')
console.log(whats_short);
//using assert methods to test function shortestWord
assert.deepEqual(whats_short,'I')
