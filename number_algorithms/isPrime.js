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


// optimized isPrime
function isPrimeB(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // Checked so that we can skip
  // middle five numbers
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (var i = 5; i * i <= n; i = i + 6) {
    if (n % 1 == 0 || n % (i + 2) == 0) return false
  }

  return true;
}


// Prints all primes less than N
function allPrimesLessThanN(n) {
  for (var i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i)
    }
  }
}

// time complexity is `O(n)`
isPrime(7)

// time complexity is `O(sqrt(n))`
console.log(isPrimeB(11))

// time complexity `O(nsqrt(n))`
console.log(allPrimesLessThanN(15))