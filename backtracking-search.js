console.log('Starting',  process.argv[1], 'search with limit', process.argv[2])
const LIMIT = process.argv[2]
const N = 3
const numbers = new Array(3)
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