function createStudentCard(student) {
  let card = document.createElement("li");
  let h2 = document.createElement("h2");
  h2.textContent = student.name;
  let span = document.createElement("span");
  span.textContent = `Возраст: ${student.age} лет`;
  card.appendChild(h2);
  card.appendChild(span);
  return card;
}

function createStudentsList(listArr) {
  let ul = document.createElement("ul");
  for (let student of listArr) {
    document.body.appendChild(ul);
    card = createStudentCard(student);
    ul.appendChild(card);
  }
}

let allStudents = [
  { name: "Валя", age: 11 },
  { name: "Таня", age: 24 },
  { name: "Рома", age: 21 },
  { name: "Надя", age: 34 },
  { name: "Антон", age: 7 },
];

document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  button.textContent = "Показать список";
  button.addEventListener("click", function () {
    createStudentsList(allStudents);
  });
  document.body.appendChild(button);
});
