let n = 5;
let m = -1;
let count = 20;
let randomArray = [];
for (let i = 0; i < count; i++) {
  const randomNumber =
    Math.round(Math.random() * Math.abs(m - n)) + Math.min(m, n);
  randomArray.push(randomNumber);
}

console.log(randomArray);
