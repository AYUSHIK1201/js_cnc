const coding = ["js", "ruby", "java", "python", "cpp"]

// for each cant be stored in a variable and can not return a value
/*const values = coding.forEach( (item) => 
{
console.log(item);
return item
} )

console.log(values);
*/
//-------------------------------------------------------------------------------------------------------

//adding values by for each in array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
const newNums2 = []

myNums2.forEach( (num) => {
if (num > 4) {
   newNums2.push(num)
  }
} )

 console.log(newNums2);
 */
  
 //orrrrrrrrrrrr

/*

const newNums = myNums.filter( (num) => {
     return num > 4
} )
console.log(newNums);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
//filter in obj

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History')

 userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

  console.log(userBooks);
 /*op=>
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/
  console.log(userBooks2);
  /*op=>
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/



