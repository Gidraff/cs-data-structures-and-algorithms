var dog = "shepherd"

//
// Functions for string access

// prints value at index h
console.log(dog.charAt(4));
// prints value from 0 - 5 index
console.log(dog.substring(0, 5));


//
// String Comparison
var a = 'a';
var b = 'b';

console.log("Compare strings: ")
console.log(a < b)

//
// String Search
console.log("Search strings: ");
console.log('Red Dragon'.indexOf('Red'))
console.log('Red Dragon'.indexOf('Blue'))
console.log('Red Dragon'.indexOf('Dragon'))
console.log('Red Dragon'.indexOf('Dragon', 0))


//
// String decomposition
var firstNames = 'james,john,jane,joan'
var fsArray = firstNames.split(",")
console.log(fsArray)
for (let i = 0; i < fsArray.length; i++) {
  console.log("Names: ", fsArray[i])
}

var splitStr = "Hamburger"
console.log(splitStr.split(""))


// 
// Replace string
console.log("Replace string: ")
var strToReplace = "Wizard of Oz"
console.log(strToReplace.replace("Wizard", "Witch"))