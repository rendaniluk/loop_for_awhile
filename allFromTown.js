//importing assert to js
const assert = require('assert')
//Declaring an empty array
var whereFrom = [];
//Declaring function allFromTown
function allFromTown(Regnum,town){
  //split string using .split
   var WhichTown = Regnum.split(',');
  //using for loop to loop from 0 to WhichTown length
  for (var i = 0;i < WhichTown.length;i++){
    //using conditional statement to print WhichTown registration
    if(WhichTown[i].startsWith(town)){
      whereFrom.push(WhichTown[i]);
      console.log(WhichTown[i]);
    }
  }
  console.log(whereFrom);
  return whereFrom;
}
//Calling function allFromTown store value store its value to fromStellies
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
//testing using assert function
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
//assert.deepEqual(fromKuilsriver, []);
