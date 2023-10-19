// Tous ces exercices sont à faire sans utiliser de boucles (for, for..in, etc...)
// mais plutôt en utilisant les méthodes map(), filter(), et reduce()
const someArr = [1, 2, 3, 4, 5];

// 1. Multiplier par deux chaque nombre du tableau ()
const doubleArr = someArr.map(num => num * 2);

console.log(doubleArr)

// Avec reduce()
const doubleArray = someArr.reduce((result, num) => doubleValue(result, num), []);

function doubleValue(result, num) {
  result.push(num * 2);
  return result;
}

// En plus court
// const doubleArray = someArr.reduce((result, num) => result.concat(num * 2), []);

// et avec l'opérateur spread (...)
// const doubleArray = someArr.reduce((result, num) => [...result, num * 2], []);

console.log(doubleArray)

// 2. Filtrer les élements qui sont pairs (even) et impairs (odd)
const evenArr = someArr.filter(num => num % 2 === 0)
const oddArr = someArr.filter(num => num % 2 === 1)

console.log(evenArr)
console.log(oddArr)

// Avec reduce()
const evenArray = someArr.reduce((result, num) => evens(result, num), [])
const oddArray = someArr.reduce((result, num) => odds(result, num), [])

function evens(result, num) {
  if (num % 2 === 0) {
    result.push(num);
  }
  return result;
}

function odds(result, num) {
  if (num % 2 === 1) {
    result.push(num);
  }
  return result;
}

// En plus court
// const evenArray = someArr.reduce((result, num) => num % 2 === 0 ? result.concat(num) : result, [])
// const oddArray = someArr.reduce((result, num) => num % 2 !== 0 ? result.concat(num) : result, [])

// et avec l'opérateur spread (...)
// const evenArray = someArr.reduce((result, num) => num % 2 === 0 ? [...result, num] : result, [])
// const oddArray = someArr.reduce((result, num) => num % 2 !== 0 ? [...result, num] : result, [])

console.log(evenArray)
console.log(oddArray)

// 3. Récupérer la valeur maximum et la valeur minimum
const maxValueArr = someArr.reduce((max, num) => maxValue(max, num))
const minValueArr = someArr.reduce((min, num) => minValue(min, num))

function maxValue(max, num) {
  return num > max ? num : max;
}

function minValue(min, num) {
  return num < min ? num : min;
}

console.log(maxValueArr)
console.log(minValueArr)

// Avec Math et l'opérateur spread (...)
const maxValueArray = Math.max(...someArr)
const minValueArray = Math.min(...someArr)

console.log(maxValueArray)
console.log(minValueArray)

// 4. Effectuer la somme de tous les éléments du tableau
const sumValueArr = someArr.reduce((sum, num) => sum + num)

console.log(sumValueArr)

// 5. Y a t'il au moins un élément impair dans le tableau (retourner un booléen) ?
const isOddValueArr = someArr.reduce((odd, num) => isOddValue(odd, num))

function isOddValue(odd, num) {
  return odd || num % 2 !== 0;
}

console.log(isOddValueArr)

// En plus court
const isOddValueArray = someArr.reduce((odd, num) => odd || num % 2 !== 0)

console.log(isOddValueArray)
