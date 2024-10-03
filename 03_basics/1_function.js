function sayMyName(){  //declare function
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("I");
}

//sayMyName()         //calling function --to execute or use

//-------------------------------------------------------------------------

 /*function addTwoNumbers(number1, number2) //number1, number2 are parameters 
 {

     console.log(number1 + number2);
 }

addTwoNumbers(3,4) //when callinf function  3 4 are arguments
addTwoNumbers(3,"4")
addTwoNumbers("3",4)
addTwoNumbers(3,"a")
addTwoNumbers(3,null)
addTwoNumbers(3,4)

const result = addTwoNumbers(3, 5)

//console.log("Result: ", result);  //op=> Result:  undefined  because there is no "return" in function

*/



/*function addTwoNumbers2(number1, number2){

    // let result = number1 + number2 // result have only scope in function
    // return result
    return number1 + number2 //no line will print after returning statement
}

const result = addTwoNumbers2(3, 5)

console.log("Result: ", result); //op=>Result:  8

*/


//----------------------------------------------------------------------


/*function loginUserMessage(username = "sam"){
    if(!username)//means user name is not true ie argument is undefined 
    {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("ayushi"))
//if argument not passed then return undefined 

*/


//------------------------------------------------------------------------------


/*function calculateCartPrice(val1, val2, ...num1) //...  is rest or sprad operting
{
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))// op=> [ 500, 2000 ]
*/

//----------------------------------------------------------------------------------------------------

/*const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
  //or
handleObject({
    username: "sam",
    price: 399
})
*/


//-------------------------------------------------------

/*const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //op=>400

*/







