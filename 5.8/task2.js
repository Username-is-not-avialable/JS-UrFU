function filter(whiteList, blackList) {
  filteredList = [];
  for (let mail of whiteList) {
    if (!blackList.includes(mail)) {
      filteredList.push(mail);
    }
  }
  return filteredList;
}

const whiteList = [
  "my-email@gmail.ru",
  "jsfunc@mail.ru",
  "annavkmail@vk.ru",
  "fullname@skill.ru",
  "goodday@day.ru",
];
const blackList = ["jsfunc@mail.ru", "goodday@day.ru"];

console.log(filter(whiteList, blackList));
