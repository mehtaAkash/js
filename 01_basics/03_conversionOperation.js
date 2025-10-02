let score = "33abc"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Akash"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Akash" => true

let someNumber = 65

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************
let value = 3
let negValue = -value
// console.log(negValue); => -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // power 2^3=8
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " akash"

let str3 = str1 + str2
// console.log(str3); => hello akash

// console.log("1" + 2); =>12
// console.log(1 + "2"); =>12
// console.log("1" + 2 + 2); =>122
// console.log(1 + 2 + "2"); => 32
// console.log(2 + 3 + 4 +"6"+7); =>967 
// agar hum koi value ko string declare karte hai tab uske right ke saari element string mai convert ho jaati hai

// console.log( (3 + 4) * 5 % 3); =>2

// console.log(+true); =>1
// console.log(+""); =>0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion