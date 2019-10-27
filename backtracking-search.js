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
const Nvalue = 4
const there = []

console.log('Starting permutation search for N value', Nvalue)
function permutationSearch(k) {
  if (k === Nvalue) {
    console.log(values)
  } else {
    for (var i = 1; i <= Nvalue; i++) {
      if (!there[i]) {
        there[i] = true
        values[k] = i
        permutationSearch(k + 1)
        there[i] = false
      }
    }
  }
} 
permutationSearch(0)


/* Solving the chess queen problem procedure haku(y)
*/
const gridSize = 4
let counter = 0
place = []
function queenSearch(y) {
  if (y === gridSize) {
    counter++
  } else {
    for (var x = 0; x < gridSize; x++) {
      if (placeForQueen(x, y)) {
        place[y] = x
        queenSearch(y + 1)
      }
    }
  }
}

function placeForQueen(x, y) {
  for(var i = 0; i < y; i++) {
    if(place[i] === x) {
      return false
    } else if(Math.abs(i - y) === Math.abs(place[i] - x)) {
      return false
    }
  }
  return true
}