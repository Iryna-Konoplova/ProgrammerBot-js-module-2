// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.


function filterArray(numbers, value) {
  // Пиши код ниже этой строки
    const filteredNumbers = [];
    
    // for (let i = 0; i < numbers.length; i += 1) {
    // const number = numbers[i];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}


  console.log(filterArray([1, 2, 3, 4, 5], 3));
  console.log(filterArray([1, 2, 3, 4, 5], 4));
  console.log(filterArray([1, 2, 3, 4, 5], 5));
  console.log(filterArray([12, 24, 8, 41, 76], 38));
  console.log(filterArray([12, 24, 8, 41, 76], 20));