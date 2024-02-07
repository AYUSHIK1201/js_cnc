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

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("ayushi"))




