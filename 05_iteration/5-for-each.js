/* sentax-----------------------------
Array_name.forEach( function_name (val){
    console.log(val);
} )
*/

const coding = ["js", "ruby", "java", "python", "cpp"]


coding.forEach( function (val) //val take value of each element one by one
{
    console.log(val);//p=>js ruby java .......
} )

///////////////////////////////////////////////////////////////////////////////////////
/*
//arrow function
coding.forEach( (item) => {
  console.log(item);
 } )
 */

///////////////////////////////////////////////////////////////////////////////////////////
/*
//by calling refernce of function
function printMe(item){
  console.log(item);
}

coding.forEach(printMe)

*/
/*
coding.forEach( (item, index, arr)=> {
console.log(item, index, arr);
} )
*/

/////////////////////////////////////////////////////////////////////////////////
//array of obj

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )