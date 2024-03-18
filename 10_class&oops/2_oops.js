/*const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



console.log(user.username);//hitesh
//console.log(user.getUserDetails()); // complete obj
 console.log(this);//{}
*/
 ////-----------------------------------------------------------------------------------------------------------


function User(username, loginCount, isLoggedIn){
  
    this.username = username;   // "this.username" is our variable   ..cn also write as myusername= username;  is the same thing
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function()  //example of abstraction as we dont know how gretting is actually working internally
        console.log(`Welcome ${this.username}`);

    }

    return this
}


//"new" key word is a constructorfunction
//helps to avoid overriding of a function eg so that “usertwo” do not override “userone”
//1. key word creates a empty obj
//2.then it calls the constructor function
//3.after that it injects all the arguments values in th function

const userOne = new User("hitesh", 12, true) //exmple of encapsulation
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);
