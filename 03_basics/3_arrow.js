/*const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() //can declare like this 
     {
        console.log(`${this.username} , welcome to website`);//here current context or this is user --op=>hitesh , welcome to website
       console.log(this); //give complete obj
    }
}

 //user.welcomeMessage()
// user.username = "sam"
//user.welcomeMessage()//op=>sam , welcome to website

//console.log(this);//op=>{} //here this is for global obj

*/

 /*function chai(){
     let username = "hitesh"
     console.log(this.username);//op=>undefined--can only use "this" inside object not function
 }

 chai()*/
//----------------------------------------------------------------------------------------------------------------
/*const chai = function () 
 {
    let username = "hitesh"
     console.log(this.username);

    }

    chai()
 */ 


/*const chai =  () => {
        let username = "hitesh"
        console.log(this);//op=>{}
    }
    chai()
*/    


 /* const addTwo = (num1, num2) => 
    {
             return num1 + num2
         }
             
//can write in same line with rturn keyword s it contain only 1 line statement calld implecit 
         //const addTwo = (num1, num2) =>  num1 + num2 
            //or
        //const addTwo = (num1, num2) => ( num1 + num2 )
        const addTwo = (num1, num2) => ({username: "hitesh"})
         
         
        // console.log(addTwo(3, 4))//op=>7

       /* // const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()*/