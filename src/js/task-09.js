// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonElem = document.querySelector(".change-color");
console.log(buttonElem);

const colorName = document.querySelector(".color");
const bodyElem = document.body;
console.log(bodyElem);

buttonElem.addEventListener("click", () => {
  bodyElem.style.backgroundColor = getRandomHexColor();
  colorName.textContent = bodyElem.style.backgroundColor;
  console.log(bodyElem);
});
