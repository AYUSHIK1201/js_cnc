//  Primitive -all are call by value =>use stack memory

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')  
const anotherId = Symbol('123')

console.log(id === anotherId); //both value diff value in symbol //hence false

// const bigNumber = 3456543576654356754n


//non-primitive-> Reference (Non primitive like object) => heap memory 
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId); // op=>symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3


///////////////////////////////////////////////////////////////////////////

//1.stack-call by value

let myyoutubename = "ayushikuare"

let anothername = myyoutubename

//console.log(anothername); //op=>ayushikuare
anothername = "anujkuare"

console.log(myyoutubename); //op=>ayushikuare
console.log(anothername); //op=>anujkuare


//////////////////////////////////////////////////////////////////////////
//2.heap -call by reference

let userOne =
{
   email : "ayushi.kuare@gmail.com",
   upi :"abc@57678"
}

//console.log(userOne.email); //op=>ayushi.kuare@gmail.com
let userTwo = userOne 

userTwo.email ="anuj.kuare@gmail.com";

//console.log(userOne.email);//op=>ayushi.kuare@gmail.com     
//because it uses heap memory means uses same reference and do not use call by value
//console.log(userTwo.email); //op=>ayushi.kuare@gmail.com




