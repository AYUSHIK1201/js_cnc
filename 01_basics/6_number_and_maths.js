const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//start after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  //start frm the 1st digit

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//put commas in number

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);//floor remove decimals

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //give random vlaue betweeen 10 nd 20