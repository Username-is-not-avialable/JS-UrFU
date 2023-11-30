function filter(objects, property, targetValue) {
  filteredArr = [];
  for (let obj of objects) {
    if (obj[property] == targetValue) filteredArr.push(obj);
  }
  return filteredArr;
}

let objects = [
  { name: "Василий", surname: "Васильев" },
  { name: "Иван", surname: "Иванов" },
  { name: "Пётр", surname: "Петров" },
];

let result = filter(objects, "name", "Иван");
console.log(result);
