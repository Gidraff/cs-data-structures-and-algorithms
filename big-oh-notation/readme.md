#### Introduction to algorithms and Data Structures:

In this chapter I learnt the fundamentals of algorithms and data structures.

I learnt that an algorithm is a _step-by-step_ recipe for performing certain task. For example, an algorithm for calculating two numbers:

```
function sum(a, b) {
  return a + b
}
```

A good algorithm is correct, and easy to maintain. Not forgetting that an algorithm has to be efficient, that is, it has to consider time and space used in solving a problem.

Data structures come in handy when solving problem as they help you arrange data, and thus making solving a particular problem easier.

We can analyze the efficiency of an algorithm using Big O notations and also asking the following questions:

- What's that runtime (time complexity)?
- What's the space complexity?
- What's the performance under different circumstances?
  - Worst case
  - Average case
  - Best case

#### Big O Notation:

Uses a _function_ `f(n)`, where n is the input size, to describe how the algorithm's worst case performance relates to the problem size as the size grow.

`Rule of Big O Notation:`

- Coefficient rule: eliminates coefficient not related to the input size, `n`, because as the input size approaches infinity, the other coefficient becomes negligible.
- Sum rule: Add big o function e.g `f(n)` + `g(n)`.
- Product rule: Multiply big o functions `f(n)` \* `g(n)`.
- Polynomial Rule: Big-O to the power of k `f(nk)` --> `O(n)`

```
  function a(n){
    var count = 0;
    for(var = 1; i<n*n; i++){
      count += 1
    }
    return count
  }
```

#### Common Runtimes:

- `O(1)`: takes constant amount of time irrespective of the problem size. For example, accessing an item from an array using its index takes constant time.

- `O(Log n)`: typically divides the number of items it must consider by a fixed fraction at every `step`.

- `O(n)`: grows more quickly that `Log(n)` and `sqrt(n)`.
- Polynomial functions: `O(N)`,`O(N^2)`,`O(N^3)`,`O(N^4)`...
- `2^N`: exponential functions grow extremely quicky. The are practical for only small problems.
- `N!`: Factorial functions. Algorithms with this nature of complexity look for optimal arrangement of the inputs. Eg. Travelling salesman problem.
