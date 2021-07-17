// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

/* <div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div> */
const renderBtn = document.querySelector('[data-action = "render"]');
const destroyBtn = document.querySelector('[data-action= "destroy"]');
const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('#controls input');

console.log(boxesRef);

renderBtn.addEventListener('click', function () {
    const element = document.createElement('div');
    element.textContent = inputRef.value;
    boxesRef.appendChild(element);
});
destroyBtn.addEventListener('click', function () {
    while (boxesRef.firstChild) {
        boxesRef.removeChild(boxesRef.firstChild);
    }
});