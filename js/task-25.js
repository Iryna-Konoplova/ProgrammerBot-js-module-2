// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.

//     Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они
// присутствуют в обоих исходных массивах.А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной
// длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов,
// которые присутствуют в обоих исходных массивах.



// Рабочий вариант, но по условию нужно было применить includes

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const newArray = [];

// for (let i = 0; i < array1.length; i += 1) {

//   for (let j = 0; j < array2.length; j += 1) {
//      if (array1[i] === array2[j]) {
//       newArray.push(array1[i]);
//     }
//   }
// }
//   return newArray;
  
//   // Пиши код выше этой строки
// }


function getCommonElements(array1, array2) {
    // Пиши код ниже этой строки
    const newArray = [];
    
    for (const array of array1) {
        if (array2.includes(array)) {
          newArray.push(array); 
       }   
    }

      return newArray;
}


// Еще один вариант решения

// function getCommonElements(array1, array2) {
// //     // Пиши код ниже этой строки
//     const newArray = [];
// for (let i = 0; i < array1.length; i += 1) {
// if (array2.includes(array1[i])) {
//           newArray.push(array1[i]); 
//        } 

// }
//       return newArray;
// }

  console.log(getCommonElements([1, 2, 3], [2, 4]));
  console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
  console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
  console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
  console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
