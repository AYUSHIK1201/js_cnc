//for-in for array
/*
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {

    console.log(programming[key]);//op=>js......

    console.log(`${key} and ${programming[key]}`);//op=>0 and js .....
}
*/

//----------------------------------------------------------------------------------------------------------------------

//for-in for obj


/*
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject)
 {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

*/

//-----------------------------------------------------------------------------------------------------------------

//for-in in map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
console.log(key);
}