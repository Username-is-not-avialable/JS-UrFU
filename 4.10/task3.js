let arr = [0, 1, 4, 9, 16, 25, 36];
let desiredN = 36;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === desiredN) {
    console.log(i);
    break;
  }
  if (i === arr.length - 1) {
    console.log("Элемент не найден");
  }
}
