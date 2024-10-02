const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 /*marvel_heros.push(dc_heros)
 console.log(marvel_heros);//op=>[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
 //array inside array
console.log(marvel_heros[3][1]);//op=>flash
*/

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);//op=>[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
      //OR
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);//op=>[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //flat create 1 array by meging all elemets
//console.log(real_another_array); //op=>[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

//console.log(Array.isArray("Hitesh"))//op=>false
//console.log(Array.from("Hitesh"))//op=>[ 'H', 'i', 't', 'e', 's', 'h' ] //covert to array
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//op=>[ 100, 200, 300 ]


