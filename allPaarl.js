//importing assert function to js
const assert = require('assert')
var allpaarl = []
//Declaring function firstPaarl
function allPaarl(PaarlReg){
//Declaring the string Paarl separated by comma
  var Paarl = PaarlReg.split(',');
//using for loop to loop from 0 to length of string Paarl
  for (var i = 0; i < Paarl.length;i++){
    //using conditional statement to print registration from Paarl
    if (Paarl[i].startsWith('CJ')){
        allpaarl.push(Paarl[i]);
        console.log(Paarl[i]);
            }
        }
  console.log(allpaarl);
  return allpaarl;
}

//using assert to test the function allPaarl
assert.deepEqual(allPaarl('CJ 551,CY 223,CA 996,CJ 100'),[ 'CJ 551', 'CJ 100' ])
