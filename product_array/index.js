// Description:  Given array nums[] of n integers, construct a ProductArray prod[](of same size) such that prod[i] is equal to product of all the elements of arr[] except arr[i]. Solve it without division operator in O(n) time
// @param {number[]} nums
// @return {number[]}

// Approach - 1 Time Complexity: O(n)  Space Complexity: O(n)
const productArrayOne = (nums) => {
  let n = nums.length,
    leftProducts = Array(n),
    rightProducts = Array(n),
    finalProducts = Array(n)

  leftProducts[0] = 1
  rightProducts[n - 1] = 1
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1]
  }
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1]
  }
  for (let i = 0; i < n; i++) {
    finalProducts[i] = leftProducts[i] * rightProducts[i]
  }
  return finalProducts
}

console.log(productArrayOne([4, 7, 6, 2])) // [84, 48, 56, 168]
console.log(productArrayOne([10, 3, 5, 6, 2])) // [180, 600, 360, 300, 900]

// Approach - 2 Time Complexity: O(n)  Space Complexity: O(n)
const productArrayTwo = (nums) => {
  let n = nums.length,
    temp = 1,
    finalProducts = Array(n).fill(1)

  for (let i = 0; i < n; i++) {
    finalProducts[i] = temp
    temp *= nums[i]
  }
  temp = 1
  for (let i = n - 1; i >= 0; i--) {
    finalProducts[i] *= temp
    temp *= nums[i]
  }
  return finalProducts
}

console.log(productArrayTwo([4, 7, 6, 2])) // [84, 48, 56, 168]
console.log(productArrayTwo([10, 3, 5, 6, 2])) // [180, 600, 360, 300, 900]
