// const tinderUser = new Object() //singletn obj
const tinderUser = {}//non singleton obj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//--------------------------------------------------

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {        //nesting of obj
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//-------------------------------------------------------------------------------


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }//obj2 values goes in obj1
 // const obj3 = Object.assign({}, obj1, obj2, obj4) //merge array--obj1,obj2,obj4 values goes in {}

const obj3 = {...obj1, ...obj2}//combine obj
//console.log(obj3);//op=>{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//--------------------------------------------------------------------------

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

//console.log(Object.keys(tinderUser));      //op=>[ 'id', 'name', 'isLoggedIn' ]
 //console.log(Object.values(tinderUser));   //op=>[ '123abc', 'Sammy', false ]
//console.log(Object.entries(tinderUser));    //op=>[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//property avaiable or not

