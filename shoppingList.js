const assert = require('assert') //importing assert function to js
//Declaring a function shoppingList
function shoppingList(my_list){
  //using the string spilt ta split the string
  var shoplist = my_list.split(',');
  //for loop to list what you have to buy
for (var i = 0; i < shoplist.length; i++){
      //printing the list
       console.log(shoplist[i]);
        }
  return shoplist;

};

//var what_to_by=shoppingList('buter,sugar,potato,polony,rice,milies,eggs');
//console.log(what_to_by);

//using assert to test shoppingList function
assert.equal(shoppingList('buter,sugar,potato,polony,rice,milies,eggs'), 'buter,sugar,potato,polony,rice,milies,eggs')
assert.equal(shoppingList('Milk,Tea,Beef,Beans'), 'Milk,Tea,Beef,Beans')
