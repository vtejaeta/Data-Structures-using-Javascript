// LeetCode Problem Solution using stack
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false

var isValid = function (s) {
  // We should have more than 1 element for this problem
  if (s.length === 1) return false

  let obj = { '(': ')', '{': '}', '[': ']' }

  let stackArray = []

  for (let char of s) {
    // checks for only key values in the obj
    if (char in obj) {
      stackArray.push(char)
    } else {
      //we got closing char, so check for last opening
      if (obj[stackArray.pop()] !== char) {
        return false
      }
    }
  }
  // stack length will not be zero for non valid strings
  return stackArray.length === 0
}
