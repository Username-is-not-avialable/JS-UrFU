function getAge(birthDate) {
  let currentYear = new Date().getFullYear();
  return currentYear - birthDate;
}

console.log(getAge(1998));
console.log(getAge(1991));
console.log(getAge(2007));
