// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const inputElem = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
console.log(inputElem, spanText);
 
inputElem.addEventListener('input', function() {
    spanText.style.fontSize = inputElem.value + 'px';
});