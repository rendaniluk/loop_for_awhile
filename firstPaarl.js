//importing assert function to js
const assert = require('assert')

//Declaring function firstPaarl
function firstPaarl(PaarlReg){

//Declaring the string Paarl separated by comma
  var Paarl = PaarlReg.split(',');

  //using for loop to loop from 0 to length of string Paarl
  for (var i = 0; i < Paarl.length; i++){

    //using conditional statement to print registration from Paarl
    if (Paarl[i].startsWith('CJ')){
      console.log(Paarl[i]);
      return Paarl[i];
    }/*else {
      console.log('not from Paarl');
    }*/
  }
}

//using assert to test the function
assert.equal(firstPaarl('CJ 551,CY 223,CA 996,CJ 100'),[ 'CJ 551'])
