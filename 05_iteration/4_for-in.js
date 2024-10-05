//for-in for array
/*
const programming = ["js", "rb", "py", "java", "cpp"]

for (const i in programming) {

    console.log(`key:${i} and value: ${programming[i]}`);
}
*/
/*
op=>key:0 and value: js
key:1 and value: rb
key:2 and value: py
key:3 and value: java
key:4 and value: cpp
*/


/*const greetings = "Hello world!"
for (const i in greetings) //i is itself the value
    {
         console.log(`key:${i} and value:${greetings[i]}`);
    }
         */
/*
op=>
key:0 and value:H
key:1 and value:e
key:2 and value:l
key:3 and value:l
key:4 and value:o
key:5 and value: 
key:6 and value:w
key:7 and value:o
key:8 and value:r
key:9 and value:l
key:10 and value:d
key:11 and value:!
*/


//for-in map
//NOT POSSIBLE

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) 
    {
console.log(key);
}



//for-in for obj

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject)
 {
    console.log(`key:${key}  value: ${myObject[key]}`);
}
/*key:js  value: javascript
key:cpp  value: C++
key:rb  value: ruby
key:swift  value: swift by apple
*/


//