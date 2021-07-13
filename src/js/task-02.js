const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента создаст ingredients отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const listElem = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const itemElem = document.createElement('li');
  itemElem.textContent = ingredient;
  return itemElem;
});
console.log(elements);
listElem.append(...ingredients)