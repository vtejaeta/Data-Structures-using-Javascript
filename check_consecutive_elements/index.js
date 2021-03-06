// Given an unsorted array of numbers, write a function that returns true if array consists of consecutive numbers.
// @param {number[]} arr
// @return {number[]}

// Time Complexity: O(n), Space Complexity: O(n)
const checkForConsecutiveElements = (arr) => {
  let n = arr.length,
    min = arr[0],
    max = arr[0]

  // for finding min
  for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  // for finding max
  for (let i = 1; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }

  if (max - min + 1 == n) {
    // check for duplicates
    let map = {}
    for (let i = 0; i < n; i++) {
      if (map[arr[i]]) {
        return false
      }
      map[arr[i]] = arr[i]
    }
    return true
  } else {
    return false
  }
}

console.log(checkForConsecutiveElements([5, 2, 3, 1, 4])) // true
console.log(checkForConsecutiveElements([83, 78, 80, 81, 79, 82])) // true
console.log(checkForConsecutiveElements([34, 23, 52, 12, 3])) // false
console.log(checkForConsecutiveElements([7, 6, 5, 5, 3, 4])) // false

// Approach - 2 Time Complexity: O(n) Space Complexity: O(1)
const checkForConsecutiveElementsTwo = function (nums) {
  let n = nums.length,
    min = nums[0],
    sum = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i]
    }
  }

  let ap_sum = (n * (2 * min + (n - 1) * 1)) / 2

  for (let i = 0; i < n; i++) {
    sum += nums[i]
  }

  return sum == ap_sum
}

console.log('--------Approach 2------------')
console.log(checkForConsecutiveElementsTwo([5, 2, 3, 1, 4])) // true
console.log(checkForConsecutiveElementsTwo([83, 78, 80, 81, 79, 82])) // true
console.log(checkForConsecutiveElementsTwo([34, 23, 52, 12, 3])) // false
console.log(checkForConsecutiveElementsTwo([7, 6, 5, 5, 3, 4])) // false
