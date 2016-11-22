//importing assert to JS
const assert = require('assert')
//Declaring function enoughAirtime
function enoughAirtime(usageStr){
  //Declaring variables and an empty array
    var call = [];
    var sms = [];
    var data = [];
    var costCall = 1.88;
    var costSms = 0.75;
    var costData = 12
    var usageStrSeparator =usageStr.split(',')
    var availAirtime = 50;
        //using for loop to loop over the length of usageStrSeparator
          for (var i = 0 ;i < usageStrSeparator.length; i++){
    //using conditional statement to push usageStrSeparator to 'call' and to 'sms'
                      if (usageStrSeparator[i] ==='call') {
                              call.push(usageStrSeparator[i])
                        }else if (usageStrSeparator[i]==='sms'){
                                  sms.push(usageStrSeparator[i])
                                }else if (usageStrSeparator[i]==='data') {
                                  data.push(usageStrSeparator[i])
                                }
                      }
      //storing the maths of the function on variable airTimeleft
            var airTimeleft = availAirtime-(costCall*call.length + costSms*sms.length + costData*data.length);
            if (airTimeleft<0) {
              return 0;
            }else {
              //returning the airTimeleft
              return airTimeleft.toFixed(2);
            }
        //returning the airTimeleft
        }
//Calling function enoughAirtime with parameter and store its value to ballance
var ballance = enoughAirtime('call,call,call,data,sms,sms,call,data');
//printing the value of ballance
console.log(ballance);
//testing using assert function
assert.deepEqual(ballance,16.98)
