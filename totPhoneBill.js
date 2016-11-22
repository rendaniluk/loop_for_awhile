//importing assert to JS
const assert = require('assert')
//Declaring function totalPhoneBill
function totalPhoneBill(Bill){
  //Declaring variables and an empty array
    var call = [];
    var sms =[];
    var costCall = 2.75;
    var costSms = 0.65;
    var billSeparator =Bill.split(',')
        //using for loop to loop over the length of billSeparator
          for (var i = 0;i < billSeparator.length; i++){
    //using conditional statement to push billSeparator to 'call' and to 'sms'
                      if (billSeparator[i] ==='call') {
                              call.push(billSeparator[i])
                        }else if (billSeparator[i]==='sms'){
                                  sms.push(billSeparator[i])
                                }
                              }
      //storing the maths of the function on variable totalCost
            var totalCost = costCall*call.length + costSms*sms.length;
            //returning the totalCost
            return totalCost;
      }
//Calling function totalPhoneBill with parameter and store its value to checkCallSms
var checkCallSms = totalPhoneBill('call,sms,call,sms,sms');
//printing the value of checkCallSms
console.log(checkCallSms);
//testing using assert function
assert.deepEqual(checkCallSms,7.45)
