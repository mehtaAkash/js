// Datatypes are divided into two types primitive and non primitive. The classification is done on the basis of how data are stored in memoryand how they are access through the memory.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

myFunction();

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack(primitive) and Heap(Non - Primitive)
let a = "akash";
let b = a;
b = "Kumar";
console.log(a);
console.log(b);
// so when we use primitive datatypes then the values are stored in stack and when we cahnge or modify the original value then it gives a copy to us and changes are done in the copy variable not in the original variable.

// Heap(Non primitive)
let user1 = {
    email:"abc12@gmail.com",
    upi:"user@ybl"

}

let user2 = user1;
user2.email = "night12@gmail.com";

console.log(user1.email);
console.log(user2.email);

// so when we use non-primitive dataypes the data are stored in heap and when we modify the original variable by copying its variable into other variable then the original value also gets change or modify so we actually modify the original declared value.
// isme original ki copy nhi milti, hume variable ki memory ki reference milti hai aur hume iske karn changes original mai dikhti hai.