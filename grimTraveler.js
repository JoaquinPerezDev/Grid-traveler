// Grim Traveler memoization

// Say that you are a traveler on a 2D grid.
// You begin in the top-left corner and your goal is to
// travel to the bottom-right corner. You may only move down or right.

// QUESTION: In how many ways can you travel to the goal on a grid with
// dimensions l * w ?

// INPUTS: Traveler. Grid = [l * w]. Traveler will move from top-left
// to bottom-right. Traveler can only move down or right.

// OUTPUT: "n" ways of traveling from top-left to bottom-right.

// EXAMPLE: grimTraveler(2,3) => 3 total ways.
// 1. right, right, down.
// 2. right, down, right.
// 3. down, right, right.

// Edge case: grimTraveler(0,1) => 0.
// If there are zero rows, the grid is empty.
// Same with zero colums, so when either of the dimensions is empty.
// The grid is empty => 0.

// With grimTraveler(3,3) => ?

// An effect of traveling is, when you move a space, you are shrinking
// the grid by either 1 row or 1 column. Say you're going from (3,3)
// and the traveler moves 1 to the right, we now a can only move within
// the (2,3) since we can only move down or right. Same with going down,
// the grid would turn to (3,2) and so on; Until getting to the
// bottom-right space (1,1) which is a base case requiring 1 move.

// A way to approach this would be to create a tree, with possible
// rows/columns traveresed.

// const grimTraveler = (m, n) => {
//     if(m=== 1 && n === 1) return 1;
//     if(m=== 0 && n === 0) return 0;
//     return grimTraveler(m - 1, n) + (m, n - 1);
// }

// This is the brute force scenario, because as the grid increases,
// The amount of time it takes to calculate is exponential:
//  O(2ⁿ⁺ᵐ) time
//  O(n + m) space

// How do we improve the runtime here?

const grimTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  // are the arguments in the memo?
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 && n === 0) return 0;
  memo[key] = grimTraveler(m - 1, n, memo) + (m, n - 1, memo);
  return memo[key];
};

// To explain the optimization here, it helps to break down the
// inputs and explain the function.

// if gridTravele(4,3), then we can assume
// m = { 0, 1, 2, 3, 4 }
// n = { 0, 1, 2, 3 }

// Total possible unique nodes here are m * n.

// BRUTE FORCE

//  O(2ⁿ⁺ᵐ) time
//  O(n + m) space

// MEMOIZED
// O(m*n) time
// O(n + m) space

// Although the initial text made it seem this to be a very specific
// and different, this is extremely similar to the fibonacci sequence.
// By thinking of the recursive functions as a tree, from there you can
// reach for a brute force solution first, then look to see where
// the function can be optimized.

// MEMOIZATION FLOWCHART

// 1. Make it work.
//      -visualize the problem as a tree
//      -implement the tree using recursion
//      -test it. If it works, you should get correct answers.

// 2. Make it efficient.
//      -add a memo object in the function.
//      -add a base case to return memo values.
//       If the arguments are in the memo, we return the memo.
//      -store return values into memo.

// Most of the time, memoization is the easy part.
// Getting a brute force solution is the most important step,
// because this gives you a truly working solution and give you
// the oportunity to optimize it(memoize) after that.

// Lesson source material: https://www.youtube.com/watch?v=oBt53YbR9Kk
