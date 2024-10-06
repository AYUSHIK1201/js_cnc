const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})


//apply multiple rules+filters
const newNums2 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
/*op=>
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

console.log(newNums2);
/*op=>
[
  41, 51,  61, 71,
  81, 91, 101
]
*/

