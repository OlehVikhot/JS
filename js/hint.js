"use strict";

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// }else if (num > 100) {
//     console.log('Too much');
// }else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Bad');
//         break;
//     case 100:
//         console.log('Bad');
//         break;
//     case 50:
//         console.log('Good');
//         break;
//     default:
//         console.log('Bad');
//         break;
// }



// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }


// do {
//     console.log(num);
//     num++;   
// }
// while (num < 55);


// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }

//     console.log(i);
// }


// --------------------------------------------------


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log("hello");
// };

// logger();



// const calc = (a, b) => { 
//     console.log('1');
//     return a + b;
//  };


// --------------------------------------------------


const str = "teSt";
// const arr = [1, 2, 3];

// console.log(str.length);
// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world!";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));