console.log('Starting', process.argv[1], 'search with limit', process.argv[2])
const LIMIT = parseInt(process.argv[2], 10) || 4
const N = 3
const numbers = []
function search(k) {
  if (k === N) {
    console.log(numbers)
  } else {
    for (var i = 1; i <= LIMIT; i++) {
      numbers[k] = i
      search(k + 1)
    }

  }
}
search(0)


/*

Searching subset

*/

console.log('Starting subsearch N for', N)
const selection = []
function subsearch(k) {
  //console.log('calling k', k)
  if (k === N) {
    console.log(selection)
  } else {
    for (var i = 0; i <= 1; i++) {
      selection[k] = i
      subsearch(k + 1)
    }

  }
}
subsearch(0)


/*
  Iterating permutations
  
*/

const values = []
const Nvalue
const there = []
function permutatioSearch(k) {
  if (k === Nvalue) {
    console.log(values)
  } else {
    for (var i = 1; i <= Nvalue; i++) {
      if (!there[i]) {
        there[i] = true
        values[k] = i
        permutatioSearch(k + 1)
        there[i] = false
      }
    }
  }
} 
