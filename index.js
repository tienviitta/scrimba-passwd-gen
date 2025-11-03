const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwd1El = document.getElementById("passwd1-el");
const passwd2El = document.getElementById("passwd2-el");

function generatePasswords() {
  let passwds = [];
  passwds.push(generatePassword());
  passwds.push(generatePassword());
  passwd1El.textContent = passwds[0];
  passwd2El.textContent = passwds[1];
  console.log(passwds);
}

function generatePassword() {
  let passwd = "";
  for (let i = 0; i < 15; i++) {
    let randomChar = Math.floor(Math.random() * characters.length);
    passwd += characters[randomChar];
  }
  return passwd;
}

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyPasswd1() {
  navigator.clipboard.writeText(passwd1El.textContent);
}
function copyPasswd2() {
  navigator.clipboard.writeText(passwd2El.textContent);
}
