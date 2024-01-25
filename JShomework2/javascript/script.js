"use strict"
// 1. Перетворення типів
let number = 50;
let string = String(number);
console.log(string);
let numberString = "20";
let intNumber = parseInt(numberString);
console.log(intNumber);
let Number = "";
let boolean = Boolean(Number);
console.log(boolean);
// 2. Конвертер валют
let rate = 10;
let numbers = prompt("Введіть сумму");
console.log(numbers);
let result = numbers * rate;
console.log(result);
// 3. Обчислення вартості бензину
// let price = 32.85;
let liter =  parseFloat(prompt("Введіть кількість літрів бензину:"));
let priceLiter = parseFloat(prompt("Введіть ціну за літр бензину:"));
let totalPrice = liter * priceLiter;
console.log(Math.round(liter * priceLiter) / 100);
// 4.
let a = 2 // може бути будь-яке інше ціле додатнє число
let b = 6 // може бути будь-яке інше ціле додатнє число
let sum = a + b ;
let binaryResult = sum.toString(2);
console.log(binaryResult);

