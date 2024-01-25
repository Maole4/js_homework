'use strict';
//1/for
let userNumber = prompt("Введіть ціле число:");
if (!isNaN(userNumber && userNumber !== null)) {
    let number = parseInt(userNumber);
    console.log(number)
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
   }
     else {
    console.log("Помилка:введіть число ");
}
//while
let value = prompt("Введіть ціле число:");

if (!isNaN(value) && value !== null) {
    let number = parseInt(value);
    let i = 2;

    console.log( number);

    while (i < number) {
        console.log(i);
        i += 2;
    }
} else {
    console.log("Помилка:введіть число");
}
// 2. Задача FizzBuzz
for (let k = 1; k <= 100; k++) {
    if (k % 3 === 0 && k % 5 === 0) {
        console.log("FizzBuzz");
    }
        else if (k % 3 === 0) {
            console.log("Fizz");
    }
    else if (k % 5 === 0) {
        console.log("Buzz");
    }
    else{ console.log(k)}
    }

