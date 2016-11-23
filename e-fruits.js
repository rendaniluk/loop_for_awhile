//variable friuts an array.
var fruits = ['apple', 'pear', 'mango', 'orange', 'banana'];
// empty list for friuts ending with e
var efruits = [];
for (var i=0;i<fruits.length;i++){
      var fruit = fruits[i];
    if (fruit.endsWith('e')){
      efruits.push(fruit);
    }
}
console.log(efruits);
