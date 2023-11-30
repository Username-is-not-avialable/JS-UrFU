function createStudentCard(name, age) {
  let card = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.textContent = name;
  let span = document.createElement("span");
  span.textContent = `Возраст: ${age} лет`;
  card.appendChild(h2);
  card.appendChild(span);
  document.body.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function () {
  createStudentCard("Игорь", 17);
});
