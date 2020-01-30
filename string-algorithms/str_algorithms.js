// check if string exists

function existInString(searchValue, search) {
  return searchValue.indexOf(search) !== -1;
}

var strValue = "Blue Nile";
console.log("Checks if chars exists in as string")
console.log(existInString(strValue, "Nel"))
console.log(existInString(strValue, "Turkana"))

//
// Count occurent of certain characters
function countOccurence(str, charValue) {
  let count = 0;
  let pos = str.indexOf(charValue);
  while (pos !== -1) {
    count++
    pos = str.indexOf('a', pos + 1);
  }
  return count
}

var strVal = "You have to do things that challenge you";
console.log("Prints number of occurence")
console.log(countOccurence(strVal, 't'))

console.log("Check if string starts with input: ");
var strInput = "Computing, like drawing, is a science";
console.log(strInput.startsWith(strInput, "computer")) // prints true
console.log(strInput.endsWith(strInput, "computer")) // prints false 