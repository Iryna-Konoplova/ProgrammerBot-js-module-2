function filterArray(numbers, value) {
  // Пиши код ниже этой строки
    const arrayNumbers = [];
    
  for (let i=0; i>value; i+=1) {
     arrayNumbers.push(i);
  }

    return arrayNumbers;
  // Пиши код выше этой строки
}



console.log(filterArray([1, 2, 3, 4, 5], 3));
  console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
  




// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
// const arrayNumbers = [];
//   for (i=0; i<numbers.length; i+=1) {
//     arrayNumbers.push(i);
//   }

//     return arrayNumbers;
//   // Пиши код выше этой строки
// }