const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для создания галлереи изображений по массиву данных.
// В HTML есть список ul#gallery.
// { < ul  id = " gallery " > </ ul > }
// Используй массив объектов images для создания тегов img вложенных в li. 
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const galleryRef = document.querySelector('#gallery');

const galleryItemElements = ({ url, alt }) => {
  const addGalleryListImg = `<li class="gallery__item"><img src="${url}" alt="${alt}" width=320 height=150></li>`;
  return addGalleryListImg;
};
const allElements = images.map(galleryItemElements);
console.log(allElements);
galleryRef.insertAdjacentHTML('beforeend', allElements.join(' '));

// const galleryItemElements = ({ url, alt }) => {
//   const addGalleryListImg = `<li class="gallery__item"><img src="${url}" alt="${alt}" width=320 height=150></li>`;
//   return addGalleryListImg;
// };
// const allElements = images.map(galleryItemElements);
// console.log(allElements);
// images.forEach(({ url, alt}) =>
//   galleryRef.insertAdjacentHTML('beforeend', `<li><img src='${url}' alt='${alt}' width = 320></li>`));

// for (let { url, alt} of images)
//   galleryRef.insertAdjacentHTML('beforeEnd', `<li><img src="${url}" alt="${alt}" width = 320></li>`);
//   console.log(galleryRef);
