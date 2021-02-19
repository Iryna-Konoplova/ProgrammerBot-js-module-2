// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) 
// и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше 
// чем значение параметра value(число).


function filterArray(numbers, value) {
  // Пиши код ниже этой строки
const arrayNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    
    if (numbers[i] > value) {
      arrayNumbers.push(numbers[i]);
    }  
  }

    return arrayNumbers;
  // Пиши код выше этой строки
}


  console.log(filterArray([1, 2, 3, 4, 5], 3));
  console.log(filterArray([1, 2, 3, 4, 5], 4));
  console.log(filterArray([1, 2, 3, 4, 5], 5));
  console.log(filterArray([12, 24, 8, 41, 76], 38));
  console.log(filterArray([12, 24, 8, 41, 76], 20));
  




