let count = 10;
const orderedArray = [];

for (let i = 1; i <= count; i++) {
  orderedArray.push(i);
}

let shuffledArray = [...orderedArray];
for (let i = 0; i < orderedArray.length; i++) {
  let j = Math.round(Math.random() * i);

  const temp = shuffledArray[i];
  shuffledArray[i] = shuffledArray[j];
  shuffledArray[j] = temp;
}

console.log(shuffledArray);
