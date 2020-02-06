var array1 = [1,2,3,4];

// Insertion has a time complexity of O(1)
array1.push(5);
array1.push(7);
array1.push(2);

console.log(array1)

// Deletion has time complexity of O(1)
console.log(array1.pop())
console.log(array1.pop())

console.log("shifted: ", array1.shift())


var array2 = [1,2,3,4,5,5]

// Note: Iteration access any each items contained within a data structure

// Time complexity of O(n) since the iteration  is visiting n number of elements
var t1 = new Date().getTime()
for(let i =0, len = array2.length; i < len; i++){
  console.log(array2[i])
}
var t2 = new Date().getTime()
console.log("Time in ms: ", t2 - t1)


var array3 = ['all', 'cows', 'are', 'big'];
array3.forEach((item, i) => {
  console.log(array3[i])
});
