let n = 3;
let m = -10;

let range = Math.abs(m - n);
let numberInRange = Math.round(Math.random() * range);

let min = Math.min(n, m);
console.log(min + numberInRange);
