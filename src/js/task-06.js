// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.getElementById("validation-input");

console.log(inputEl);
const inputLength = Number(inputEl.dataset.length);
inputEl.addEventListener("blur", onValidInput);
inputEl.classList.add("invalid");

function onValidInput(event) {
  if (event.currentTarget.value.trim().length === inputLength) {
    inputEl.classList.replace("invalid", "valid");
  } else {
    inputEl.classList.replace("valid", "invalid");
  }
  console.log(inputEl);
}
