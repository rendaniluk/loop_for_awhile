//importing assert to js
const assert = require('assert')
//Declaring function totalPhoneBill
function totalPhoneBill(airtime,sT){
  //Declaring an empty array
  var howMuch = [];
  //split string using .split
   var bilL = airtime.split(',');
  //using for loop to loop from 0 to bilL length
  for (var i = 0;i < bilL.length;i++){
    //using conditional statement to push bilL array to howMuch
        if(bilL[i].startsWith(sT)){
      howMuch.push(bilL[i]);
      //console.log(bilL[i]);
    }
  }
  //console.log(howMuch.length);
  return howMuch.length;
}
//Calling function totalPhoneBill store its value to checkCall and checkSms
var checkCall = totalPhoneBill('call,sms,call,sms,sms','ca');
var checkSms = totalPhoneBill('call,sms,call,sms,sms','sm');
//calculating total cost for call and sms
var totcal = checkCall*2.75;
var totsms = checkSms*0.65;
//summing totcal and totsms
var alltogether = totsms + totcal;
//printing variable alltogether
console.log(alltogether);
//testing using assert function
assert.deepEqual(alltogether,7.45)
