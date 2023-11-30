let a = 13.123456789;
let b = 2.123;
let n = 5;

let fractionNotRoundedA = a % 1;
let fractionNotRoundedB = b % 1;

let precision = Math.pow(10, n);
console.log(precision);

let fractionRoundedA = Math.floor(fractionNotRoundedA * precision);
let fractionRoundedB = Math.floor(fractionNotRoundedB * precision);

console.log("Дробная часть а:", fractionRoundedA);
console.log("Дробная часть b:", fractionRoundedB);

console.log("Дробные части равны", fractionRoundedA === fractionNotRoundedB);
console.log(
  "Дробная часть а больше дробной части b при точности",
  n,
  "знаков",
  fractionRoundedA > fractionNotRoundedB
);
console.log(
  "Дробная часть b больше дробной части a при точности",
  n,
  "знаков",
  fractionRoundedA < fractionNotRoundedB
);
