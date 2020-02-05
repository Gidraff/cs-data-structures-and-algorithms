// Example of slice implementation


function arraySlice(array, beginIndex, endIndex) {
  // if no parameters passed, return the array
  if(! beginIndex && ! endIndex) {
    return array
  }

  // if only beginging index is found, set endIndex to size
  endIndex = array.length;

  var partArray = [];

  // if both begin and end index specified return
  // the part of the array
  for (var i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i])
  }

  return partArray
}

var arr1 = [1,2,3,4]

console.log(arraySlice([1,2,3,4], 1, 2))


// Time Complexity is O(n):
// because all n items in the
// array must be accessed.

// Space Complexity is O(n): to hold all
// `n` items when copying the array
