//importing assert to js
const assert = require('assert')
//Declaring an empty array frompl
var frompl = [];
//Declaring function countAllPaarl
function countAllPaarl(number){
      //using split to separate string by comma
        var allpaarl = number.split(',');
        //for loop to run from 0 to the length of allpaarl
        for (var i = 0;i < allpaarl.length;i++){
          //conditional statement to decide the value to start string
          if(allpaarl[i].startsWith('CJ')){
            frompl.push(allpaarl[i]);
          }
        }
        //return and printing number of string starting with 'CL'
        console.log(frompl.length);
  return frompl.length;
}

//testing function countAllPaarl using assert
assert.deepEqual(countAllPaarl('CJ 551,CY 223,CA 996,CJ 100'),2)
