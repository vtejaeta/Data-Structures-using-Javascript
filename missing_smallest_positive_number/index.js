const findSmallestPositiveNumber = (nums) => {
  let n = nums.length

  for (let i = 0; i < n; i++) {
    let correctPos = nums[i] - 1
    while (1 <= nums[i] && nums[i] <= n && nums[i] != nums[correctPos]) {
      ;[nums[i], nums[correctPos]] = [nums[correctPos], nums[i]]
      correctPos = nums[i] - 1
    }
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) {
      return i + 1
    }
  }
  return n + 1
}

console.log(findSmallestPositiveNumber([3, 4, 7, 1, 2, 5])) // Output : 6
