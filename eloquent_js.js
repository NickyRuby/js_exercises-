// CHAPTER 4.

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

=====

function arrayToList(array){
  if (array.length > 1) {
  return {value: array.shift(), rest: arrayToList(array)}
  }
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}

//or

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

// Your code here.
function arrayToList(array){
 let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  array = [];
  for (let node = list; node; node = node.rest) {
  array.push(node.value);
  }
  return array;
}

function prepend(digit, list) {
  list = {value: digit, rest: list};
  return list;
}

function nth(list,digit) {
  array = [];
  for (let node = list; node; node = node.rest) {
  array.push(node.value);
  }
 return array[digit]? array[digit] : undefined;
}


//======================================================================

// High Order Functions
// Task 1
let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((a,b) => a.concat(b)));
// → [1, 2, 3, 4, 5, 6]
