arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
arr2 = [12, 44, 23, 5];

unitedArr = [];
for (let i = 0; i < arr1.length + arr2.length; i++) {
  if (i < arr1.length) {
    unitedArr.push(arr1[i]);
  } else {
    unitedArr.push(arr2[i - arr1.length]);
  }
}
console.log(unitedArr);
