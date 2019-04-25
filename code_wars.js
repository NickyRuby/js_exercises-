// CODE WARS

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

// return masked string
function maskify(cc){
let result = "";
  for (let i = 0; i < cc.length-4; i++){
  result += cc[i];
  }
  result = result.replace(/./ig,"#");
  return result;
}

============================================================================

// DNA https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript

// my solution
function DNAStrand(dna){
let result = "";
for (let letter of dna) {
  if (letter == "A") result += "T";
  if (letter == "C") result += "G";
  if (letter == "G") result += "C";
  if (letter == "T") result += "A";
}
return result
}

//smart solutions
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}



// route
function isValidWalk(walk) {
  var directions = {
    'n': 0,
    's': 0,
    'e': 0,
    'w': 0
  }
  walk.forEach(function(direction) {
    directions[direction]++;
  }
  var displacement = {
    x: directions['n'] - directions['s'],
    y: directions['e'] - directions['w']
  }
  /*it take 1 min to traverse 1 block & I only have 10 minutes,
  & I also want to attend appointment, so i want to come from where i start.*/
  return walk.length === 10 && displacement.x === 0 && displacement.y === 0;
}

============================================================================


var uniqueInOrder=function(iterable){
let hey = [];
for (let i = 0; i < iterable.length; i++) {
  if (iterable[i] != iterable[i+1]) {hey.push(iterable[i]);}
}
return hey;

}

/* Playing with digits
Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
    We want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:
  Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
If it is the case we will return k, if not return -1.
*/

function digPow(n, p){
let y = `${n}`.split('');
let result = 0;
for (let i = 0; i < y.length; i++) {
  result += Math.pow(y[i],p + i)
  }
  return result % n == 0? result/n : -1;
}
