// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

/* <input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1> */

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
console.log(inputName, outputName);
inputName.addEventListener('input', changeNameInput => {
    changeNameInput.currentTarget.value.trim() === ''
        ? outputName.textContent = 'незнакомец'
        : outputName.textContent = changeNameInput.currentTarget.value
});