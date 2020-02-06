// Median (of a sorted array)
// in an even number of a set
// is the average of the two middle numbers

function medianOfArray(array) {
  var length = array.length;

  // odd
  if(length % 2 == 1) {
    return array[Math.floor(length/2)]
  } else {
    // Even
    return (array[length/2 - 1])/2;
  }
}
