let userName = "mdONDONDN";
let userSurname = "al;;ll;";

const formattedUserName =
  userName.substring(0, 1).toUpperCase() + userName.substring(1).toLowerCase();
const formattedUserSurname =
  userSurname.substring(0, 1).toUpperCase() +
  userSurname.substring(1).toLowerCase();

console.log("Отформатированное имя:", formattedUserName);
console.log("Отформатированная фамилия:", formattedUserSurname);

const userNameChanged =
  userName !== formattedUserName
    ? "Имя было преобразовано"
    : "Имя осталось без изменений";
const userSurnameChanged =
  userSurname !== formattedUserSurname
    ? "Фамилия была преобразована"
    : "Фамилия осталась без изменений";

console.log(userNameChanged);
console.log(userSurnameChanged);
