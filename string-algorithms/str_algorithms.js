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


// Generating RSAKeyPair
function modInverse(e, phi) {
  var mO = phi, t, q;
  var xO = 0, x1 = 1;

  if(phi == 1) {return 0};
  while( e > 1){
    // q is the quotient
    q = Math.floor(e/phi);
    t = phi;

    // phi is remainder now, process same as
    // Euclid's algo
    phi = e % phi, e = t;

    t = xO;

    xO = x1 - q * xO;
    x1 = t;
  }

  if (x1 < 0) x1 += mO;
  return x1;

}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  // Iterate from 2 to `n`, checking whether modulus division
  // (remainder) is equal to zero
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}


function RSAKeyPair(p, q){
  // Need to check that they are primes
  if(!(isPrime(p) && isPrime(q))) return;
  // check that they're not the same
  if(p==q) return;
  var n = p*q,
          phi =(p-1)*(q-1),
          e =3,
          d = modInverse(e, phi);
  // Public Key: [e, n], Private key: [d, n]
  return [[e, n], [d, n]]
}

modInverse(7, 40);
RSAKeyPair(5, 11)
