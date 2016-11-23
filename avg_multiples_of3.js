//declaring variables
var multiplesofThreeSums = 0;
var numberCounter = 0;
//using for loop to count to 300 in incerment of 1
for (var i=1;i<=300;i++){
  if (i%3===0){
    numberCounter++;
    multiplesofThreeSums += i;
  }
}
//storing avarage of multiplesofThreeSums in variable avg
var avg = multiplesofThreeSums/numberCounter;
//printing the avarage of multiplesofThreeSums
console.log(avg);
