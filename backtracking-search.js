console.log('Starting', process.argv[1], 'search with limit', process.argv[2])
const LIMIT = process.argv[2] || 4
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


/*

Searching subset

procedure haku(k)
if k == n
// k¨asittele osajoukko
else
for i = 0 to 1
valinta[k] = i
haku(k+1)


*/
console.log('Starting subsearch for', N)
const selection = []
function subsearch(k) {
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