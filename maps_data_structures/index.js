// Maps are data structures that store key value pairs.
// They provide rapid lookup of stored values based on key values

// Functions: set(key,value), get(key), has(key), clear(), delete(key)
// Properties: size

//Implement map in javascript
let newMap = function () {
  this.collection = {}
  this.size = 0
  //for setting key value in the Map object
  this.set = function (key, value) {
    this.collection[key] = value
    this.size++
  }
  //return value associated with key
  this.get = function (key) {
    return key in this.collection ? this.collection[key] : undefined
  }
  //return boolean asserting if value has been associated to key
  this.has = function (key) {
    return key in this.collection
  }
  //removes all key-value pairs in Map obj
  this.clear = function () {
    this.collection = {}
    this.size = 0
  }
  //return true if exists and has been removed or false if dont exist
  this.delete = function (key) {
    if (key in this.collection) {
      delete this.collection[key]
      this.size--
      return true
    }
    return false
  }
}

let map = new newMap()
let myfunc = function () {}

map.set('arms', 2)
map.set(myfunc, 'functional value')
map.set({}, 'obj value')
map.set(NaN, 'NaN value')
map.set(true, 'Boolean value')

console.log(map.size)
console.log(map.get(myfunc))
console.log(map.get({}))
console.log(map.get(NaN))
console.log(map.has('arms'))
console.log(map.delete(NaN))

console.log(map.get(NaN))
map.clear()
console.log(map.size)
