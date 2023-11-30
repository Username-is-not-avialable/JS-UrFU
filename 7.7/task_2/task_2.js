function createStudentCard(student) {
  let card = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.textContent = student.name;
  let span = document.createElement("span");
  span.textContent = `Возраст: ${student.age} лет`;
  card.appendChild(h2);
  card.appendChild(span);
  document.body.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function () {
  createStudentCard({ name: "Игорь", age: 17 });
});
