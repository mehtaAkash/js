// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/* the reason is that an equality check == and comparisons >, <,>=,<= work differently.
Comparisons convert null to a number , treating it as 0. That why (3)null >= is true and (1)null>0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === it check the value as well as its datatype.

console.log("2" === 2);