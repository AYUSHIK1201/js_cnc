let score1 = 33

//console.log(typeof score); //op->number
//console.log(typeof(score)); //op->number

let score2 = "33"
//console.log(typeof(score)); //op->string

let valueInNumber = Number(score2) //to convert string to number
//console.log(typeof valueInNumber); //op->string
//console.log(valueInNumber); //op->33


let score3 = "33abc"
//console.log(typeof(score)); //op->string

let valueInNumber3 = Number(score3) //to convert string to number
//console.log(typeof valueInNumber3); //op->string
//console.log(valueInNumber3); //op->NAN

// "33" => 33
// "33abc" => NaN
//  null => 0
// undefined => NAN
//  true => 1 , false => 0

let isLoggedIn = "hitesh"
let booleanIsLoggedIn = Boolean(isLoggedIn) //to boolean
 // console.log(booleanIsLoggedIn); // op-=>true

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); // op=> 33
//console.log(typeof stringNumber); // op=> string

// *********************** Operations ***********************

let value = 3
let negValue = -value
//console.log(negValue);  //op=>-3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

//console.log("1" + 2); //op=>12
//console.log(1 + "2"); //op=>12
//console.log("1" + 2 + 2); //op=>122
//console.log(1 + 2 + "2"); // op=>32

// console.log( (3 + 4) * 5 % 3);

 //console.log(+true); //op=>1
 //console.log(+""); //op=>0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // op=>101
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion