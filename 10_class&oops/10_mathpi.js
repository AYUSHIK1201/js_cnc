
//as Math.PI a constant value can be changed by getOwnPropertyDescriptor

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);
//op=> 
/*{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }
  */

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//op=>
/*
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}*/

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
//op=>
/*
name : ginger chai
price : 250
isAvailable : true*/