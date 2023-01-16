// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");
console.log(text.textContent);
console.log(inputEl);

inputEl.addEventListener("input", onChangeSize);

function onChangeSize(event) {
  textEl.range = event.currentTarget.value;
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
