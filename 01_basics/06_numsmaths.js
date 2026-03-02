const score = 400;
//console.log(score);

let balance = new Number(6000);
//console.log(balance);
// when we create num using new keyword then it specially print [num:10] or it specifies that the type of num is number.

//console.log(Math.random()); // this method is use to print random number b/w 0 and 1.

// convert number to string. when we convert it we can use the properies of strings.
//console.log(balance.toString().length)
//console.log(balance.toFixed(2)) // method is used on a number to format it to a specified number of digits after the decimal point, returning the result as a string. we use this when we are building e-commerce websites.

const a = 23.894;
const b = 123.894;
//console.log(a.toPrecision(3))
//console.log(b.toPrecision(3))
// toPrecision mai jitne place tak value chahiye uske baad round-off kar deta hai.
//method in Javascript is used to format a number to a specific precision or length.

const otherNum = 100000
//console.log(otherNum.toLocaleString('en-IN'))

// +++++++++++++++++ Maths +++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); negative to positive
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8)); returns minimum element. 
// console.log(Math.max(4, 3, 6, 8)); returns maximum element.

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // return value b/w 10 and 20.
