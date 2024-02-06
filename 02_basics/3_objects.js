//singleton obj created by cnstructor but not by litrals  eg==>// Object.create ---this is singleton obj

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//[] because its a symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]//array
}

 /*console.log(JsUser.email) //op=>
 console.log(JsUser["email"])
console.log(JsUser["full name"])//2 words  and is string in ""
 console.log(JsUser[mySym])//its a symbol
 */
 


 JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)//so that jsuser value cant be changed
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//take reference name
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());