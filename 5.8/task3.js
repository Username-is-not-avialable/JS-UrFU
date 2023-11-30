function arrSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(arrSort([2, 5, 1, 3, 4]));
console.log(arrSort([12, 33, 3, 44, 100]));
console.log(arrSort([0, 1]));
