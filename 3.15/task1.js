let password = "qaz";

if (password.includes("-") && password.length >= 4) {
  console.log("Пароль надёжный");
} else {
  console.log("Пароль недостаточно надёжный");
}
