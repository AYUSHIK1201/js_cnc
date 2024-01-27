// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()//remove last value

// myArr.unshift(9)//add value in strting of array 
// myArr.shift()//remove value from strting

// console.log(myArr.includes(9));//check 9 present or not in array
// console.log(myArr.indexOf(3));//if not exist then result is -1

// const newArr = myArr.join()//convert array to string

// console.log(myArr);
// console.log( newArr);

//////slice, splice
//slice do not manipulate main array and give the value before last element that is do not include range


//→splice manipulate main array and give the value including last element 
//→also remove remnants from original array according to range this is manipulating main array


console.log("A ", myArr);//=A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);//=[ 1, 2 ]
console.log("B ", myArr);B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);//C  [ 0, 4, 5 ]
console.log(myn2);//[ 1, 2, 3 ]