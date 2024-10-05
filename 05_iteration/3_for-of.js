// for of

// ["", "", ""]
// [{}, {}, {}]

//------------------------------------------------------------------------------------------------------------------
//for of array
/*
const arr = [1, 2, 3, 4, 8]

for (const i of arr) //value of starts from 1 but indexing starts from 0
 {
    console.log(`value:${i}`);
    
}
    */
    
/*op=>
value:1
value:2
value:3
value:4
value:8
*/

/*const greetings = "Hello world!"
for (const i of greetings) //i is itself the value
    {
         console.log(`value:${i}`);
    }
         */
   /*op=>
value:H
value:e
value:l
value:l
value:o
value: 
value:w
value:o
value:r
value:l
value:d
value:!
*/



//--------------------------------------------------------------------------------------------------------------

//for-of for map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


//console.log(map);
/*op=>Map(3) {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fr' => 'France'
  }
  */

/*for (const [key, value] of map) {
   console.log(key, ':-', value);
}
   */
/*
IN :- India
USA :- United States of America
Fr :- France
*/

//------------------------------------------------------------------------------------------------------------------

//for-of for obj
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {
    //console.log(key, ':-', value);
   
}

 for (const [key, value] of myObject) {
     //console.log(key, ':-', value);
    
 }
 //op=>TypeError: myObject is not iterable
// for of does not work with obj for that use for in loops
