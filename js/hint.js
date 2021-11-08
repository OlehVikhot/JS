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


// const str = "teSt";
// const arr = [1, 2, 3];

// console.log(str.length);
// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world!";

// // console.log(logg.slice(6, 11));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// // console.log(parseInt(test));
// console.log(parseFloat(test));


// --------------------------------------------------CALLBACK------


// function first() {
//     //do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`i learn: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('i done with this lesson');
// }

// learnJS('JavaScript', done);


// --------------------------------------------------OBJECT------


// const obj = new Object();

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);


// // //рахуємо кількість властивостей в обєкті
// // console.log(Object.keys(options).length);


// // console.log(options.name);

// // delete options.name;

// // console.log(options);

// //перебираєм всі свойства в обєкті

// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) == 'object') {
//         for (let i in options[key]){
//             console.log(`свойтво ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`свойтво ${key} имеет значение ${options[key]}`);
//         counter++;
//     } 
// }
// console.log(counter);


// --------------------------------------------------Масиви і псевомасиви------


// const arr = [1, 2, 3, 5, 10];
// // arr[99] = 0;
// // console.log(arr.length);

// arr.forEach(function(item, i, arr) {
    // console.log(`${i}: ${item} inside massive ${arr}`);
// });

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(compareNum);
// console.log(products.join('; '));

// function compareNum (a, b) {
//     return a - b;
// }


// ---------------------------------Передача по ссылке или по значению, Spread оператор (ES6-ES9)------


// let a = 5,
//     b = a;

// b = b + 5

// console.log(b);
// console.log(a);



// const obj = {
//     a: 5,
//     b: 1
// };

// // const copy = obj; // ссылку

// // copy.a = 10;

// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);


// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice();

// newArray[1] = 'asdasd';

// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejorbn', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);



// const array = ["a", "b"];

// const newAarray = [...array];



// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};


// ---------------------------------23. Основы ООП, прототипно-ориентированное наследование------


// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = Object.create(soldier);

// // const jonh = {
// //     health: 100
// // };



// Object.setPrototypeOf(jonh, soldier);

// jonh.sayHello();

