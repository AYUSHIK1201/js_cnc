// Immediately Invoked Function Expressions (IIFE) ---to avoid global scope varibles pollution


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // 1st () is function and 2nd () is execution or call remember to add ; at end to add new iife function

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')