// в условии задачи не описано, что должна выводить функция при равенстве возрастов
function getOlderUser(user1, user2) {
  if (user1.age === user2.age) return "Возраста равны";
  return user1.age > user2.age ? user1.name : user2.name;
}

let user1 = {
  name: "Игорь",
  age: 17,
};
let user2 = {
  name: "Оля",
  age: 21,
};
// Вызов созданной функции
let result = getOlderUser(user1, user2);
console.log(result);
