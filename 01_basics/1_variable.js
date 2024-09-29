const accountId = 144553 //block scope ie {const ..}
let accountEmail = "hitesh@google.com"//block scope
var accountPassword = "12345" 
//function scope -accessible anywhere inside the function regardless if multiple block scope present

accountCity = "Jaipur" 
//if we do not assgin any variable keyword then it behaes as var
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log("account id :"+accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log("tabular format :\n ");
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);