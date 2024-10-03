/*if (true) {
    let a = 10
    const b = 20
    var c = 300
   
    
}
//console.log(a); //op=> a is not defined
//console.log(b);  //op=> b is not defined
//console.log(c); //op=>300 ---thats why we do not use var because it has scope issue and give result even after being in a scope

//var c = 300

*/



/*
var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

console.log(a);//op=>300
 //console.log(b); //op=>b is not defined
 console.log(c); //op=>300

 */

 //-----------------------------------------------------------------------------------------------------------

 //child function can acess parent function variable but not vice versa

 /*
 function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
     //console.log(website);//op=>website is not defined--as its scope is onlu inside two function

     two()// op=>hitesh

}

one()

*/

/*
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
         console.log(username + website);// op=>hitesh youtube
    }
    //console.log(website);//op=>website is not defined
}

//console.log(username);// op=>username is not defined

*/


/*console.log(addone(5))//can initialize before declare

function addone(num){
    return num + 1
}*/



/*addTwo(5)//op=> Cannot access 'addTwo' before initialization--cant inditazie before declare because we created a variable to 
const addTwo = function(num){
    return num + 2
}
*/