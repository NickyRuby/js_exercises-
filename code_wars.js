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
