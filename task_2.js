// Задание 2
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord) принимающую строку (в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.
// const calculateEngravingPrice = function(message, pricePerWord) {
//   // твой код
// };
// /*
//  * Вызови функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// // ); // 120
// let message = 'Proin sociis natoque et magnis parturient montes mus';
// let pricePerWord = 10;


  const calculateEngravingPrice = function(message, pricePerWord) {

    let arr = message.split(/\s+/);

    let result = arr.length * pricePerWord;

    console.log(result);

    return result;
    };

  calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',10);
//80


  calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus',20);
 // 160

  calculateEngravingPrice('Donec orci lectus aliquam est magnis',40);
 // 240

  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);
   // 120


