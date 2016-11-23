//importing assert function to JS
const assert = require('assert')
//Declaring the wordLength function
function wordLength(sentence){
  //Declaring variables to use in the for loop
      var lengthWord = 0;
      var wordSeparator = sentence.split(' ');
      //running loop from 0 to length wordSeparator
      for (var i = 0;i <wordSeparator.length;i++){
        lengthWord=lengthWord+wordSeparator[i].length;
      }
return lengthWord;
}

//Calling and storing function call in variable whats_Length
var whats_Length = wordLength('I Love writing JavaScript')
console.log(whats_Length);
//using assert methods to test function wordLength
assert.deepEqual(whats_Length,22)
