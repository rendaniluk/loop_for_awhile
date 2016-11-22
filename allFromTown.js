//importing assert to js
const assert = require('assert')
//Declaring function allFromTown
function allFromTown(regNum,town){
  //Declaring an empty array
  var whereFrom = [];
  //split string using .split
   var whichTown = regNum.split(',');
  //using for loop to loop from 0 to whichTown length
  for (var i = 0;i < whichTown.length;i++){
    //using conditional statement to print whichTown registration
    if(whichTown[i].startsWith(town)){
      whereFrom.push(whichTown[i]);
      // console.log(whichTown[i]);
    }
  }
  console.log(whereFrom);
  return whereFrom;
}
//Calling function allFromTown store value store its value to fromStellies
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
//testing using assert function
var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
assert.deepEqual(fromKuilsriver, []);
