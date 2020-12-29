// [7, 2, 5, 1, 9, 3] sum=10

let findTwoSumArray = (arr, sum) => {
  let newMap = new Map()
  let results = []
  let i = 0,
    count = 0

  if (arr.length < 2) {
    return results
  }

  while (i < arr.length) {
    //finding complement of present num
    let num = arr[i]
    let complement = sum - num

    if (count != 1 && newMap.has(complement) && newMap.get(complement) != i) {
      results.push([complement, num])
      count = complement == num ? 1 : 0
      i++
    } else {
      newMap.set(num, i)
      console.log(newMap)
      i++
    }
  }

  return results.length ? results : 'No such pairs found'
}

console.log(findTwoSumArray([2, 3, 4, 3, 3, 3], 6))
