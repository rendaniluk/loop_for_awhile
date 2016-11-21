//importing assert method to test function to js
const assert = require('assert')
//Declaring function displayEachRegNumber
function displayEachRegNumber(RegNum){
  //Declaring variable called Reg that split the string RegNum.
      var Reg = RegNum.split(',');
      //for loop to list registration numbers
      for (var i = 0; i < Reg.length; i++){
        //printing the list registration numbers
        console.log(Reg[i]);
      }
      console.log(Reg);
  return Reg;
}
//testing code using assert
assert.deepEqual(displayEachRegNumber('CJ 007,CA 7846,CF 332,CY 774'),[ 'CJ 007', 'CA 7846', 'CF 332', 'CY 774' ])
