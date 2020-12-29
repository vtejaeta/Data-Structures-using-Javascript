// Set is collection of unique items

function mySet() {
  this.size = 0
  this.collection = []

  this.has = function (element) {
    return this.collection.indexOf(element) !== -1
  }

  //Before adding check for duplicates, returns true/false
  this.add = function (value) {
    if (this.has(value)) return false

    this.collection.push(value)
    this.size++
    return true
  }

  this.delete = function (value) {
    if (!this.has(value)) return false

    let index = this.collection.indexOf(value)
    this.collection.splice(index, 1)
    this.size--
    return true
  }

  this.values = function () {
    return this.collection
  }

  this.union = function (otherSet) {
    let finalSet = new mySet()
    let set1 = this.values()
    let set2 = otherSet.values()

    set1.forEach((e) => finalSet.add(e))
    set2.forEach((e) => finalSet.add(e))

    return finalSet
  }

  this.intersection = function (otherSet) {
    let finalSet = new mySet()
    let set1 = this.values()

    set1.forEach((e) => {
      if (otherSet.has(e)) {
        finalSet.add(e)
      }
    })

    return otherSet
  }

  this.difference = function (otherSet) {
    let finalSet = new mySet()
    let set1 = this.values()

    set1.forEach((e) => {
      if (!otherSet.has(e)) {
        finalSet.add(e)
      }
    })
    return finalSet
  }
}

var setA = new mySet()
var setB = new mySet()
setA.add(1)
console.log(setA.has(1))
setA.add(2)
setA.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
setB.add(6)
console.log(setA.difference(setB).values())
