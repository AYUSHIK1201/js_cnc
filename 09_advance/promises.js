/*
const promiseOne = new Promise(function(resolve, reject)
{
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() //connect resolve and .then  ,.then is used to give the result when task is completed when resolve() is called
    }, 1000)
})

//to give the result when resolve() is called
promiseOne.then(function(){
    console.log("Promise consumed");
})
*/

////orrrrrrrrrrrrrrrrrrrrrrrrrrr

/*
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})
*/

//-----------------------------------------------------------------------------------------------------------------------------

/*const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user) //user is any name for argumet
{
    console.log(user);
})
*/


//-----------------------------------------------------------------------------------------------------------------------------
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) 
        {
            resolve({username: "hitesh", password: "123"})
        } 
        else
        {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))
 


//-----------------------------------------------------------------------------------------------------------------------------

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});


async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()




//-----------------------------------------------------------------------------------------------------------------------------
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
//fetch is executed before set timeout queue

fetch('https://api.github.com/users/hiteshchoudhary') //returns promise ie return resolve for reject
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all