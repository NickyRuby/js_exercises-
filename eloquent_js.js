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

//-------------------------------------------------------------------

// Task 2
function loop (value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//or
function loop (value, test, update, body) {
  for (let i = value; test(i); i = update(i)) body(i);
}


// Task 3

/* function every(array, test) {
  let good = 0, bad = 0;
  for (let each of array) if (test(each)) good++; else bad++;
  return array.length == good ? true : false;
}
*/

function every(array,test){
  return !array.some(element => !test(element));
}



// Task 4
/* Write a function that computes the dominant writing direction in a string of text.
Remember that each script object has a direction property that can be
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that
have a script associated with them. The characterScript and countBy
functions defined earlier in the chapter are probably useful here.*/

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}



function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}



function dominantDirection(string){
  let scripts = countBy(string, char => {				// [name: "fsaf", count: n]
    let script = characterScript(char.codePointAt(0));	// script
    return script? script.direction : "none";
  }).filter(({name}) => name != "none");


 return scripts.reduce((a,b) => {
   return a.count < b.count? b : a;
 }).name;


}



console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// →


//======================================================================

// The Secret Life of Objects
// Task 1

class Vec {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

   plus(obj){
    let sum = {};
    sum.x = this.x + obj.x;
    sum.y = this.y + obj.y;
    return sum;
    // return new Vec(this.x + obj.x, this.y + obj.y);
  }

  minus(obj){
    let min = {};
    min.x = this.x - obj.x;
    min.y = this.y - obj.y;
    return min;
    // return new Vec(this.x - obj.x, this.y - obj.y);

  }

  get length() { return Math.sqrt(this.x * this.x + this.y * this.y); }

}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
// → 5


// Task 2: Groups

class Group  {
  constructor() {
   this.members = [];
  }

  has(value) {
    return this.members.includes(value);
  }

  add(value) {
    if (!this.has(value)) this.members.push(value);
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  static from (array) {
    let hey = new Group;
    for (let each of array) {
      hey.add(each);
    }
    return hey;
  }
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


// Task 3: Make Group Interatable

// Your code here (and the code from the previous exercise)
class Group  {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
    this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter(v => v !== value);
  }

  has(value){
    return this.members.includes(value);
  }

  static from (obj) {
    let group = new Group;
    for (let each of obj) {
      group.add(each);
    }
    return group;
  }

  [Symbol.iterator](){
    return new IterableGroup(this);
  }
}

class IterableGroup {
  constructor(group){
    this.counter = 0;
    this.group = group;
  }

   next() {
    if (this.counter == this.group.members.length) return {done:true};
	  let result = { value: this.group.members[this.counter], done: false}
    this.counter++
    return result;
   }
}


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
}
