// Problem:
// Given the array arr, find and return two indices
// of the array that add up to weight or return -1
// if there is no combination that adds up to weight

var numbers = [1,2,3,4,5]
var weight = 9

function findSum(arr, weight){
  for(var i=0,arrLength=arr.length; i<arrLength; i++){
    for (var j = i + 1; j<arrLength; j++) {
      if (arr[i]+arr[j]==weight) {
        return [i,j];
      }
    }
  }
  return -1;
}

// Prints [3,4], which are indices of values
// That can add up to weight.
// The algorithms has:
// Time complexity of: O(n^2)
// Space complexity of: O(1)
console.log(findSum(numbers, weight))


// ####*Improved version*###
function findSumBetter(arr, weight){
  // declare hashtable
  let hashtable = {};

  for (let i = 0, arrLength=arr.length; i<arrLength; i++) {
    let currentElement = arr[i],
      difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[currentElement] !== undefined) {
      return [i, hashtable[weight-currentElement]];
    } else {
      // store index
      hashtable[difference] = i;
    }
  }
  return -1;
}

// Prints [1,4], which are indices of values
// That can add up to weight.
// The algorithms has:
// Time complexity of: O(n)
// Space complexity of: O(n)
console.log(findSumBetter(numbers, 9))
