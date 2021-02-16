// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, 
// и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.

function slugify(title) {
  // Пиши код ниже этой строки
 const slug = title.toLowerCase().split(' ').join('-');
 
 return slug;
  // Пиши код выше этой строки
}

console.log(slugify('Массивы для новичков'));
console.log(slugify('Английский для разработчика'));
console.log(slugify('Десять секретов JavaScript'));
console.log(slugify('Как стать JUNIOR разработчиком за ДВЕ НЕДЕЛИ'));