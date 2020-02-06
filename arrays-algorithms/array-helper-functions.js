var array1 = [1,2,3,4];

// returns item between 0, 2. Not including element on index 2 (end index)
console.log(array1.slice(0, 2))


console.log(array1.slice(4));


// returns and changes the content of the array
// by removing existing elements and/or adding new elements
var array2 = [1,2,3,4,5,5];
console.log("Removed following: ", array2.splice(2, 3))


// will return an empty array
console.log("No args passed: ", array2.splice())


// Adding element to array using splice
var array2 = [1,2,3]
array2.splice(1,3, [4,5,6]);
console.log("A new array: ", array1)


// Spread operator
function addFourNums(a,b,c,d){
  return a + b + c + d;
}

var numbers = [1,2,3,4];
// prints sum of args to the console
console.log("addFourNums: function called",addFourNums(...numbers));


// Find MAX value in an array
var array3 = [2, 10, 23, 54]
console.log(Math.max(array3))


//
var array4 = [-2, -10, -23, 54]
Math.min(array4)
