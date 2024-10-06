//reducer runs like a loop 
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (accumulator, currval) 
{
  console.log(`acc: ${accumulator} and currval: ${currval}`);
  
  return accumulator + currval // after this accumulator new value become accumulator + currval
}, 0) 

//0 is  initial value of accumulator and currval  is current value
/*op=> /*op=>acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3*/

//or--------------------------------------------------

/*
//by arrow function
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);
*/

/*--------------------------------------------------------------------------------------------------------------
//in array of objects

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
*/