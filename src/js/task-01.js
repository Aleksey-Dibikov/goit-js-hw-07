// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.Получится 'В списке 3 категории.'.

// Для каждого элемента li.itemв списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2) и
// количество элементов в категории(всех вложенных в элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesListEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesListEl.length} категории.`);

const titleCategory = element => element.forEach(el =>
    console.log(`Kатегория: ${el.querySelector('h2').textContent}
     Количество элементов: ${el.querySelectorAll(`li`).length}`)
)
titleCategory(categoriesListEl);